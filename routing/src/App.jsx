import { useEffect, useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.css"
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import axios from 'axios'
import ROUTES from './routes/Routes'
import MainContext from '../../../rout_exp/routing/src/Context/Context'


function App() {
  const rout=createBrowserRouter(ROUTES)
const [data,setData]=useState([])
const[loading,setLoading]=useState(true)
const [error,setError]=useState("")
useEffect(()=>{
  axios.get('http://localhost:3000/products').then(res=>{
    setData([...res.data])
    setLoading(false)
  }).catch(error=>{
    setError(error)
    setLoading(false)
  })
},[])
const contextdata={
  data,setData,loading,setLoading,error,setError
}
  return (
   
    <MainContext.Provider value={contextdata}>
   <RouterProvider router={rout}/>
    </MainContext.Provider>
  )
}

export default App
