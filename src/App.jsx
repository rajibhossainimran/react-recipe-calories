
import { useState } from 'react'
import './App.css'
import Header from './component/header/Header'
import Recipes from './component/recipies/Recipes'
import WantCooks from './component/wantcook/WantCooks'


function App() {
  const [wantToCooks,setWantToCooks]= useState([]);

  const handleWantToCooks = cooks =>{
    if (wantToCooks.includes(cooks)) {
      toast.error("You have already selected this recipe!");
    } else {
      setWantToCooks([...wantToCooks,cooks]);
      // toast.success(`${recipe} added to your list!`);
    }
    // const neewWantCooks = [...wantToCooks,cooks];
    // setWantToCooks(neewWantCooks);
  }

  return (
    <>
    <Header></Header>
    <div className='md:flex'>
      <Recipes handleWantToCooks={handleWantToCooks}></Recipes>
      <WantCooks wantToCooks={wantToCooks}></WantCooks>
    </div>
    </>
  )
}

export default App
