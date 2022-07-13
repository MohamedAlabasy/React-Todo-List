
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiUser } from "react-icons/bi";
import { failedAlert, successAlert } from '../../components/alerts'
import Lottie from 'react-lottie-player'
import axios from 'axios'


import todo from '../../assets/lottie/todo.json'

export default function Login() {
    const emailPattern = '([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(.[A-Z|a-z]{2,})+'
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    });


    const [loginError, setLoginError] = useState({
        emailError: null,
        passwordError: null,
    });

    const handelLoginForm = (e) => {
        setLoginForm({
            ...loginForm,
            [e.target.id]: e.target.value
        })
        if (e.target.id === 'email') {
            setLoginError({
                ...loginError,
                emailError: e.target.value.length === 0 ? 'This field is required'
                    : !e.target.value.match(emailPattern) ? 'invalid email'
                        : null,
            })
        }
        if (e.target.id === 'password') {
            setLoginError({
                ...loginError,
                passwordError: e.target.value.length === 0 ? 'This field is required'
                    : e.target.value.length <= 8 ? "Your Password Must Contain At Least 8 Characters!"
                        : !(/[A-Z]/.test(e.target.value)) ? "Your Password Must Contain At Least 1 Capital Letter!"
                            : !(/[0-9]/.test(e.target.value)) ? "Your Password Must Contain At Least 1 Number!"
                                : !(/[a-z]/.test(e.target.value)) ? "Your Password Must Contain At Least 1 Lowercase Letter!"
                                    : null,
            })
        }

    }
    const navigate = useNavigate()
    const ToHomePage = (e) => {
        e.preventDefault()
        axios.post(`http://127.0.0.1:8080/user/login`,
            {
                email: loginForm.email,
                password: loginForm.password
            }
        )
            .then((userData) => {
                console.log("aaaaaaaaaaaaaaaaaaaa", userData);
                console.log(userData.response);
                if (userData && userData.data.status === 1) {
                    localStorage.setItem('id', userData.data.data.id)
                    localStorage.setItem('token', userData.data.token)
                    localStorage.setItem('is_verification', userData.data.data.is_verification)
                    successAlert('login success')
                    if (userData.data.data.is_verification === true) {
                        navigate('/')
                    } else {
                        navigate('/notVerified')
                    }
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
        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
            <div className="container h-100 pt-5 pb-5">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-11 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: "25px" }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h2 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                                        <form className="mx-1 mx-md-4" onSubmit={(e) => { ToHomePage(e) }}>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <BiUser className="text-success fa-lg me-3" style={{ width: "30px", height: "30px" }} />
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="email" required autoFocus id="email" className={`form-control ${loginError.emailError ? 'border border-danger' : ""}`} placeholder="email" onChange={(e) => handelLoginForm(e)} />
                                                    {loginError.emailError && (<div className='form-text text-danger error'>
                                                        {loginError.emailError}
                                                    </div>)}
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <BiUser className="text-success fa-lg me-3" style={{ width: "30px", height: "30px" }} />
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password" id="password"
                                                        className={`form-control ${loginError.passwordError ? 'border border-danger' : ""}`}
                                                        placeholder="password" required onChange={(e) => handelLoginForm(e)} />
                                                    {loginError.passwordError &&
                                                        (<div className='form-text text-danger error'>{loginError.passwordError}</div>)}
                                                </div>
                                            </div>

                                            <div className="form-check d-flex justify-content-center mb-5">
                                                <Link to={'/checkEmail'}>Forgotten password?</Link>
                                            </div>

                                            <div className="d-flex justify-content-center mb-3 mb-lg-4">
                                                <button type="submit" className="btn btn-primary  me-3 w-100">Login</button>
                                                <Link to={'/register'} className="btn btn-success  ms-3 w-100">Register</Link>
                                            </div>
                                        </form>

                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-6 d-flex align-items-center order-1 order-lg-2">
                                        <Lottie
                                            loop
                                            animationData={todo}
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
