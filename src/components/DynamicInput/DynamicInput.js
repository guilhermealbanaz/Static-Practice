import { InputText } from '../InputText/InputText';
import { InputDropDown } from '../InputDropDown/InputDropDown';

export const DynamicInput = (props) => {
    const { type, ...otherProps } = props;
    
    switch(type) {
        case 'dropdown':
            return <InputDropDown {...otherProps} />;
        default:
            return <InputText type={type} {...otherProps} />;
    }
}