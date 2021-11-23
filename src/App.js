import { Routes, Route } from 'react-router-dom'
import './App.css'

import Layout from './layout/Layout'

import Home from './routes/Home'
import Portfolio from './routes/Portfolio'
import Proyect from './routes/Proyect'
import Contact from './routes/Contact'

function App(){
    return (
        <Layout>
            <Routes>
                <Route 
                    path="/portfolio"
                    element={<Portfolio/>}
                />
                <Route 
                    path="/portfolio/:proyect"
                    element={<Proyect/>}
                />
                <Route 
                    path="/contact"
                    element={<Contact/>}
                />
                <Route 
                    path="/"
                    element={<Home/>}
                />
            </Routes>
        </Layout>
    )
}

export default App