import React from 'react'
import { Link } from 'react-router-dom'
function Address() {
    return (
        <>
            <div className="wrapper">
                <section className="middle-content">
                    <div className="cs-breadcrumb comm-mob-sec">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <ul>
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="Profile.html">Profile</a></li>
                                        <li>Addresses</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-profile-sec">
                        <div className="profile-sec-inner">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 mpsi-col">
                                        <div className="profile-sec-innerdata active">
                                            <div className="mpsi-leftbar"><img src="assets/images/address-icon.png" alt="icon" /></div>
                                            <div className="mpsi-rightbar">
                                                <h4>Home</h4>
                                                <p>Block Block A, St. 69 Street, House 2</p>
                                                <p className="profile-username-txt">Abu Hlefa</p>
                                                <div className="profile-address-ed">
                                                    <Link to='/editadd' className="pae-addEdit">Edit</Link>
                                                    <button type="button" className="btn pae-addDelete">Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 mpsi-col">
                                        <div className="profile-sec-innerdata">
                                            <div className="mpsi-leftbar"><img src="assets/images/address-icon.png" alt="icon" /></div>
                                            <div className="mpsi-rightbar">
                                                <h4>Office</h4>
                                                <p>Block Block A, St. 69 Street, House 2</p>
                                                <p className="profile-username-txt">Abu Hlefa</p>
                                                <div className="profile-address-ed">
                                                    <Link to='/editadd' className="pae-addEdit">Edit</Link>
                                                    <button type="button" className="btn pae-addDelete">Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 mpsi-col">
                                        <div className="profile-sec-innerdata">
                                            <div className="mpsi-leftbar"><img src="assets/images/address-icon.png" alt="icon" /></div>
                                            <div className="mpsi-rightbar">
                                                <h4>Workshop</h4>
                                                <p>Block Block A, St. 69 Street, House 2</p>
                                                <p className="profile-username-txt">Abu Hlefa</p>
                                                <div className="profile-address-ed">
                                                    <Link to='/editadd' className="pae-addEdit">Edit</Link>
                                                    <button type="button" className="btn pae-addDelete">Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 mpsi-col">
                                        <div className="profile-sec-innerdata">
                                            <div className="mpsi-leftbar"><img src="assets/images/address-icon.png" alt="icon" /></div>
                                            <div className="mpsi-rightbar">
                                                <h4>Clinet 1 aziz</h4>
                                                <p>Block Block A, St. 69 Street, House 2</p>
                                                <p className="profile-username-txt">Abu Hlefa</p>
                                                <div className="profile-address-ed">
                                                    <Link to='/editadd' className="pae-addEdit">Edit</Link>
                                                    <button type="button" className="btn pae-addDelete">Remove</button>
                                                </div>
                                            </div>
                                        </div>
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
export default Address