import { Spinner as SpinnerDiv} from './Spinner.styles';

const Spinner = ({ name, value, text, onClick, active, hidden, disabled, style }) => (
    <>
        {
            (hidden == true) ?
                <SpinnerDiv className={ 'hidden' } ></SpinnerDiv>
            :
                <SpinnerDiv className={ '' } ></SpinnerDiv>
        }
    </>
);

export default Spinner;