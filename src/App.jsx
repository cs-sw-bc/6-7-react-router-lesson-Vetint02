import { Routes, Route, Navigate, Link, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Network from './pages/Network.jsx'
import NotFound from './pages/NotFound.jsx'
import Profile from './pages/Profile.jsx'
import UserProfile from './pages/UserProfile.jsx'
import JobList from './pages/jobs/JobList.jsx'
import FullTime from './pages/jobs/FullTime.jsx'
import PartTime from './pages/jobs/PartTime.jsx'
import './App.css'

function App() {
  return (
    <div className="app">
      <nav className="navigation nav-links">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/network" className="nav-link">Network</NavLink>
        <NavLink to="/profile" className="nav-link">Profile</NavLink>
        <NavLink to="/jobs" className="nav-link">Jobs</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/network" element={<Network />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/user/:id" element={<UserProfile />}></Route>
        <Route path='/jobs' element={<JobList />}>
          <Route path="part-time" element={<PartTime />}></Route>
          <Route path="full-time" element={<FullTime />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <main className="main-content">
      </main>
    </div>
  )
}

export default App
