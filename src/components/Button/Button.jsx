import { Button as BsButton } from 'react-bootstrap';
import { clearKey, equalKey, numberKey, operatorKey } from '../../constants';
import btnClick from '../../actionCreators';
import { connect } from 'react-redux';

const Button = (props) => {
    const { btnConfiguration, btnConfiguration: { value }, className, btnClick } = props;
    const clickHandler = (e) => {
        btnClick(btnConfiguration)
    };
    return <BsButton className={className} onClick={clickHandler} value={value}>
        {value}
    </BsButton>
}

const configureButton = (props) => {
    const { btnConfiguration: { type } } = props;
    let classes = 'text-white ';
    switch (type) {
        case (clearKey): {
            classes += 'custom-border border-warning bg-secondary font-weight-bolder text-danger';
            break;
        }
        case (equalKey): {
            classes += '';
            break;
        }
        case (numberKey): {
            classes += 'custom-border border-success bg-secondary';
            break;
        }
        case (operatorKey): {
            classes += 'custom-border border-primary bg-secondary';
            break;
        }
        default: {}
    }
    return <Button {...props} className={classes}></Button>
}

const mapDispatchToProps = (dispatch) => ({
    btnClick: (payload) => dispatch(btnClick(payload)),
});

export default connect(null, mapDispatchToProps)(configureButton);