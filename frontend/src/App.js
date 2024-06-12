import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './login';
import Admin from './admin';

const App = () => {
    const [token, setToken] = useState(localStorage.getItem('token'));
const removingtoken = ()=>{
    localStorage.removeItem('token');
    setToken("");
}


    return (
        <Router>
            <Routes>
                <Route
                    path="/login"
                    element={token ? <Navigate to="/admin" /> : <Login setToken={setToken} />}
                />
                <Route
                    path="/admin"
                    element={token ? <Admin token={token} removingtoken={removingtoken} /> : <Navigate to="/login" />}
                />
               
            </Routes>
        </Router>
    );
};

export default App;
