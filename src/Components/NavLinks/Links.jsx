import React from 'react'
import { Link } from 'react-router-dom'
function Links(props) {
  return (
    <div className="cs-breadcrumb comm-mob-sec">
						<div className="container">
							<div className="row">
								<div className="col-12">
									<ul>
										<li><Link to='/home'>Home</Link></li>
										<li>{props.linkName}</li>
                                        <li>{props.linkName2}</li>
									</ul>
								</div>
							</div>
						</div>
	</div>
  )
}

export default Links