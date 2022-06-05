import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import Legends from './pages/Legends'
import Weapons from './pages/Weapons'
import ChooseRandom from './pages/ChooseRandom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}></Route>
            <Route path='/legends' element={<Legends />}></Route>
            <Route path='/weapons' element={<Weapons />}></Route>
            <Route path='/choose-legend' element={<ChooseRandom />}></Route>
        </Routes>
    </BrowserRouter>
)