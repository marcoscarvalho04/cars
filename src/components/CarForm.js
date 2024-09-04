import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost , addCar} from "../store";

function CarForm() {

    const dispatch = useDispatch();  

    const {name, cost} = useSelector((state) =>{ 
        return { 
            name: state.form.name, 
            cost: state.form.cost
        }
    })


    const handleChangeName = (event) => { 
        dispatch(changeName(event.target.value)); 
    }

    const handleCostChange = (event) => {
        const carCost = parseInt(event.target.value) || 0; 
        dispatch(changeCost(carCost)); 

    }
    const handleSubmit = (event) => {
        event.preventDefault(); 
        const car = { 
            name, 
            cost
        }
        
        dispatch(addCar(car));
        dispatch(changeCost(''));
        dispatch(changeName(''));

    }
    return (<div className="car-form panel">
        <h4 className="subtitle is-3"> </h4>
        <form onSubmit={handleSubmit}>
            <div className="field-group">
                <div className="field">
                    <label className="label">Name</label>
                    <input className="input is-expanded" value={name} onChange={handleChangeName}></input>
                </div>
                <div className="field">
                    <label className="label">Cost</label>
                    <input className="input is-expanded" value={cost || ''} onChange={handleCostChange} type="number"></input>
                </div>
            </div>
            <div className="field">
                <button className="name is-link">Submit</button>
            </div>
        </form>
    </div>)
}

export default CarForm; 