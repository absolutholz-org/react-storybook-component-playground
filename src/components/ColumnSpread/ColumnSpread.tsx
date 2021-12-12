import { IColumnSpreadProps } from "./IColumnSpread";
import * as S from "./IColumnSpread.styled";

export function ColumnSpread ({ slotTop, slotBottom }: IColumnSpreadProps ): JSX.Element {
    return (
        <S.ColumnSpreadContainer>   
            <S.ColumnSpreadTopContainer>
                { slotTop }
            </S.ColumnSpreadTopContainer>
            { slotBottom }
        </S.ColumnSpreadContainer>
    );
}

export default ColumnSpread;
