import { useNavigate } from 'react-router-dom'

export default function CheckAuth() {
    const navigate = useNavigate()
    
    if (
        localStorage.getItem('id') === null ||
        localStorage.getItem('token') === null ||
        localStorage.getItem('is_verification') === null
    ) {
        navigate('/login')
    }
}
