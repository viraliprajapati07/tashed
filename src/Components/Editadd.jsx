import React from 'react'
import { Link } from 'react-router-dom'
function Editadd() {
    return (
        <>
            <div class="wrapper">
                <section class="middle-content">
                    <div class="middle-100vh-content">
                        <div class="cred-forms-logo cfl-absolute">
                            <img src="assets/images/main-logo.png" alt="brand logo" />
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
                                                            <input type="text" name="add-name" placeholder="Address name" class="form-control" value="Home" />
                                                        </div>
                                                        <div class="form-group">
                                                            <div class="new-address-select">
                                                                <img src="assets/images/select-arrow.png" alt="arrow" />
                                                                <select type="select" name="add-area" class="form-control">
                                                                    <option disabled="" selected="">Area</option>
                                                                    <option value="Area Name">Area Name</option>
                                                                    <option value="Area Name">Area Name</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="text" name="add-block" placeholder="Block" class="form-control" value="Block Block A" />
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="text" name="add-street" placeholder="street" class="form-control" value="St. 69 Street" />
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="text" name="add-avenue" placeholder="Avenue ( Optional )" class="form-control" />
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="text" name="add-building-no" placeholder="Building number" class="form-control" value="2" />
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="text" name="add-floor" placeholder="Floor ( Optional )" class="form-control" />
                                                        </div>
                                                        <div class="form-group">
                                                            <input type="text" name="add-apartment" placeholder="Apartment number ( Optional )" class="form-control" />
                                                        </div>
                                                        <div class="common-credform-btns">
                                                            <div class="common-credform-loginbtns">
                                                                <Link to='/address'>
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
            </div>
        </>
    )
} export default Editadd