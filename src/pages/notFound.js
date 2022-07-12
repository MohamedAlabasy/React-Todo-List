import { Link } from 'react-router-dom'

export default function NotFound() {
    return (


        <div className='container text-center align-items-center pb-2'>
            <div >
                <img style={{ width: "65%" }} src="https://cdn.dribbble.com/users/888330/screenshots/2653750/media/b7459526aeb0786638a2cf16951955b1.png"
                    alt="there is no data to show" />
            </div>
            <Link to={'/'} className='btn btn-danger'>Back to Home</Link>
        </div>

    )
}
