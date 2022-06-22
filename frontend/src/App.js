import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Posts from "./components/Posts/Posts";
//react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./App.css";
import CreatePost from "./components/CreatePost/CreatePost";
import Alert from './components/Alert/Alert'
import PreviousButton from "./components/PreviousButton/PreviousButton";
import {useSelector} from 'react-redux'
function App() {
  const {alert}=useSelector(state=>state);
  return (
    <div>
      <Router>
        {
          alert.show?
        <Alert message={alert.message} type={alert.type}/>
        :null
}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Posts />
                <Navbar />
              </>
            }
          />
          <Route
            path="/create_post"
            element={
              <>
                <PreviousButton />
                <CreatePost />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
