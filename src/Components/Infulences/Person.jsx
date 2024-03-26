import React from 'react'
import { Link } from 'react-router-dom'
function Person(props) {
  return (

                                    <div className="swiper-slide influencers-boxcol">
											<Link to='/influencers' className="influencers-link">
												<div className="influencers-img">
													<img src={props.pplImage} alt="influencers image" />
												</div>
												<div className="influencers-name">
													<h4>{props.pplName}</h4>
												</div>
											</Link>
										</div>
    
  )
}

export default Person