import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/login';
import CheckEmail from './pages/forgotPassword/checkEmail';
import ResetPassword from './pages/forgotPassword/resetPassword';

import Register from './pages/auth/register';
import VerificationEmail from './pages/auth/verificationEmail';

import Home from './pages/todo/home';
import NewTodo from './pages/todo/newTodo';
import InProgress from './pages/todo/inProgress';
import UnderReview from './pages/todo/underReview';
import Rework from './pages/todo/rework';
import Completed from './pages/todo/completed';
import EditTodo from './pages/todo/editTodo';
import SingleTodo from './pages/todo/singleTodo';

import NotVerified from './pages/notVerified';
import EmptyStates from './pages/emptyStates';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' exact element={<Login />} />
          <Route path='/checkEmail' exact element={<CheckEmail />} />
          <Route path='/resetPassword' exact element={<ResetPassword />} />

          <Route path='/register' exact element={<Register />} />
          <Route path='/verification' exact element={<VerificationEmail />} />

          <Route path='/' exact element={<Home />} />
          <Route path='/add' exact element={<NewTodo />} />
          <Route path='/inProgress' exact element={<InProgress />} />
          <Route path='/underReview' exact element={<UnderReview />} />
          <Route path='/rework' exact element={<Rework />} />
          <Route path='/completed' exact element={<Completed />} />
          <Route path='/show' exact element={<SingleTodo />} />
          <Route path='/edit' exact element={<EditTodo />} />

          <Route path='/notVerified' exact element={<NotVerified />} />
          <Route path='*' element={<EmptyStates />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
