import "./CostList.css"
import CostItem from "./CostItem";

const CostList = (props) => {

    if(props.costs.length === 0) {
        return <h2 className="cost-list__fallback">There were no costs this year.</h2>
    }

    return (
        <ul className="cost-list">
            {props.costs.map(cost => (
                <CostItem
                    key={cost} 
                    date={cost.date} 
                    description={cost.description} 
                    price={cost.price}
                /> 
            ))}
        </ul>
    );
};

export default CostList;