import { Link, useNavigate } from 'react-router-dom'
import { BiUser } from "react-icons/bi";
import Lottie from 'react-lottie-player'

import register from '../../assets/lottie/register.json'



export default function Register() {
    const navigate = useNavigate()
    const toVerificationEmail = (e) => {
        e.preventDefault()
        navigate('/verification')
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

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <BiUser className="text-success fa-lg me-3" style={{ width: "30px", height: "30px" }} />
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" id="form3Example1c" className="form-control" placeholder="name" />
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <BiUser className="text-success fa-lg me-3" style={{ width: "30px", height: "30px" }} />
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="email" id="form3Example1c" name='email' className="form-control" placeholder="email" />
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <BiUser className="text-success fa-lg me-3" style={{ width: "30px", height: "30px" }} />
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password" id="form3Example1c" name='password' className="form-control" placeholder="password" />
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <BiUser className="text-success fa-lg me-3" style={{ width: "30px", height: "30px" }} />
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password" id="form3Example1c" name='confirmPassword' className="form-control" placeholder="confirm password" />
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
