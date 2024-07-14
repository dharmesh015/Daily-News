import React, { Component } from 'react'

import {Link
  } from "react-router-dom";


// export class Nevbar extends Component {
  const Nevbar=()=>{

    // render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-body">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Daily News</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                   <li className="nav-link "><Link className="nav-link " aria-current="page" to="/">Home</Link></li>
                                    <li className="nav-link "><Link className="nav-link "  to="/sports">Sports</Link></li>
                                    <li className="nav-link "><Link className="nav-link "  to="/entertainment">Entertainment</Link></li>
                                    <li className="nav-link "><Link className="nav-link "  to="/technology">Technology</Link></li>
                                    <li className="nav-link "><Link className="nav-link "  to="/business">Business</Link></li>
                                    


                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    // }
}

export default Nevbar
