import React from 'react'
import Footer from './components/footer/Footer'
import Main from './components/main-content/Main'
import Navbar from './components/navigation-bar/Navbar'

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Main />
      <Footer />
    </React.Fragment>
  )
}

export default App