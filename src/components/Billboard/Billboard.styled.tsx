import styled from 'styled-components';

/**
 * `min-height` here may seem superfluous, but it is needed in cases where there
 * is no `children` content
 */
export const Container = styled.div<{ minHeight: string }>`
    display: flex;
    min-height: ${({ minHeight }) => `${minHeight}`};
    position: relative;
    z-index: 0;
`;
    
export const Img = styled.img`
    height: 100%;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
`;
    
/**
 * Flexbox here is useful together with a `flex-grow: 1` on the container's content 
 * in order to have that content take up (at least) 100% of this container's height
 */
export const ChildrenContainer = styled.div<{ minHeight: string }>`
    position: relative;
    width: 100%;
    z-index: 2;
`;
