import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogsList extends Component {
  state = {isLoading: true, blogsData: []}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch(
      'https://blogprogton.wpcomstaging.com/wp-json/wp/v2/posts',
    )
    const statusCode = await response.statusCode
    console.log(statusCode)
    const data = await response.json()

    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      url: data.url,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
    }))
    this.setState({blogsData: formattedData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state
    console.log(isLoading)

    return (
      <div className="blog-list-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          blogsData.map(item => <BlogItem blogData={item} key={item.id} />)
        )}
      </div>
    )
  }
}

export default BlogsList
