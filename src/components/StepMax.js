import { connect } from "react-redux";

function StepMax(props) {
    return (
        <div class="value-container">
        <h3>Max Value</h3>
        <button className={props.max === 50 ? 'value active' : 'value'} onClick={() => {
            props.dispatch({ type: 'updateMax', payload: 50 })
        }}>50</button>
        <button className={props.max === 100 ? 'value active' : 'value'} onClick={() => {
            props.dispatch({ type: 'updateMax', payload: 100 })
        }}>100</button>
        <button className={props.max === 200 ? 'value active' : 'value'} onClick={() => {
            props.dispatch({ type: 'updateMax', payload: 200 })
        }}>200</button>
        </div>
    )
}

function maxStep(state) {
    return {
        max: state.max,
    }
}

export default connect(maxStep)(StepMax);