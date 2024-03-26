import React from 'react'
import Links from './NavLinks/Links'
import Sarnamu from './Add/Sarnamu'
import { Link } from 'react-router-dom'
function Address() {
    return (
        <>
            <div className="wrapper">
                <section className="middle-content">
                <Link to='/profile'><Links linkName='Profile' linkName2='Address' /></Link>
                    <div className="main-profile-sec">
                        <div className="profile-sec-inner">
                            <div className="container">
                                <div className="row">
                                    <Sarnamu place='HOME' />
                                    <Sarnamu place='OFFICE' />
                                    <Sarnamu place='WORKSHOP' />
                                    <Sarnamu place='Clinet 1 aziz'/>
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