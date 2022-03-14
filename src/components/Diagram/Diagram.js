import "./Diagram.css"
import DiagramBar from "./DiagramBar";

const Diagram = (props) => {

    const setsValues = props.dataSets.map(dataSet => dataSet.value);
    const maxSetValue = Math.max(...setsValues);

    return (
        <div className="diagram">
            {props.dataSets.map(dataSet => (
                <DiagramBar
                    key={dataSet.id} 
                    value={dataSet.value} 
                    maxValue={maxSetValue} 
                    name={dataSet.name}
                />
            ))}
        </div>
    );
}

export default Diagram;