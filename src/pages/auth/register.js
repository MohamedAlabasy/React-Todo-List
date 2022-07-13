import { Link, useNavigate } from 'react-router-dom'
import { MdEmail } from "react-icons/md";
import { BsFillKeyFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import Lottie from 'react-lottie-player'
import axios from 'axios'
import { useState } from 'react'

import { failedAlert, successAlert } from '../../components/alerts'
import register from '../../assets/lottie/register.json'

export default function Register() {
    const navigate = useNavigate()
    const emailPattern = '([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(.[A-Z|a-z]{2,})+'
    const [registrationForm, setRegistrationForm] = useState({
        userName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [registrationError, setRegistrationError] = useState({
        userNameError: "",
        emailError: "",
        passwordError: "",
        confirmPasswordError: ""
    });

    const handelRegistrationForm = (e) => {
        setRegistrationForm({
            ...registrationForm,
            [e.target.id]: e.target.value
        })
        if (e.target.id === 'name') {
            setRegistrationError({
                ...registrationError,
                userNameError: e.target.value.length === 0 ? 'This field is required'
                    : e.target.value.length < 3 ? "min length us 3 characters"
                        : e.target.value.length > 10 ? "min length us 10 characters"
                            : e.target.value.length > 100 ? "max length us 100 characters"
                                : null,
            })
        }
        if (e.target.id === 'email') {
            setRegistrationError({
                ...registrationError,
                emailError: e.target.value.length === 0 ? 'This field is required'
                    : !e.target.value.match(emailPattern) ? 'invalid email'
                        : null,
            })
        }
        if (e.target.id === 'password') {
            setRegistrationError({
                ...registrationError,
                passwordError: e.target.value.length === 0 ? 'This field is required'
                    : e.target.value.length <= 8 ? "Your Password Must Contain At Least 8 Characters!"
                        : !(/[A-Z]/.test(e.target.value)) ? "Your Password Must Contain At Least 1 Capital Letter!"
                            : !(/[0-9]/.test(e.target.value)) ? "Your Password Must Contain At Least 1 Number!"
                                : !(/[a-z]/.test(e.target.value)) ? "Your Password Must Contain At Least 1 Lowercase Letter!"
                                    : null,
            })
        }
        if (e.target.id === 'confirmPassword') {
            setRegistrationError({
                ...registrationError,
                confirmPasswordError: e.target.value.length === 0 ? 'This field is required'
                    : e.target.value !== registrationForm.password ? "confirm password does not match"
                        : null,
            })
        }
    }

    // const toVerificationEmail = (e) => {
    //     e.preventDefault()
    //     navigate('/verification')
    // }

    const toVerificationEmail = (e) => {
        e.preventDefault()
        axios.post(`http://127.0.0.1:8080/user/register`,
            {
                name: registrationForm.userName,
                email: registrationForm.email,
                password: registrationForm.password
            }
        )
            .then((userData) => {
                // console.log("aaaaaaaaaaaaaaaaaaaa", userData);
                // console.log(userData.response);
                if (userData && userData.data.status === 1) {
                    localStorage.setItem('id', userData.data.data._id)
                    localStorage.setItem('is_verification', userData.data.data.is_verification)
                    successAlert(userData.data.data.msg)
                    navigate('/verification')
                } else {
                    failedAlert('some errors happened')
                }
            })
            .catch((error) => {
                failedAlert(error.response.data.error)
                console.log(error);
            })
    }
    return (
        <section className="vh-80" style={{ backgroundColor: "#eee" }}>
            <div className="container h-100 pt-5 pb-5">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-11 col-x1-11">
                        <div className="card text-black" style={{ borderRadius: "25px" }}>
                            <div className="card-body p-md-3">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h2 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register</p>
                                        <form className="mx-1 mx-md-4" onSubmit={(e) => { toVerificationEmail(e) }}>
                                            <div className="d-flex flex-row align-items-center mb-3">
                                                <FaUserTie className="text-daek fa-lg me-3" style={{ width: "30px", height: "30px" }} />
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" placeholder="name" required className={`form-control ${registrationError.userNameError ? 'border border-danger' : ""}`} id="name" name='name' onChange={(e) => handelRegistrationForm(e)} />
                                                    {registrationError.userNameError && (<div className='form-text text-danger error'>
                                                        {registrationError.userNameError}
                                                    </div>)}
                                                </div>
                                            </div>



                                            <div className="d-flex flex-row align-items-center mb-3">
                                                <MdEmail className="text-dark fa-lg me-3" style={{ width: "30px", height: "30px" }} />
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="email" placeholder="email address" required name='email' className={`form-control ${registrationError.emailError ? 'border border-danger' : ""}`} id="email" onChange={(e) => handelRegistrationForm(e)} />
                                                    {registrationError.emailError && (<div className='form-text text-danger error'>
                                                        {registrationError.emailError}
                                                    </div>)}
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <BsFillKeyFill className="text-dark fa-lg me-3" style={{ width: "30px", height: "30px" }} />
                                                <div className="form-outline flex-fill mb-0">
                                                    <input id='password' name='password' required className={`form-control ${registrationError.passwordError ? 'border border-danger' : ""}`} type="password" placeholder="password" onChange={(e) => handelRegistrationForm(e)} />
                                                    {registrationError.passwordError && (<div className='form-text text-danger error'>
                                                        {registrationError.passwordError}
                                                    </div>)}
                                                </div>
                                            </div>





                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <BsFillKeyFill className="text-dark fa-lg me-3" style={{ width: "30px", height: "30px" }} />
                                                <div className="form-outline flex-fill mb-0">
                                                    <input id='confirmPassword' required className={`form-control ${registrationError.confirmPasswordError ? 'border border-danger' : ""}`} type="password" placeholder="confirm password" onChange={(e) => handelRegistrationForm(e)} />
                                                    {registrationError.confirmPasswordError && (<div className='form-text text-danger error'>
                                                        {registrationError.confirmPasswordError}
                                                    </div>)}
                                                </div>
                                            </div>

                                            <div className="form-check d-flex justify-content-center mb-5">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                <label className="form-check-label" htmlFor="form2Example3">
                                                    I agree all statements in <a href="#!">Terms of service</a>
                                                </label>
                                            </div>

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <Link to={'/login'} className="btn btn-primary  me-3 w-100">Login</Link>
                                                <button type="submit" className="btn btn-success  ms-3 w-100">Register</button>
                                            </div>
                                        </form>

                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-6 d-flex align-items-center order-1 order-lg-2">
                                        <Lottie
                                            loop
                                            animationData={register}
                                            play
                                            style={{ width: '100%', height: '100%' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
