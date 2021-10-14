import Button from '../Button';
import './style.css';
import { connect } from 'react-redux';
import {keypad} from '../../constants';

const Layout = (props) => {
    const {display} = props;
    return <div className="calc-wrapper">
        <h4 className="title">Калькулятор</h4>
        <div className='display my-4'>{display}</div>
        <div className='btns-grid'>
            {
                keypad.map(keypadItem =>
                    Array.isArray(keypadItem) ?
                        keypadItem.map(keypadItemEl => <Button key={keypadItemEl.value} btnConfiguration={keypadItemEl} disabled={keypadItemEl.disabled || false} />) :
                        <Button key={keypadItem.value} btnConfiguration={keypadItem} disabled={keypadItem.disabled || false}/>)
            }
        </div>
    </div>
}

const mapStateToProps = (state) => ({ display:state.calcReducer });

export default connect(mapStateToProps, null)(Layout);