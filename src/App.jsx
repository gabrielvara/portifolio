import { Outlet } from 'react-router-dom'
import Nav from './components/nav'
import Footer from './components/footer'
function App() {

  return (
    <div className="bg-defaultcolor">
        <Nav/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default App
