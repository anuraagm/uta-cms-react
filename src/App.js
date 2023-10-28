// Router.js
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Student from './pages/Student/Student';
import QualityAssurance from './pages/QA/QualityAssurance';
import Instructor from './pages/Instructor/Instructor';
import ProgramCoordinator from './pages/ProgramCoordinator/ProgramCoordinator';
import ChatBot from './templates/CommonTemplates/ChatBot';
import Admin from './pages/Admin/Admin';
import { Provider } from 'react-redux';
import store from './redux/store';
import { useDispatch, useSelector } from 'react-redux';

function AppRouter() {
  const auth = useSelector((state) => state.auth);

  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/'>
              <Route index element={<Home></Home>}></Route>
              <Route path="student" element={auth.role === "Student" ? <Student></Student> : <Navigate to="/" />}></Route>
              <Route path="qa" element={auth.role === "QA" ? <QualityAssurance></QualityAssurance> : <Navigate to="/" />}></Route>
              <Route path="programcoordinator" element={auth.role === "ProgramCoordinator" ? <ProgramCoordinator></ProgramCoordinator> : <Navigate to="/" />}></Route>
              <Route path="instructor" element={auth.role === "Instructor" ? <Instructor></Instructor> : <Navigate to="/" />}></Route>
              <Route path="admin" element={auth.role === "Admin" ? <Admin></Admin> : <Navigate to="/" />}></Route>
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ChatBot></ChatBot>
      </div>
    </Provider>
  );
}

export default AppRouter;
