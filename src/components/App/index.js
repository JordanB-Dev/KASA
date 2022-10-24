import { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../Header'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Accommodation from '../../pages/Accommodation'
import Footer from '../Footer'
import ErrorPage from '../../pages/ErrorPage'

const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accommodation" element={<Accommodation />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Fragment>
  )
}

export default App
