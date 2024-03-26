import React from 'react'
import List from './Lists/List'
function Categorylist() {
	return (
		<>
			<div className="wrapper">
				<section className="middle-content">
					<div className="catg-slider catlist-padding">
						<div className="container">
							<div className="row">
								<div className="col-12">
									<div className="catg-sliderinner catlist-flex">
										<List listImage='assets/images/catlist-1.png' listName="LEAVING MATERIAL" />
										<List listImage='assets/images/catlist-2.png' listName="STRUCTURE MATERIAL" />
										<List listImage='assets/images/catlist-3.png' listName="PLUMBING MATERIAL" />
										<List listImage='assets/images/catlist-4.png' listName="FLOORING MATERIAL" />
										<List listImage='assets/images/catlist-5.png' listName="WOODEN MATERIAL" />
										<List listImage='assets/images/catlist-6.png' listName="PAINTING MATERIAL" />
										<List listImage='assets/images/catlist-7.png' listName="REQUIRED INSTALLATION MATERIAL" />
										<List listImage='assets/images/catlist-1.png' listName="FINISHING MATERIAL" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	)
}
export default Categorylist