import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Likes from './pages/Likes'
import Musics from './pages/Musics'
import { useEffect } from 'react'
import { getToken } from './components/utils'
import { useDispatch } from 'react-redux'
import { create } from './redux/AuthSlice'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    getToken()
      .then(res => {
        dispatch(create(res))
      })
      .catch(err => {
        console.log(err);
      })
  }, [])
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
        <Route path='/playlist' element={
          <Layout>
            <Musics></Musics>
          </Layout>
        }></Route>
      </Routes>
    </>
  )
}

export default App
