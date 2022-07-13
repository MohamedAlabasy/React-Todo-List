import { Link, useNavigate } from 'react-router-dom'
import { MdEmail } from "react-icons/md";
import { BsCaretLeftFill } from "react-icons/bs";
import Lottie from 'react-lottie-player'

import email from '../../assets/lottie/email.json'

export default function CheckEmail() {
    const navigate = useNavigate()
    const toCodePage = (e) => {
        e.preventDefault()
        navigate('/resetPassword')
    }
    return (
        <>
            <section className="vh-100" style={{ backgroundColor: "#eee" }}>
                <div className="container h-100 pt-5 pb-5">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: "25px" }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h2 fw-bold mb-3 mx-1 mx-md-4 mt-4">Check Email</p>
                                            <div className="alert alert-success bg-soft-primary text-center border-2 mb-5" role="alert">
                                                Enter your email address and we'll send you an email with instructions to reset your password.
                                            </div>


                                            <form className="mx-1 mx-md-4" onSubmit={(e) => { toCodePage(e) }} >

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <MdEmail className="text-dark fa-lg me-2" style={{ width: "35px", height: "35px" }} />
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type='email' name='email' className="form-control" placeholder="email" />
                                                    </div>
                                                </div>



                                                <div className="row justify-content-center mb-3 mb-lg-4">
                                                    <button type="submit" className="btn btn-primary w-100 mb-3">Send Code</button>
                                                    <Link to={'/login'} className='btn btn-dark w-100 mb-3'><BsCaretLeftFill style={{ width: "20px", height: "20px", color: "#fff" }} />Back to login</Link>
                                                </div>

                                            </form>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-6 d-flex align-items-center order-1 order-lg-2">
                                            <Lottie
                                                // loop
                                                animationData={email}
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

        </>
    )
}
