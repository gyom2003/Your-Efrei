import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import TeacherGrades from "../src/components/teacherGrades";
import TeacherPlanning from "../src/components/teacherPlanning";
import UserGrades from "../src/components/userGrades";
import UserPlanning from "../src/components/userPlanning";
import UserDocs from "../src/components/userDocs";
import UserAbsent from "../src/components/userDocs";
import Homepage from './components/homepage';
import Registration from './components/pages/registration.jsx';

//TODO: path / passer par apps qui traiterait logique login.
const router = createBrowserRouter([
  {
    path: "/", 
    element: <Homepage/>, 
  },
  {
    path: "yourefrei/registration", 
    element: <Registration/>, 
  },
  {
    path: "yourefrei/teacher/planning", 
    element: <TeacherPlanning/>, 
  },
  {
    path: "yourefrei/teacher/grades", 
    element: <TeacherGrades/>, 
  },
  {
    path: "yourefrei/student/planning", 
    element: <UserPlanning/>, 
  },
  {
    path: "yourefrei/student/grades", 
    element: <UserGrades/>, 
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
