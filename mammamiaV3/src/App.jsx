
import { BrowserRouter } from 'react-router-dom'
import AppRoutes  from './routes/AppRoutes'
import Navbar from './components/Navigation'
import "bootstrap/dist/css/bootstrap.css";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
