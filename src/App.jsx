
import { useState } from 'react'
import './App.css'
import Header from './component/header/Header'
import Recipes from './component/recipies/Recipes'
import WantCooks from './component/wantcook/WantCooks'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CurrentlyCooking from './component/currentlyCook/CurrentlyCooking'



function App() {
  const [wantToCooks,setWantToCooks]= useState([]);
  // current cooking 
  const [currentCooking,setCurrentCooking]=useState([]);

  const handleWantToCooks = cooks =>{
    if (wantToCooks.includes(cooks)) {
      toast.error("You have already selected this recipe!");
    } else {
      setWantToCooks([...wantToCooks,cooks]);
      toast.success(`${cooks.recipe_name} added to your list!`);
    }
    // const neewWantCooks = [...wantToCooks,cooks];
    // setWantToCooks(neewWantCooks);
  }

  // onclick currentcooking handler 
  const hangleCurrentCooking = current=>{
    setWantToCooks(wantToCooks.filter((item)=>item!==current));
    setCurrentCooking([...currentCooking,current]);
    toast.info(`${current.recipe_name} is now being prepared!`);
    console.log(current);
  }

  return (
    <>
    <Header></Header>
    <div className='md:flex'>
      <Recipes handleWantToCooks={handleWantToCooks}></Recipes>
      <div className='flex flex-col'>
      <WantCooks 
      wantToCooks={wantToCooks}
      hangleCurrentCooking={hangleCurrentCooking}
      ></WantCooks>

      <CurrentlyCooking 
      currentCooking={currentCooking}
      ></CurrentlyCooking>
      </div>
    </div>
    <ToastContainer />
    </>
  )
}

export default App
