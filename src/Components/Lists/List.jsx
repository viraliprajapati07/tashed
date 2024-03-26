import React from 'react'
import { Link } from 'react-router-dom'
function List(props) {
  return (
    <div className="catg-sliderbox">
    <Link to='/category'>
        <div className="catg-img">
            <img src={props.listImage} alt="category" />
        </div>
        <h5>{props.listName}</h5>
    </Link>

</div>
  )
}

export default List