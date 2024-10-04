import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Content from '../content/Content';
import Index from '../Container/Index';
import Dashboard from '../Dashboard/Dashboard';
import Profil from '../Profile/Profile';
import PrestationsServices from '../Profile/PrestationsServices';
function App() {
  return (
    <Router>
        <Routes>
            <Route
                path="/etudiant/test"
                element={<Index />}
              >
                <Route index element={<Content />} />
            </Route>
            <Route
                path="/etudiant/tableaudeboard"
                element={<Index />}
              >
                <Route index element={<Dashboard />} />
            </Route>
            <Route
                path="/etudiant/profile"
                element={<Index />}
              >
                <Route index element={<Profil />} />
            </Route>
            <Route
                path="/etudiant/prestation"
                element={<Index />}
              >
                <Route index element={<PrestationsServices />} />
            </Route>
            
        </Routes>

    </Router>
  )
}

export default App
