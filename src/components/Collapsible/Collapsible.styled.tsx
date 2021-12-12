import styled from 'styled-components';

export const Container = styled.div<{ isExpanded: boolean }>`
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.8s;
`;
