import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(
      `https://blogprogton.wpcomstaging.com/wp-json/wp/v2/posts/${id}`,
    )
    const data = await response.json()

    const updatedData = {
      url: data.url,

      title: data.title,
      date: data.date,

      excerpt: data.excerpt,
      img: data.img,
    }
    this.setState([{blogData: updatedData, isLoading: false}])
  }

  renderBlogItemDetails = () => {
    const {blogData} = this.state
    const {url, title, date, excerpt, img} = blogData

    return (
      <div className="blog-info">
        <h2 className="blog-details-title">{title}</h2>
        <div className="author-details">
          <img className="author-pic" src={img} alt={title} />
          <p className="details-author-name">{date}</p>
        </div>
        <img className="blog-image" src={img} alt={title} />
        <p className="blog-content">{excerpt}</p>
        <a href={url}>Navigate here</a>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="blog-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
