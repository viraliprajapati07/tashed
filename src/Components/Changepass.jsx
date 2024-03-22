import React from 'react'
import { Link } from 'react-router-dom'
function Changepass() {
    return (
        <>
            <div className="wrapper">
                <section className="middle-content">
                    <div className="middle-100vh-content">
                        <div className="cred-forms-logo cfl-absolute">
                            <img src="assets/images/main-logo.png" alt="brand logo" />
                        </div>
                        <div className="forgot-password common-credform-padding">
                            <div className="login-inner">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="forgot-password-form common-credform">
                                                <div className="common-credform-inner">
                                                    <h3>change password</h3>
                                                    <form>
                                                        <div className="form-group">
                                                            <input type="password" name="current-pass" placeholder="Current password" className="form-control" />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="password" name="new-pass" placeholder="New password" className="form-control" />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="password" name="reenter-pass" placeholder="Re-enter password" className="form-control" />
                                                        </div>
                                                        <div className="common-credform-btns">
                                                            <div className="common-credform-loginbtns mb-0">
                                                                <Link to='/login'>
                                                                    <button type="button" className="btn forgotpass-sendbtn login-btn" id="changepass_updatebtn">
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
            </div>
        </>
    )
} export default Changepass