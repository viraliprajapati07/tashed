import React from 'react'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <>
    <div className="wrapper">

<section className="middle-content">
    <div className="middle-100vh-content">
        <div className="cred-forms-logo cfl-absolute">
            <img src="assets/images/main-logo.png" alt="brand logo"/>
        </div>
        <div className="login common-credform-padding">
            <div className="login-inner">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="login-form common-credform">
                                <div className="common-credform-inner">
                                    <h3 className="comm-mob-sec">Login</h3>
                                    <form>
                                        <div className="form-group">
                                            <input type="email" name="email" placeholder="Email" className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" name="password" placeholder="Password" className="form-control"/>
                                        </div>
                                        <div className="form-group forgot-linkgroup mb-0">
                                            <Link to='/Forgotpass' className="forgot-passlink">Forgot Password !</Link>
                                        </div>
                                        <div className="common-credform-btns">
                                            <div className="common-credform-loginbtns">
                                                <button type="button" className="btn login-btn" id="login_btn">Login</button>
                                            </div>
                                            <div className="common-credform-guestbtns">
                                                <button type="button" className="btn guest-btn" id="guest_btn">
                                                    Continue as a guest
                                                </button>
                                            </div>
                                            <div className="common-credform-regbtns mb-0">
                                                <Link to='/Register' className="btn register-btn" id="register_btn">
                                                    Register !
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
                            style={{border:'0',allowfullscreen:"" ,loading:"lazy" ,referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
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

<div className="scroll-top"> 
    <a className="scrollToTop" href="#"> 
    <i className="fa fa-angle-up" aria-hidden="true"></i></a> 
</div>


</div>
    
    </>
  )
}

export default Login