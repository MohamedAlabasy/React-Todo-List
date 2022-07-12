import { BiUser } from "react-icons/bi";
import { Link } from 'react-router-dom'
import Lottie from 'react-lottie-player'
import resetPassword from '../assets/lottie/resetPassword.json'

import { successAlert, failedAlert } from './alerts'

export default function Code(pageName = 'Verification Email', isReset = true) {
    return (
        <>
            <section className="vh-100" style={{ backgroundColor: "#eee" }}>
                <div className="container h-100 pt-5 pb-5">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-11 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: "25px" }}>
                                <div className="card-body p-md-4">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h2 fw-bold mb-3 mx-1 mx-md-4 mt-4">{pageName}</p>
                                            {isReset ?
                                                <div className="alert alert-success bg-soft-primary border-2 mb-5" role="alert">
                                                    Enter your email address and we'll send you an email with instructions to reset your password.
                                                </div>
                                                :
                                                <div className="alert alert-success bg-soft-primary border-2 text-center mb-5" role="alert">
                                                    The code has been sent to your email, please enter the code sent to the email to verify, and note that the code is valid for an hour from the time it was sent.                                                </div>
                                            }
                                            <form className="mx-1 mx-md-4" onSubmit={() => { successAlert() }} >

                                                {isReset ?
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <BiUser className="text-success fa-lg me-3" style={{ width: "30px", height: "30px" }} />
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input type='text' name='code' pattern="[0-9]{6}" maxLength={6} className="form-control" placeholder="code" />
                                                        </div>
                                                    </div>
                                                    :
                                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                        <input type='text' name='code' pattern="[0-9]{6}" maxLength={6} className="form-control w-50 text-center" placeholder="code" />
                                                    </div>
                                                }

                                                {isReset &&
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <BiUser className="text-success fa-lg me-3" style={{ width: "30px", height: "30px" }} />
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input type='password' name='password' className="form-control" placeholder="password" />
                                                        </div>
                                                    </div>
                                                    &&
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <BiUser className="text-success fa-lg me-3" style={{ width: "30px", height: "30px" }} />
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input type='password' name='confirmPassword' className="form-control" placeholder="confirm password" />
                                                        </div>
                                                    </div>}





                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="submit" className="btn btn-primary  w-100">verify</button>
                                                </div>
                                                <div className="row justify-content-center text-center mx-4 mb-3 mb-lg-4">
                                                    Didn't receive the code?
                                                    <Link to={"#"}>Send code again</Link>
                                                    {isReset &&
                                                        <Link to={'/login'}>Change email</Link>
                                                    }

                                                </div>

                                            </form>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-6 d-flex align-items-center order-1 order-lg-2">

                                            <Lottie
                                                // loop
                                                animationData={resetPassword}
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
