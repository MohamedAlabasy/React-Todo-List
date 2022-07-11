import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import Register from './pages/register';
import InProgress from './pages/inProgress';
import UnderReview from './pages/underReview';
import Rework from './pages/rework';
import Completed from './pages/completed';
import VerificationEmail from './pages/verificationEmail';
import NotVerified from './pages/notVerified';
import NotFound from './pages/notFound';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' exact element={<Login />} />
          <Route path='/register' exact element={<Register />} />
          <Route path='/home' exact element={<Home />} />
          <Route path='/inProgress' exact element={<InProgress />} />
          <Route path='/underReview' exact element={<UnderReview />} />
          <Route path='/rework' exact element={<Rework />} />
          <Route path='/completed' exact element={<Completed />} />
          <Route path='/verification' exact element={<VerificationEmail />} />
          <Route path='/notVerified' exact element={<NotVerified />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
