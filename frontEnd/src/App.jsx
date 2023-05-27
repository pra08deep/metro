
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Page from './pages/home'
import './App.css'



export default function app(){

  return(
<Router>
  <Routes>
  <Route exact path="/" element={<Page/>}/>
  </Routes>
  </Router>
 


  )
}