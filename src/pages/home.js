// import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BiShowAlt } from "react-icons/bi";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

export default function Home() {
    return (
        <section className="vh-100" style={{ backgroundColor: "#eee" }} >
            < div className="container py-5 h-100" >
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-12 col-xl-10">

                        <div className="card">
                            <div className="card-header p-3">
                                <h5 className="mb-0"><i className="fas fa-tasks me-2"></i>Task List</h5>
                            </div>
                            <div className="card-body" data-mdb-perfect-scrollbar="true" style={{ position: "relative", height: "400px" }}>

                                <table className="table mb-0">
                                    <thead>
                                        <tr className="text-center">
                                            <th scope="col">Title</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Priority</th>
                                            <th scope="col">Start at</th>
                                            <th scope="col">End at</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="fw-normal align-middle text-center">
                                            <th>
                                                <span className="ms-2">Alice Mayer</span>
                                            </th>

                                            <td className="align-middle">
                                                <span>Call Sam For payments</span>
                                            </td>

                                            <td className="align-middle">
                                                <h6 className="mb-0"><span className="badge bg-danger">High priority</span></h6>
                                            </td>

                                            <td className="align-middle">
                                                <span>17-3-1997</span>
                                            </td>
                                            <td className="align-middle">
                                                <span>17-3-1998</span>
                                            </td>

                                            <td className="align-middle">
                                                <Link to="/show" title="show"><BiShowAlt className="text-success me-3" style={{ width: "30px", height: "30px" }} /></Link>
                                                <Link to="/edit" title="edit"><AiFillEdit className="text-danger me-3" style={{ width: "30px", height: "30px" }} /></Link>
                                                <Link to="#" title="delete"><AiFillDelete className="text-danger me-3" style={{ width: "30px", height: "30px" }} /></Link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>

                    </div>
                </div>
            </ div>
        </section >
    )
}
