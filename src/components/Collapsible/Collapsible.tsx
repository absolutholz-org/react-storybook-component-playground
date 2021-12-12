import React, { useCallback } from 'react';

import * as S from './Collapsible.styled';
import { ICollapsibleProps } from './ICollapsible';

export function Collapsible({ isExpanded, children, ...props }: ICollapsibleProps): JSX.Element {
    const ref = useCallback(node => {
        const handleTransitionEnd = () => {
            console.log('Transition ended', node, isExpanded);
            node.style.maxHeight = `${node.getClientRects()[0].height}px`;
            node.removeEventListener('transitionend', handleTransitionEnd);        
        };

        if (node !== null) {
            console.log(node, isExpanded);

            if (isExpanded) {
                node.style.maxHeight = '100vh';
                node.addEventListener('transitionend', handleTransitionEnd);        
            } else {
                node.style.maxHeight = null;
            }
        }
    }, [isExpanded]);

	return (
		<S.Container 
            isExpanded={isExpanded}
            ref={ref}
			{...props}
		>
            { children }
        </S.Container>
	);
}

export default Collapsible;
