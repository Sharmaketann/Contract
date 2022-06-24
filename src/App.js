import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Services from './components/services/Services'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Services />
      <Footer />
    </div>
  )
}

export default App
