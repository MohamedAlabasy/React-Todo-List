import { Link } from 'react-router-dom'
import Lottie from 'react-lottie-player'

import notVerified from '../assets/lottie/notVerified.json'

export default function NotVerified() {


    return (
        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
            <div className="container h-100 pt-5 pb-5">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-11 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: "25px" }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 text-center order-2 order-lg-1">
                                        <p className="text-center h2 fw-bold mb-3 mx-1 mx-md-4 mt-4">Not Verified</p>
                                        <div className="alert alert-success bg-soft-primary text-center border-2 mb-3" role="alert">
                                            Enter your email address and we'll send you an email with instructions to reset your password.
                                        </div>
                                        <Link to={'/verification'} className='btn btn-dark w-50'>Enter Code</Link>
                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-6 d-flex align-items-center order-1 order-lg-2">
                                        <Lottie
                                            animationData={notVerified}
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


