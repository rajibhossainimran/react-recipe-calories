
import './App.css'
import Header from './component/header/Header'
import Recipes from './component/recipies/Recipes'
import WantCook from './component/wantcook/WantCook'

function App() {


  return (
    <>
    <Header></Header>
    <div className='md:flex'>
      <Recipes></Recipes>
      <WantCook></WantCook>
    </div>
    </>
  )
}

export default App
