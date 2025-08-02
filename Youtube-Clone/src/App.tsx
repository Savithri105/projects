
import './App.css'
import {Route,Routes}from 'react-router-dom'
import Home from './pages/Home'
import Watch from './pages/Watch'
import SearchBar from './pages/Search'

function App() {


  return (
    <>
   <Routes>
    

    <Route path="/SearchBar" element={<SearchBar/>}></Route>
    <Route path="/Watch/:id" element={<Watch/>}></Route>
    <Route path="/" element={<Home/>}></Route>
   </Routes>
    </>
  )
}

export default App
