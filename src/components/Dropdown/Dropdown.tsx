import { useState } from 'react';
import { IDropdownProps } from './IDropdownProps';
import * as S from './Dropdown.styled';

export function Dropdown ({ id, placeholderText, options }: IDropdownProps): JSX.Element {
    const [ isOpen, setIsOpen ] = useState(false);

    const handleTriggerClick = () => {
        setIsOpen(state => !state);
    };

    return (
        <S.Wrapper id={id}>
            <button 
                aria-haspopup='true' 
                aria-expanded={isOpen} 
                id={`${id}-trigger`}
                onClick={handleTriggerClick} 
                type='button'
            >{ placeholderText }</button>
            { isOpen &&
                <S.Overlay id={`${id}-optionwindow`}>
                    <div 
                        id={`${id}-optionlist`} 
                        role="listbox"
                    >
                        { options.map((option, index) => (
                            <S.Option key={`${id}-option-${index}`}>
                                { option }
                            </S.Option>
                        ))}
                    </div>
                </S.Overlay>
            }
        </S.Wrapper>
    );
}

export default Dropdown;
