import PropTypes from "prop-types";

const CurrentCookDisplay = ({currcooks}) => {
    const {recipe_name,preparing_time,calories}=currcooks;
    return (
        <div>
       <div>
        <ol className="list-decimal pl-6 text-gray-800 space-y-2">
        <li>
            <tr className="hover:bg-gray-50">
                <td className="py-3 px-6 border-b">{recipe_name}</td>
                <td className="py-3 px-6 border-b">{preparing_time}</td>
                <td className="py-3 px-6 border-b">{calories}</td>
                
            </tr>
        </li>
        </ol>
       </div>
     
        </div>
    );
};
CurrentCookDisplay.propTypes = {
    currcooks: PropTypes.object,
    hangleCurrentCooking:PropTypes.func,
};
export default CurrentCookDisplay;