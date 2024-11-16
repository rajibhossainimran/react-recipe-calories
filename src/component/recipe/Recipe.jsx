import PropTypes from 'prop-types';
import './Recipe.css'

const Recipe = ({recipe}) => {
    const {recipe_name,recipe_image,short_description,ingredients} = recipe;
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
        </div>
    );
};
Recipe.prototype ={
    recipe:PropTypes.object.isRequired
}
export default Recipe;