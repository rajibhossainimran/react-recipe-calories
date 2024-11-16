import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../recipe/Recipe";


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
            <p>{`Recipes: ${recipes.length}`}</p>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
           {
                recipes.map(recipe =><Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>)
            }
           </div>
        </div>
    );
};

export default Recipes;