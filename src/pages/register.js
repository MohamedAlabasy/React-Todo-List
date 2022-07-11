import { useState } from 'react';

export default function register() {
    const [isCheck, setIsCheck] = useState(true);

    const changeCheckValue = () => {
        setIsCheck(!isCheck)
    }

    const toVerificationEmail = () => {

    }
    return (
        <>
            <div className='container my-5'>
                <form onSubmit={() => { }}>
                    {/* name */}
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" aria-describedby="nameError" />
                        <div id="nameError" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    {/* email */}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailError" />
                        <div id="emailError" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    {/* password */}
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" aria-describedby="passwordError" />
                        <div id="passwordError" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    {/* check box */}
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck" onClick={() => { changeCheckValue() }} />
                        <label className="form-check-label" htmlFor="exampleCheck"  >Check me out</label>
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={() => { }} disabled={isCheck}>Submit</button>
                </form>
            </div>
        </>
    )
}
