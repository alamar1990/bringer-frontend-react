import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Track from './pages/Track'

function App() {
  return (
    <>
      <section className='main-container'>
        <Routes>
          <Route path="login" element={<Login />}/>
          <Route path="track" element={<Track />}/>
          <Route path="track/:tracking_number" element={<Track />}/>
        </Routes>
      </section>
    </>
  )
}

export default App
