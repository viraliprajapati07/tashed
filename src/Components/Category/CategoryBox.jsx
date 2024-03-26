import React from 'react'
import { Link } from 'react-router-dom'
function CategoryBox(props) {
  return (
    <div className="col-lg-6 col-md-6 col-sm-12 col-12 cm-col-100">
    <div className="home-catname">
        <Link to='/categorylist'>
            <div className="home-catimg">
                <img src={props.categoryImg} alt="category image" />
                <h4>{props.categoryName}</h4>
            </div>
        </Link>
    </div>
</div>
  )
}
export default CategoryBox