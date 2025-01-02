import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AppLayout from './components/layout/AppLayout'
import Cart from './pages/Cart'
import SignIn from './pages/SignIn'
import Product from './pages/Product'
import NotFound from './components/UI/NotFound'
import ScrollToTop from './pages/ScrollToTop'
import { Toaster } from 'react-hot-toast'

const App = () => {

  return (
    <>
    <BrowserRouter>
      <Toaster/>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<AppLayout/>} >
          <Route path='/' element={<Home/>} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/product/:id' element={<Product/>} />
          <Route path='/*' element={<NotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App