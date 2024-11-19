import PropTypes from "prop-types";
import CurrentCookDisplay from "./CurrentCookDisplay";


const CurrentlyCooking = ({currentCooking}) => {


    return (
        <div>
            <h1 className="font-bold text-xl py-3 text-center py-4">{`Currently Cooking :${currentCooking.length}`}</h1>
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                <thead>
                    <tr className="bg-gray-100 text-left">
                        <th className="py-3 px-6 font-semibold text-gray-600 border-b">Name</th>
                        <th className="py-3 px-6 font-semibold text-gray-600 border-b">Time</th>
                        <th className="py-3 px-6 font-semibold text-gray-600 border-b">Calories</th>
                        <th ></th>
                    </tr>
                </thead>
                <tbody>
                   
                </tbody>
            </table>
            {
                currentCooking.map((currcooks,index)=><CurrentCookDisplay
                 key={index}
                 currcooks={currcooks}
                  ></CurrentCookDisplay>)
            }
             
        </div>
    );
};
CurrentlyCooking.propTypes = {
    currentCooking: PropTypes.object,
};
export default CurrentlyCooking;