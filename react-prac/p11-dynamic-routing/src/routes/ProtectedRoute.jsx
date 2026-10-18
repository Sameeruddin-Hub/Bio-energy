import { Navigate } from 'react-router'

const ProtectedRoute = ({ children }) => {
    let isAdmin = false;
    if (!isAdmin) {
        console.log('not admin')
        return <Navigate to={'/'} />
    }
    return children
}
export default ProtectedRoute;