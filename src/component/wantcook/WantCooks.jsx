import PropTypes from "prop-types";
import WantToCoo from "../wantTo/WantToCoo";


const WantCooks = ({wantToCooks}) => {
    return (
        <div className="md:w-1/3">
            <h1 className="font-bold text-xl py-3">{`Want To Cook : ${wantToCooks.length}`}</h1>
            <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                <thead>
                    <tr className="bg-gray-100 text-left">
                        <th className="py-3 px-6 font-semibold text-gray-600 border-b">Name</th>
                        <th className="py-3 px-6 font-semibold text-gray-600 border-b">Time</th>
                        <th className="py-3 px-6 font-semibold text-gray-600 border-b">Calories</th>
                    </tr>
                </thead>
                <tbody>
                   
                </tbody>
            </table>
        </div>
            {
                wantToCooks.map((cooks,index)=><WantToCoo key={index} cooks={cooks}></WantToCoo>)
            }
        </div>
    );
};
WantCooks.propTypes = {
    wantToCooks: PropTypes.array, // handleWantToCooks must be a function
};
export default WantCooks;