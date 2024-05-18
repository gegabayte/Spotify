import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Likes from './pages/Likes'
import Musics from './pages/Musics'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={
          <Layout>
            <Home></Home>
          </Layout>
        }></Route>
        <Route path='/likes' element={
          <Layout>
            <Likes></Likes>
          </Layout>
        }></Route>
        <Route path='/playlist/:id' element={
          <Layout>
            <Musics></Musics>
          </Layout>
        }></Route>
      </Routes>
    </>
  )
}

export default App
