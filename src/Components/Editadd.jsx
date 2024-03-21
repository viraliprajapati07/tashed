import React from 'react'
import { Link } from 'react-router-dom'
function Editadd() {
  return (
    <>
    <div class="wrapper">

<section class="middle-content">
    <div class="middle-100vh-content">
        <div class="cred-forms-logo cfl-absolute">
            <img src="assets/images/main-logo.png" alt="brand logo"/>
        </div>
        <div class="register common-credform-padding">
            <div class="register-inner">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="register-form common-credform update-address-form">
                                <div class="common-credform-inner">
                                    <h3 class="comm-mob-sec">Update Address</h3>
                                    <form>
                                        <div class="form-group">
                                            <input type="text" name="add-name" placeholder="Address name" class="form-control" value="Home"/>
                                        </div>
                                        <div class="form-group">
                                            <div class="new-address-select">
                                                <img src="assets/images/select-arrow.png" alt="arrow"/>
                                                <select type="select" name="add-area" class="form-control">
                                                    <option disabled="" selected="">Area</option>
                                                    <option value="Area Name">Area Name</option>
                                                    <option value="Area Name">Area Name</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" name="add-block" placeholder="Block" class="form-control" value="Block Block A"/>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" name="add-street" placeholder="street" class="form-control" value="St. 69 Street"/>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" name="add-avenue" placeholder="Avenue ( Optional )" class="form-control"/>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" name="add-building-no" placeholder="Building number" class="form-control" value="2"/>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" name="add-floor" placeholder="Floor ( Optional )" class="form-control"/>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" name="add-apartment" placeholder="Apartment number ( Optional )" class="form-control"/>
                                        </div>
                                        <div class="common-credform-btns">
                                            <div class="common-credform-loginbtns">
                                                <Link to='/Address'>
                                                <button type="button" class="btn login-btn" id="address_updateBtn">
                                                    Update
                                                </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<footer class="main-footer" id="contactus_sec">
    <div class="mf-top">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="mf-title common-main-title">
                        <h2>Contact us</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="mf-contactdata">
                        <div class="mfc-flex">
                            <div class="mfc-flexdata">
                                <h3>office number</h3>
                                <h4><a href="javascript:void(0)">6667388</a></h4>
                            </div>
                        </div>
                        <div class="mfc-flex">
                            <div class="mfc-flexdata">
                                <h3>office number</h3>
                                <h4><a href="javascript:void(0)">6667388</a></h4>
                            </div>
                        </div>
                        <div class="mfc-flex">
                            <div class="mfc-flexdata">
                                <h3>office number</h3>
                                <h4><a href="javascript:void(0)">6667388</a></h4>
                            </div>
                        </div>
                        <div class="mfc-flex">
                            <div class="mfc-flexdata">
                                <h3>office number</h3>
                                <h4><a href="javascript:void(0)">6667388</a></h4>
                            </div>
                        </div>
                    </div>
                    <div class="mfc-saperator">
                        <div class="mfc-saperator-line"></div>
                    </div>						
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="mfc-form">
                        <form>
                            <div class="form-group">
                                <input type="text" name="name" placeholder="Name" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <input type="text" name="phone" placeholder="Email or Phone number" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <textarea type="textarea" name="commnet" placeholder="Comment" class="form-control"></textarea>
                            </div>
                            <div class="form-group mb-0 mfc-formsend-btn">
                                <button type="button" class="btn">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="mfc-map">
                        <h3>STORE ADDRESS</h3>
                        <p>Store address, Street, Buliding, Office 1012</p>
                        <div class="mfc-mapinner">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27814.41193999645!2d47.961267178803226!3d29.37610101465698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9c83ce455983%3A0xc3ebaef5af09b90e!2sKuwait%20City%2C%20Kuwait!5e0!3m2!1sen!2sin!4v1684418108436!5m2!1sen!2sin" 
                            style={{border:'0', allowfullscreen:"" ,loading:"lazy" ,referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mf-bottom">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12 col-12 align-self-center">
                    <div class="mf-copyright">
                        <p>© 2023 Tashead. All rights reserved.</p>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 col-12 align-self-center">
                    <div class="mf-socials">
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

<div class="scroll-top"> 
    <a class="scrollToTop" href="#"> 
    <i class="fa fa-angle-up" aria-hidden="true"></i></a> 
</div>

</div>
    </>
  )
}

export default Editadd