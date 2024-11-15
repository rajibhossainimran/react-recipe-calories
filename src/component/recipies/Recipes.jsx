import { useEffect } from "react";
import { useState } from "react";


const Recipes = () => {
    const [recipes,setRecipes] = useState([]);

    // data load 
    useEffect(()=>{
        fetch('recipes.json')
        .then(res=>res.json())
        .then(data => setRecipes(data))
    },[])
    
    return (
        <div className="md:w-2/3">
            <p>{recipes.length}</p>
        </div>
    );
};

export default Recipes;