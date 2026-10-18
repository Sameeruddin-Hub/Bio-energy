import { Routes, Route } from 'react-router';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Details from '../pages/Details';
import ProtectedRoute from './ProtectedRoute'



const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="about" element={<About />} />

            <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>}></Route>
            <Route path="/details/:id" element={<Details />}></Route>

        </Routes>
    )
}

export default AppRoutes