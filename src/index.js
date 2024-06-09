import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import TeacherGrades from "../src/components/teacherGrades";
import GlobalplanningPage from './components/pages/globalComponents/globalplanningPage.jsx';
import GlobalGrades  from './components/globalGrades.jsx';
import UserGrades from "../src/components/userGrades";
import UserDocs from "../src/components/userDocs";
import UserAbsent from "../src/components/userAbsent.jsx";
import Homepage from './components/homepage';
import Login from './components/pages/login.jsx';
import { Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/yourefrei", 
    element: <Homepage/>, 
  },
  {
    path: "/", 
    element: <Navigate to="/yourefrei" replace={true} />, 
  },
  {
    path: "yourefrei/login", 
    element: <Login/>, 
  },
  {
    path: "yourefrei/teacher/planning", 
    element: <GlobalplanningPage/>, 
  },
  {
    path: "yourefrei/student/planning", 
    element: <GlobalplanningPage/>, 
  },
  {
    path: "yourefrei/student/absent", 
    element: <UserAbsent/>, 
  }, 
  {
    path: "yourefrei/student/documents", 
    element: <UserDocs/>, 
  },
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)

reportWebVitals();
