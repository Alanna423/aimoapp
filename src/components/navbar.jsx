import React, { Component } from 'react';

const NavBar = () => {
    let totalCounters = " " + 4
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                    <a class="nav-link" href="#">Features</a>
                    <a class="nav-link" href="#">Pricing</a>
                    <a class="nav-link disabled">Disabled</a>
                </div>
            </div>
        </nav>
        //     <nav class="navbar navbar-expand-lg navbar-light bg-light">
        //     <a class="navbar-brand" href="#">Navbar</a>
        //     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //         <span class="navbar-toggler-icon"></span>
        //     </button>
        //     <div class="collapse navbar-collapse" id="navbarNav">
        //         <ul class="navbar-nav">
        //             <li class="nav-item active">
        //                 <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        //             </li>
        //             <li class="nav-item">
        //                 <a class="nav-link" href="#">Features</a>
        //             </li>
        //             <li class="nav-item">
        //                 <a class="nav-link" href="#">Pricing</a>
        //             </li>
        //             <li class="nav-item">
        //                 <a class="nav-link disabled">Disabled</a>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>
    );
}

export default NavBar;