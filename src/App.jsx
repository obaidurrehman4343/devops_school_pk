// import React, { useState, useEffect } from 'react'
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
// import Login from './components/Login.jsx'
// import Signup from './components/Signup.jsx'
// import Dashboard from './components/Dashboard.jsx'
// import './App.css'

// function App() {
//   const [user, setUser] = useState(null)

//   useEffect(() => {
//     // Check if user is stored in localStorage
//     const storedUser = localStorage.getItem('user')
//     if (storedUser) {
//       try {
//         setUser(JSON.parse(storedUser))
//       } catch (error) {
//         console.error('Error parsing stored user:', error)
//         localStorage.removeItem('user')
//       }
//     }
//   }, [])

//   console.log('App loaded, user state:', user) // Debug log

//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<Navigate to="/login" />} />
//           <Route path="/login" element={<Login setUser={setUser} />} />
//           <Route path="/signup" element={<Signup setUser={setUser} />} />
//           <Route path="/dashboard" element={<Dashboard user={user} setUser={setUser} />} />
//         </Routes>
//       </div>
//     </Router>
//   )
// }

// export default App
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard.jsx';
import './App.css';

function App() {
  // No user state, no login check — directly show Dashboard
  // This bypasses login/signup completely for development

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Any route (including root "/") will show the Dashboard */}
          <Route path="/*" element={<Dashboard />} />
          
          {/* Optional: You can keep these routes commented out if you want to re-enable login later */}
          {/* <Route path="/login" element={<Login setUser={setUser} />} /> */}
          {/* <Route path="/signup" element={<Signup setUser={setUser} />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;