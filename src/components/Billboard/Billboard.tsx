import * as S from './Billboard.styled';
import { IBillboardProps } from './IBillboard';

export function Billboard({ minHeight, children, ...props }: IBillboardProps): JSX.Element {
	return (
		<S.Container 
            minHeight={ minHeight }
			{...props}
		>
            <picture>
                <source srcSet="https://via.placeholder.com/400x200.webp?text=WEBP+-+Portrait"
                        media="(max-width: 650px)"
                />
                <source srcSet="https://via.placeholder.com/800x800.webp?text=WEBP+-+Square"
                        media="(max-width: 992px)"
                />
                <source srcSet="https://via.placeholder.com/1600x900.webp?text=WEBP+-+Landscape" />
                <S.Img alt="" src="https://via.placeholder.com/1600x900.jpg?text=Fallback+Image" />
            </picture>
            { children &&
                <S.ChildrenContainer
                    minHeight={ minHeight }
                >
                    { children }
                </S.ChildrenContainer>
            }
        </S.Container>
	);
}

export default Billboard;
