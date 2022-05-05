import { connect } from "react-redux"

const Button = (props) => {
return (
    <div className="btn-container">
    <button onClick={() => props.dispatch({ type: 'increment' })} className="increment">Increment</button>
    <button onClick={() => props.dispatch({ type: 'decrement' })} className="decrement">Decrement</button>
    <button onClick={() => props.dispatch({ type: 'reset' })} className="reset">Reset</button>
    </div>
)
}

export default connect()(Button);