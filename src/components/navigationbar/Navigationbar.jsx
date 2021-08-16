import React, { Component } from 'react';
import './Navigationbar.css'

import iconLogo from '../../static/images/inventory-white.png';
import menubar from '../../static/images/menu.png'

import reporticon from "../../static/images/side-menu-icon/report.svg"
import uploadexcelicon from "../../static/images/side-menu-icon/dashboard.svg"
import darklogo from "../../static/images/Radiant-logo.jpg"
import updateicon  from "../../static/images/update-icon.svg"
import excelattachicon from "../../static/images/excel-attached-icon.svg"



const Navigationbar = (props) => {   


    return (  

        <div className="maincontent">
            <div className="wrapper">
                <div className="staticcontent">
                    <div className="sidenav">
                        <div className="d-flex align-items-center logo-box justify-content-around ">
                            <a href="#" className="waves-effect waves-light nav-link d-none d-md-inline-block mx-10 push-btn bg-transparent text-white" data-toggle="push-menu" role="button">
                                <img src={menubar} width={"25px"} />
                                {/* <span class="icon-Align-left"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span> */}
                            </a>
                            <a href="index.html" class="logo">

                                <div class="logo-lg">
                                    <span class="light-logo"><img src={iconLogo} alt="logo" width={"150px"} /></span>
                                    {/* <span class="dark-logo"><img src="images/inventory-logo.svg" alt="logo" width="160px" /></span> */}
                                </div>
                            </a>

                        </div>
                
                
                        <aside className="navcontent">
                            <ul className="navlist">
                                <li>
                                    <span ><img src={reporticon} alt="" width="20px"/></span>
                                    <span>Report</span>
                                </li>
                                <li>
                                    <span ><img src={uploadexcelicon} alt="" width="20px"/></span>
                                    <span>Upload Excel</span>
                                </li>
                            </ul>
                    </aside>
                </div>
                    <div className="headernav">
                        <div className="headernav1">

                            <div class="app-menu">
                                <img class="cmpy-logo m-l-10" src={darklogo} alt="" width="120px" />
                                <ul class="header-megamenu nav">
                                    <li class="btn-group nav-item d-md-none">
                                        <a href="#" class="waves-effect waves-light nav-link push-btn" data-toggle="push-menu" role="button">
                                            <span class="icon-Align-left"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span>
                                        </a>
                                    </li>
                                    <li class="btn-group nav-item d-none d-xl-inline-block">
                                        <a href="contact_app_chat.html" class="waves-effect waves-light nav-link svg-bt-icon" title="Chat">
                                            <i class="icon-Chat"><span class="path1"></span><span class="path2"></span></i>
                                        </a>
                                    </li>
                                    <li class="btn-group nav-item d-none d-xl-inline-block">
                                        <a href="mailbox.html" class="waves-effect waves-light nav-link svg-bt-icon" title="Mailbox">
                                            <i class="icon-Mailbox"><span class="path1"></span><span class="path2"></span></i>
                                        </a>
                                    </li>
                                    <li class="btn-group nav-item d-none d-xl-inline-block">
                                        <a href="extra_taskboard.html" class="waves-effect waves-light nav-link svg-bt-icon" title="Taskboard">
                                            <i class="icon-Clipboard-check"><span class="path1"></span><span class="path2"></span><span class="path3"></span></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="navbar-custom-menu r-side">
                                <ul class="nav navbar-nav">


                                    <li class="btn-group last-update-excel">
                                        <a href="upload-excel.html">
                                            <span class="font-weight-600 text-success">Last Updated Today 12:30 PM</span>
                                            <img src={updateicon} class="" width="30px" />
                                            <img src={excelattachicon} width="40px" />
                                        </a>
                                    </li>


                                </ul>
                            </div>
                        </div>
                        <div className="render">
                            {props.children}
                        </div>                    
                    </div>
                    
                </div>
               
              

            </div>
           
        </div>

    );
}
 
export default Navigationbar;