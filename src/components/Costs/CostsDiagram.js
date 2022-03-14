import Diagram from "../Diagram/Diagram";

const CostsDiagram = (props) => {

    const diagramDataSets = [
        {name: "Jan", value: 0},
        {name: "Feb", value: 0},
        {name: "Mar", value: 0},
        {name: "Apr", value: 0},
        {name: "May", value: 0},
        {name: "Jun", value: 0},
        {name: "Jul", value: 0},
        {name: "Aug", value: 0},
        {name: "Sep", value: 0},
        {name: "Oct", value: 0},
        {name: "Nov", value: 0},
        {name: "Dec", value: 0},
    ]

    for(const cost of props.costs) {
        const costMonth = cost.date.getMonth();
        diagramDataSets[costMonth].value += cost.price;
    }

    return <Diagram dataSets={diagramDataSets}/>
}

export default CostsDiagram;