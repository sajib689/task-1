
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Footer from './Components/Footer/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='bg-[#f6f6fc]'>
    <div className='container mx-auto font-inter '>
    <App />
  </div>
  <Footer/>
  </div>,
)
