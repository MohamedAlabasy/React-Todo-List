
import { BiUser } from "react-icons/bi";
import { Link } from 'react-router-dom'
import Lottie from 'react-lottie-player'

import todo from '../../assets/lottie/todo.json'

export default function Login() {
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

                                        <form className="mx-1 mx-md-4">

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <BiUser className="text-success fa-lg me-3" style={{ width: "30px", height: "30px" }} />
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" id="form3Example1c" className="form-control" placeholder="name" />
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <BiUser className="text-success fa-lg me-3" style={{ width: "30px", height: "30px" }} />
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" id="form3Example1c" className="form-control" placeholder="name" />
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
