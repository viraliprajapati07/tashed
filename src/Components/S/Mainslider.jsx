import React from 'react'
function Mainslider(props) {
  return (
     
								<div className="slide">
									<img src={props.mainImage} alt="Banner 1" />
									<div className="text-overlay">
										<h1>ALL YOU NEED TO START <br /> YOUR DREAM HOME</h1>
										<p>
											Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam<br />
											nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat<br />
											volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation<br />
											ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis<br />
											autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie<br />
											consequat, vel illum dolore eu feugiat
										</p>
										<button className='b'>Start Shopping</button>
									</div>
								</div>
		)
}
export default Mainslider