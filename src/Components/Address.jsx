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
                            <div className="mpsi-leftbar"><img src="assets/images/address-icon.png" alt="icon"/></div>
                            <div className="mpsi-rightbar">
                                <h4>Home</h4>
                                <p>Block Block A, St. 69 Street, House 2</p>
                                <p className="profile-username-txt">Abu Hlefa</p>
                                <div className="profile-address-ed">
                                <Link to='/Editadd' className="pae-addEdit">Edit</Link>
                                    <button type="button" className="btn pae-addDelete">Remove</button>
                                </div>
                            </div>
                        </div>							
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 mpsi-col">
                        <div className="profile-sec-innerdata">
                            <div className="mpsi-leftbar"><img src="assets/images/address-icon.png" alt="icon"/></div>
                            <div className="mpsi-rightbar">
                                <h4>Office</h4>
                                <p>Block Block A, St. 69 Street, House 2</p>
                                <p className="profile-username-txt">Abu Hlefa</p>
                                <div className="profile-address-ed">
                                    <Link to='/Editadd' className="pae-addEdit">Edit</Link>
                                    <button type="button" className="btn pae-addDelete">Remove</button>
                                </div>
                            </div>
                        </div>							
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 mpsi-col">
                        <div className="profile-sec-innerdata">
                            <div className="mpsi-leftbar"><img src="assets/images/address-icon.png" alt="icon"/></div>
                            <div className="mpsi-rightbar">
                                <h4>Workshop</h4>
                                <p>Block Block A, St. 69 Street, House 2</p>
                                <p className="profile-username-txt">Abu Hlefa</p>
                                <div className="profile-address-ed">
                                <Link to='/Editadd' className="pae-addEdit">Edit</Link>
                                    <button type="button" className="btn pae-addDelete">Remove</button>
                                </div>
                            </div>
                        </div>							
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 mpsi-col">
                        <div className="profile-sec-innerdata">
                            <div className="mpsi-leftbar"><img src="assets/images/address-icon.png" alt="icon"/></div>
                            <div className="mpsi-rightbar">
                                <h4>Clinet 1 aziz</h4>
                                <p>Block Block A, St. 69 Street, House 2</p>
                                <p className="profile-username-txt">Abu Hlefa</p>
                                <div className="profile-address-ed">
                                <Link to='/Editadd' className="pae-addEdit">Edit</Link>
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
{/* <!-- end middle content -->

<!-- start main footer --> */}
<footer className="main-footer" id="contactus_sec">
    <div className="mf-top">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="mf-title common-main-title">
                        <h2>Contact us</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="mf-contactdata">
                        <div className="mfc-flex">
                            <div className="mfc-flexdata">
                                <h3>office number</h3>
                                <h4><a href="javascript:void(0)">6667388</a></h4>
                            </div>
                        </div>
                        <div className="mfc-flex">
                            <div className="mfc-flexdata">
                                <h3>office number</h3>
                                <h4><a href="javascript:void(0)">6667388</a></h4>
                            </div>
                        </div>
                        <div className="mfc-flex">
                            <div className="mfc-flexdata">
                                <h3>office number</h3>
                                <h4><a href="javascript:void(0)">6667388</a></h4>
                            </div>
                        </div>
                        <div className="mfc-flex">
                            <div className="mfc-flexdata">
                                <h3>office number</h3>
                                <h4><a href="javascript:void(0)">6667388</a></h4>
                            </div>
                        </div>
                    </div>
                    <div className="mfc-saperator">
                        <div className="mfc-saperator-line"></div>
                    </div>						
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="mfc-form">
                        <form>
                            <div className="form-group">
                                <input type="text" name="name" placeholder="Name" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <input type="text" name="phone" placeholder="Email or Phone number" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <textarea type="textarea" name="commnet" placeholder="Comment" className="form-control"></textarea>
                            </div>
                            <div className="form-group mb-0 mfc-formsend-btn">
                                <button type="button" className="btn">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="mfc-map">
                        <h3>STORE ADDRESS</h3>
                        <p>Store address, Street, Buliding, Office 1012</p>
                        <div className="mfc-mapinner">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27814.41193999645!2d47.961267178803226!3d29.37610101465698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9c83ce455983%3A0xc3ebaef5af09b90e!2sKuwait%20City%2C%20Kuwait!5e0!3m2!1sen!2sin!4v1684418108436!5m2!1sen!2sin" 
                            style={{border:'0', allowfullscreen:"" ,loading:"lazy" ,referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="mf-bottom">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12 align-self-center">
                    <div className="mf-copyright">
                        <p>© 2023 Tashead. All rights reserved.</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12 align-self-center">
                    <div className="mf-socials">
                        <ul>
                            <li><a href="javascript:void(0)"><img src="assets/images/twitter.png" alt="twitter icon"/></a></li>
                            <li><a href="javascript:void(0)"><img src="assets/images/instagram.png" alt="twitter icon"/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
{/* <!-- end main footer -->

<!-- scroll top icon --> */}
<div className="scroll-top"> 
    <a className="scrollToTop" href="#"> 
    <i className="fa fa-angle-up" aria-hidden="true"></i></a> 
</div>


</div>
  </>
  )
}

export default Address