import "./NewCost.css";
import CostForm from "./CostForm";
import { useState } from "react";

const NewCost = (props) => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const saveCostDataHandler = inputCostData => {
        const costData = {
            ...inputCostData,
            id: Math.random().toString()
        }
        
        props.onAddCost(costData);
    }

    const inputCostDataHandler = () => {
        setIsFormVisible(true);
    }

    const cancelCostHandler = () => {
        setIsFormVisible(false);
    }

    return (
        <div className="new-cost">
            {!isFormVisible && <button type="add" onClick={inputCostDataHandler}>Add new cost</button>}
            {isFormVisible && <CostForm onCancel={cancelCostHandler} onSaveCostData={saveCostDataHandler} />}
        </div>
    );
}

export default NewCost;