import { connect } from 'react-redux';
import Button from './Button';
import StepMax from './StepMax';
import StepMin from './StepMin';

function App(props) {
    
    return (
        <>
        <h1>{props.count}</h1>
        <div className='wrapper'>
            <StepMin />
            <StepMax />
        </div>
        <Button />
    </>
    )
}

function getCount(state) {
    return {
        count: state.count,
    };
}

export default connect(getCount)(App);