import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import SharedLayout from './Pages/SharedLayout'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Pages from './Pages/Pages'
import Error from './Pages/Error'
import Content from './Pages/Content'
import Case from './Pages/Case Shop'
import Blog from './Pages/Blog'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/pages' element={<Pages />} />
          <Route path='/content' element={<Content />} />
          <Route path='/case' element={<Case />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
