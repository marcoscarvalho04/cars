import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";


function CarSearch() {
    const dispatch = useDispatch();

    const searchTerm = useSelector((state) => {
        return state.cars.searchTerm
    })

    const handleChangeTerm = (event) => {
        dispatch(changeSearchTerm(event.target.value));
    }

    return (<div>
        <div className="list-header">
            <h3 className="title is-3"> My Cars </h3>
            <div className="search field is-horizontal">
                <label className="label">Search</label>
            </div>
            <input className="input"
            value={searchTerm}
            onChange={handleChangeTerm} />
        </div>
        </div>)
}

export default CarSearch; 