import { connect } from "react-redux";

function StepMin(props) {
    return (
        <div class="steps-container">
        <h3>Steps</h3>
        <button className={props.step === 5 ? 'value active' : 'value'} onClick={() => {
            props.dispatch({ type: 'changeStep', payload: 5 })
        }}>5</button>
        <button className={props.step === 10 ? 'value active' : 'value'} onClick={() => {
            props.dispatch({ type: 'changeStep', payload: 10 })
        }}>10</button>
        <button className={props.step === 15 ? 'value active' : 'value'} onClick={() => {
            props.dispatch({ type: 'changeStep', payload: 15 })
        }}>15</button>
        </div>
    )
}

function minStep(state) {
    return {
        step: state.step,
    }
}

export default connect(minStep)(StepMin);