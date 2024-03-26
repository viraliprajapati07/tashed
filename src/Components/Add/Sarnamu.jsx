import React from 'react'
import { Link } from 'react-router-dom'
function Sarnamu(props) {
  return (
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 mpsi-col">
                                        <div className="profile-sec-innerdata">
                                            <div className="mpsi-leftbar"><img src="assets/images/address-icon.png" alt="icon" /></div>
                                            <div className="mpsi-rightbar">
                                                <h4>{props.place}</h4>
                                                <p>Block Block A, St. 69 Street, House 2</p>
                                                <p className="profile-username-txt">Abu Hlefa</p>
                                                <div className="profile-address-ed">
                                                    <Link to='/editadd' className="pae-addEdit">Edit</Link>
                                                    <button type="button" className="btn pae-addDelete">Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
  )
}

export default Sarnamu