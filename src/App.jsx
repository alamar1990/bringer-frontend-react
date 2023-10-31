import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'

function App() {

  return (
    <>
      <section className='main-container'>
        <Routes>
          <Route path="login" element={<Login />}/>
        </Routes>
      </section>
    </>
  )
}

export default App
