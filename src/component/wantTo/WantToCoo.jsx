import PropTypes from "prop-types";


const WantToCoo = ({cooks}) => {
    const {recipe_name,preparing_time,calories}=cooks;
    return (
        <div>
    
       <ol>
       <tr className="hover:bg-gray-50">
            <td className="py-3 px-6 border-b">{recipe_name}</td>
            <td className="py-3 px-6 border-b">{preparing_time}</td>
            <td className="py-3 px-6 border-b">{calories}</td>
        </tr>
       </ol>

        </div>
    );
};
WantToCoo.propTypes = {
    cooks: PropTypes.object.isRequired, 
};
export default WantToCoo;