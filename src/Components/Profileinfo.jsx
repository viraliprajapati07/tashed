import React from 'react'
import { Link } from 'react-router-dom'
import Links from './NavLinks/Links'
function Profileinfo() {
    return (
        <>
            <div className="wrapper">
                <section className="middle-content">
                <Link to='/profile'>
                    <Links linkName='Profile' linkName2='Profile Info'/>
                </Link>
                <div className="main-profile-sec">
                        <div className="profile-sec-inner">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="main-profile-information">
                                            <div className="main-profile-information-inner">
                                                <div className="mpinfoi-left">
                                                    <label>Name:</label>
                                                    <p>Abu Hlefa</p>
                                                </div>
                                                <div className="mpinfoi-right">
                                                    <Link to='/changename' className="mpinfoi-right-editBtn">Edit</Link>
                                                </div>
                                            </div>
                                            <div className="main-profile-information-inner">
                                                <div className="mpinfoi-left">
                                                    <label>Email:</label>
                                                    <p>vishal.vnerds@gmail.com</p>
                                                </div>
                                                <div className="mpinfoi-right">
                                                    <Link to='/changemail' className="mpinfoi-right-editBtn">Edit</Link>
                                                </div>
                                            </div>
                                            <div className="main-profile-information-inner">
                                                <div className="mpinfoi-left">
                                                    <label>Mobile Number:</label>
                                                    <p>+91 9664741462</p>
                                                </div>
                                                <div className="mpinfoi-right">
                                                    <Link to='/changephone' className="mpinfoi-right-editBtn">Edit</Link>
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
} export default Profileinfo