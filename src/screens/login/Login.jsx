import React, { Component, useState } from 'react';
import axios from "axios"
import swal from 'sweetalert';




import './Login.css';
import caroselpic from '../../static/images/login1/Slider-img-01.svg';
import serviceman from '../../static/images/login1/service-man.png';
import radiantlogo from '../../static/images/login1/Radiant-logo.jpg'

import Textbox from '../../components/textbox/Textbox';
import Button from '../../components/button/Button';




const Login = (props) => {

    const [{username,password},setState]=useState({username:"", password:""})
   

    const handleuserinput=({target:{name,value}})=>{
        setState(prestate=>({...prestate,[name]:value}))       
    }

    
    const onsubmit=async (e)=>{        
        e.preventDefault()
        const params={username,password}
        const res=await axios.post("http://localhost:8080/api/users/login",params)
        const data=await res.data
        console.log(data);
        if(data.Status===true)
        {
            props.history.push("/Navbar")
        }
        else
        {
            swal({
                title: "Login",
                text: "Invalid Credientials",
                icon: "warning",
              });
        }        

    }



    return (

        <div className="full-bg">
            <div className="bg-content">
                <div className="row">
                    <div className="col-md-7">
                        <div className="product-pic">
                            <div id="demo" className="carousel slide" data-ride="carousel">
                                <ul className="carousel-indicators">
                                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                                    <li data-target="#demo" data-slide-to="1"></li>
                                    <li data-target="#demo" data-slide-to="2"></li>
                                </ul>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="slide-log-pic" src={caroselpic} alt="logo" width="300px" />
                                        <div className="carousel-caption">
                                            <p>Xiaomi Support provides all Redmi and Mi Smartphones, Smart Devices and Accessories</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="slide-log-pic" src={caroselpic} alt="" width="300px" />
                                        <div className="carousel-caption">
                                            <p>Xiaomi Support provides all Redmi and Mi Smartphones, Smart Devices and Accessories</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="slide-log-pic" src={caroselpic} alt="" width="300px" />
                                        <div className="carousel-caption">

                                            <p>Xiaomi Support provides all Redmi and Mi Smartphones, Smart Devices and Accessories</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12 m-t-50">
                        <form className="from-cntr" id="frmSignin" autocomplete="off" action="Payment-reports.html">
                            <div className="login-frm1">
                                <div className="sign-bg-title"><img src={radiantlogo} width="150" /></div>
                                <div className="sher-formalte">
                                    <div className="sher-rel">
                                        <h3>Welcome</h3>
                                        <div className="sign-sher">Please login to your account</div>
                                    </div>
                                    <div className="sher-obs">
                                        <img src={serviceman} alt="" />
                                    </div>
                                    <fieldset className='float-label-field'>
                                        <div className="input-field">
                                            {/* <label for="username">User Name</label> */}
                                            <Textbox 
                                            type="text"
                                            id="username"
                                            name="username"
                                            required={true}
                                            placeholder={"Username"}
                                            onChange={handleuserinput}

                                            />
                                            {/* <input type="text" id="username" class="" name="Username" data-name="Username" required /> */}
                                        </div>
                                    </fieldset>


                                    <fieldset className='float-label-field'>
                                        <div className="input-field">
                                            {/* <label className="" for="password">Password</label> */}

                                            <Textbox 
                                            type="password"
                                            id="password"
                                            name="password"
                                            required={true}
                                            placeholder={"Password"}    
                                            onChange={handleuserinput}                                        
                                            />
                                            {/* <input type="password" id="password" className="" name="Password" data-name="Password" required /> */}
                                            {/* <span toggle="#password" className="fa fa-eye field-icon toggle-password"></span> */}
                                        </div>
                                    </fieldset>

                                    <div className="text-left fs-13 pass ">
                                        <span className="txt for-pass">
                                            Forgot password
                                        </span>

                                    </div>
                                    

                                    <Button 
                                    title={"Login"}
                                    type={"submit"}
                                    onClick={onsubmit}
                                    
                                    />
                                    
                                </div>
                                <div className="sher-last">
                                    Terms and Condition & Privacy Policy
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Login;
