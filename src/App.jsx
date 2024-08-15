import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Feed from './pages/Feed'
import VideoDetail from './pages/VideoDetail'
import SearchResult from './pages/SearchResult'
import Header from './components/Header'

const App = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Feed></Feed>}></Route>
        <Route path='/watch' element={<VideoDetail></VideoDetail>}></Route>
        <Route path='/results' element={<SearchResult></SearchResult>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App