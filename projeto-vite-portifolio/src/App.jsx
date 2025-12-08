import './App.css'
// import components header, nav, footer e sobre
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Sobre from './components/Sobre'
import Tecnologias from './components/Tecnologias'

function App() {
  

  return (
    <>
    <Nav/>
    <Header/>
      
      <Sobre/>
      <Tecnologias/>
    <Footer/>
    </>
  )
}

export default App
