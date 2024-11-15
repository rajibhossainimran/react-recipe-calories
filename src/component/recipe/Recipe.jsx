import PropTypes from 'prop-types';
import './Recipe.css'

const Recipe = ({recipe}) => {
    const {recipe_name,recipe_image,short_description} = recipe;
    return (
        <div className='recipe-container'>
            <img src={recipe_image} alt="image" />
            <div className="text-3xl">{recipe_name}</div>
            <p>{short_description}</p>
        </div>
    );
};
Recipe.prototype ={
    recipe:PropTypes.object.isRequired
}
export default Recipe;