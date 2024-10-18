import { Routes, Route} from 'react-router-dom'
import InitialHome from './pages/InitialHome'
import Signup from './pages/Signup'
import Login from './pages/Login'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<InitialHome />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App