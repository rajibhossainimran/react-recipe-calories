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
            <p>{recipes.length}</p>
            {
                recipes.map(recipe =><Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>)
            }
        </div>
    );
};

export default Recipes;