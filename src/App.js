import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Home from './pages/TODO/home';
import SingleTodo from './pages/TODO/singleTodo';
import EditTodo from './pages/TODO/editTodo';
import InProgress from './pages/TODO/inProgress';
import UnderReview from './pages/TODO/underReview';
import Rework from './pages/TODO/rework';
import Completed from './pages/TODO/completed';
import VerificationEmail from './pages/auth/verificationEmail';
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
          <Route path='/' exact element={<Home />} />
          <Route path='/show' exact element={<SingleTodo />} />
          <Route path='/edit' exact element={<EditTodo />} />
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
