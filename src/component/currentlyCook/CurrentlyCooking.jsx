

const CurrentlyCooking = ({currentCooking}) => {
    const {recipe_name,preparing_time,calories}=currentCooking;
    return (
        <div>
            <h1 className="font-bold text-xl py-3 text-center py-4">{`Currently Cooking :${currentCooking.length}`}</h1>
        </div>
    );
};

export default CurrentlyCooking;