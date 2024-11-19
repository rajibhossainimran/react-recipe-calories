import { prototype } from "postcss/lib/previous-map";
import PropTypes from "prop-types";


const WantToCoo = ({cooks,hangleCurrentCooking}) => {
    const {recipe_name,preparing_time,calories}=cooks;
    return (
        <div>
    
       <ol className="list-decimal pl-6 text-gray-800 space-y-2">
       <li>
        <tr className="hover:bg-gray-50">
            <td className="py-3 px-6 border-b">{recipe_name}</td>
            <td className="py-3 px-6 border-b">{preparing_time}</td>
            <td className="py-3 px-6 border-b">{calories}</td>
            <td className="py-3 px-6 border-b">
                
                <button onClick={()=>hangleCurrentCooking(cooks)} className="btn btn-success rounded-xl">preparing</button></td>
        </tr>
       </li>
       </ol>

        </div>
    );
};
WantToCoo.propTypes = {
    cooks: PropTypes.object.isRequired, 
    hangleCurrentCooking:prototype.func,
};
export default WantToCoo;