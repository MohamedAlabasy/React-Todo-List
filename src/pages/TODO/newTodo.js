import { BiUser } from "react-icons/bi";
import { Link } from 'react-router-dom'
import Lottie from 'react-lottie-player'

import newTodo from '../../assets/lottie/newTodo.json'


export default function NewTodo() {
    return (
        <section className="vh-80" style={{ backgroundColor: "#eee" }}>
            <div className="container h-100 pt-5 pb-5">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-11 col-x1-11">
                        <div className="card text-black" style={{ borderRadius: "25px" }}>
                            <div className="card-body p-md-3">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h2 fw-bold mb-5 mx-1 mx-md-4 mt-4">New TODO</p>

                                        <form className="mx-1 mx-md-4">
                                            {/* Title */}
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text"><BiUser className="text-success" style={{ width: "25px", height: "25px" }} /></div>
                                                    </div>
                                                    <input type="text" class="form-control" name="title" placeholder="Title" />
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <div className="form-outline flex-fill mb-0">
                                                    <textarea class="form-control" name="description" placeholder="Description" rows="3"></textarea>
                                                </div>
                                            </div>

                                            {/* status */}
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text"><BiUser className="text-success" style={{ width: "25px", height: "25px" }} /></div>
                                                    </div>
                                                    <select class="form-control" name='status'>
                                                        <option>status</option>
                                                        <option>in_progress</option>
                                                        <option>under_review</option>
                                                        <option>rework</option>
                                                        <option>completed</option>
                                                    </select>
                                                </div>
                                            </div>

                                            {/* priority */}
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text"><BiUser className="text-success" style={{ width: "25px", height: "25px" }} /></div>
                                                    </div>
                                                    <select class="form-control" name='priority'>
                                                        <option>Priority</option>
                                                        <option>height</option>
                                                        <option>medium</option>
                                                        <option>low</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <BiUser className="text-success fa-lg me-3" style={{ width: "30px", height: "30px" }} />
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="date" name='start_at' className="form-control" title="Start at" />
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <BiUser className="text-success fa-lg me-3" style={{ width: "30px", height: "30px" }} />
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="date" name='start_at' className="form-control" title="End at" />
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" className="btn btn-success  me-3 w-100">Add</button>
                                                <Link to={'/'} className="btn btn-dark  ms-3 w-100">Cancel</Link>
                                            </div>
                                        </form>

                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-6 d-flex align-items-center order-1 order-lg-2">
                                        <Lottie
                                            loop
                                            animationData={newTodo}
                                            play
                                            style={{ width: '100%', height: '100%' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
}

