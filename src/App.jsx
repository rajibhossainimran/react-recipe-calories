
import { useState } from 'react'
import './App.css'
import Header from './component/header/Header'
import Recipes from './component/recipies/Recipes'
import WantCooks from './component/wantcook/WantCooks'


function App() {
  const [wantToCooks,setWantToCooks]= useState([]);

  const handleWantToCooks = cooks =>{
    const neewWantCooks = [...wantToCooks,cooks];
    setWantToCooks(neewWantCooks);
  }

  return (
    <>
    {console.log(wantToCooks)}
    <Header></Header>
    <div className='md:flex'>
      <Recipes handleWantToCooks={handleWantToCooks}></Recipes>
      <WantCooks wantToCooks={wantToCooks}></WantCooks>
    </div>
    </>
  )
}

export default App
