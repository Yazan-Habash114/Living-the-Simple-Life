import React from 'react'
import Main from './components/main-content/Main'
import Navbar from './components/navigation-bar/Navbar'

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Main />
    </React.Fragment>
  )
}

export default App