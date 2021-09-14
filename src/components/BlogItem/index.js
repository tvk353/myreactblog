import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, title, date, img} = blogData

  return (
    <Link to={`/blogs/${id}`} className="item-link">
      <div className="item-container">
        <img className="item-image" src={img} alt={`item${id}`} />
        <div className="item-info">
          <p className="item-title">{title}</p>
          <div className="author-info">
            <img className="avatar" src={img} alt={`avatar${id}`} />
            <p className="date">{date}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
