import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../recipe/Recipe";
import PropTypes from "prop-types";


const Recipes = ({handleWantToCooks}) => {
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
                recipes.map(recipe =><Recipe
                 key={recipe.recipe_id}
                  recipe={recipe}
                  handleWantToCooks={handleWantToCooks}
                  >

                </Recipe>)
            }
           </div>
        </div>
    );
};
Recipes.propTypes = {
    handleWantToCooks: PropTypes.func.isRequired, // handleWantToCooks must be a function
};
export default Recipes;