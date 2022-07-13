import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BiShowAlt, BiSearchAlt } from "react-icons/bi";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { deleteAlert, searchAlert, showTODO } from './alerts'

export default function TodoTable(status, route) {
    const [todoList, setTodoList] = useState([]);
    const [count, setCount] = useState();

    useEffect(() => {
        axios.get(`http://127.0.0.1:8080/todo/${route}/${localStorage.getItem('id')}`, {
        })
            .then((todoData) => {
                setCount(todoData.data.count);
                setTodoList(todoData.data.data);

            })
            .catch((error) => {
                console.log(error);
            })
    }, [])
    return (
        <section className={(count < 10 || count === undefined) ? "vh-100" : "vh-80"} style={{ backgroundColor: "#eee" }} >
            < div className="container py-5 h-100 " >
                <div className="row d-flex justify-content-center align-items-center h-100 ">
                    <div className="col-md-12 col-xl-12 ">
                        <div className="card border" style={{ borderRadius: 15 }}>
                            <div className="card-header p-3">
                                <h5 className="mb-0"><i className="fas fa-tasks me-2"></i> {status}</h5>
                            </div>
                            <div className="card-body" data-mdb-perfect-scrollbar="true" >
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
                                        {todoList.map((todo, index, array) => {
                                            return <tr key={todo._id} className="fw-normal align-middle text-center">
                                                <th>
                                                    <span className='ms-2 d-inline-block text-truncate' style={{ maxWidth: "150px" }} title={todo.title}>{todo.title}</span>
                                                </th>

                                                <td className="align-middle">
                                                    <span className='d-inline-block text-truncate' style={{ maxWidth: "150px" }} title={todo.description} >{todo.description}</span>
                                                </td>

                                                <td className="align-middle">
                                                    <h6 className="mb-0"><span className={`badge ${todo.priority === 'high' ? 'bg-danger' : todo.priority === 'medium' ? 'bg-warning text-dark' : 'bg-primary'} w-100`}>{todo.priority}</span></h6>
                                                </td>

                                                <td className="align-middle">
                                                    <span>{todo.start_date.split('T')[0]}</span>
                                                </td>
                                                <td className="align-middle">
                                                    <span>{todo.end_date.split('T')[0]}</span>
                                                </td>

                                                <td className="align-middle">
                                                    <Link to="#" onClick={() => { showTODO(todo) }} title="show"><BiShowAlt className="text-success me-3" style={{ width: "30px", height: "30px" }} /></Link>
                                                    <Link to="#" title="search" onClick={() => { searchAlert() }}><BiSearchAlt className="text-dark me-3" style={{ width: "30px", height: "30px" }} /></Link>
                                                    <Link to="/edit" title="edit"><AiFillEdit className="text-primary me-3" style={{ width: "30px", height: "30px" }} /></Link>
                                                    <Link to="#" onClick={() => { deleteAlert() }} title="delete" ><AiFillDelete className="text-danger me-3" style={{ width: "30px", height: "30px" }} /></Link>
                                                </td>
                                            </tr>
                                        })}
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