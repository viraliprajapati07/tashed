import React from 'react'
import Links from './NavLinks/Links'
import Instock from './Table/Instock'
import OutofStock from './Table/OutofStock'
function Whishlist() {
    return (
        <>
            <div className="wrapper">
                <section className="middle-content">
                    <Links linkName='Order List' />
                    <div className="wishlist-sec">
                        <div className="container">
                            <div className="row comm-mob-sec">
                                <div className="col-12">
                                    <div className="common-filter-dropdown order-filter-dropdown">
                                        <select type="select">
                                            <option selected>Filter by Status</option>
                                            <option value="In Stock">In Stock</option>
                                            <option value="Out of Stock">Out of Stock</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="table-responsive">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th width="34px"></th>
                                                    <th width="100px">Image</th>
                                                    <th>Product Name</th>
                                                    <th width="150px">Unit Price</th>
                                                    <th width="150px">Stock Status</th>
                                                    <th width="140px"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <Instock />
                                                <OutofStock />
                                                <Instock />
                                                <OutofStock />
                                                <Instock />
                                                <OutofStock />
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="row comm-desk-sec">
                                <div className="col-12">
                                    <div className="common-filter-dropdown order-filter-dropdown">
                                        <select type="select">
                                            <option selected>Filter by Status</option>
                                            <option value="In Stock">In Stock</option>
                                            <option value="Out of Stock">Out of Stock</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="table-responsive">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <Instock/>
                                                </tr>
                                                <tr>
                                                    <OutofStock />
                                                </tr>
                                            </tbody>
                                        </table>
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
export default Whishlist