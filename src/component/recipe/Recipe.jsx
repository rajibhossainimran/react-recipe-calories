import PropTypes from 'prop-types';
import './Recipe.css';
import { FaRegClock } from "react-icons/fa";
import { FaFire } from "react-icons/fa";


const Recipe = ({recipe,handleWantToCooks}) => {
    const {recipe_name,recipe_image,short_description,ingredients,preparing_time,calories} = recipe;
    return (
        <div className='recipe-container'>
            <img src={recipe_image} alt="image" />
            <div className="text-2xl text-center py-2">{recipe_name}</div>
            <p className='pb-3 text-center'>{short_description}</p>
            < hr />
            <p className='font-semibold text-xl pt-2'>{`Ingredients : ${ingredients.length}`}</p>
            <ul className="list-disc pl-5">
            {ingredients.map((ingre, index) => (
                <li key={index}>{ingre}</li>
            ))}
        </ul>
        <div className='flex justify-between py-3 me-20'>
            <div className='flex justify-center items-center'> <FaRegClock /><p  className='ms-2'>{preparing_time}</p>
            </div>
            <div className='flex justify-center items-center'> <FaFire /><p  className='ms-2'>{calories}</p>
            </div>
    
        </div>
        <button onClick={()=>handleWantToCooks(recipe)} className="btn btn-success me-6 rounded-3xl">Want to cook</button>
        </div>
    );
};
Recipe.propTypes = {
    recipe: PropTypes.shape({
        handleWantToCooks: PropTypes.func,
        recipe_name: PropTypes.string.isRequired,
        recipe_id: PropTypes.number.isRequired,
        recipe_image: PropTypes.string.isRequired,
        short_description: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
        preparing_time: PropTypes.string.isRequired,
        calories: PropTypes.string.isRequired,
        
    }).isRequired,
};
export default Recipe;