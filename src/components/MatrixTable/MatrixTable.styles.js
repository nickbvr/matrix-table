import styled, { css } from 'styled-components';

export const StyledTable = styled.table`
    ${({ theme: { colors, shadows } }) => css`
        && {
            width: fit-content;
            display: flex;
            background-color: ${colors.gray};
            box-shadow: ${shadows.bigger};
            border-radius: 10px;
            padding: 15px;
            margin: 0 auto;
        }
    `}
`;

export const StyledTableBody = styled.tbody`
    && {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`;

export const StyledRow = styled.tr`
    && {
        display: flex;
        align-items: center;
        gap: 10px;
    }
`;

export const DeleteCell = styled.td`
    ${({ theme: { colors, shadows } }) => css`
        && {
            width: 50px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: ${colors.white};
            box-shadow: ${shadows.small};
            border-radius: 8px;
            border-bottom: 0;
            transition: 0.1s;
            cursor: pointer;

            &:hover {
                background-color: ${colors.lightGray};

                svg {
                    fill: ${colors.blue};
                }
            }
        }
    `}
`;

export const AmountCell = styled.td`
    ${({ theme: { colors, shadows } }) => css`
        && {
            width: 50px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: ${shadows.bigger};
            border-radius: 8px;
            border-bottom: 0;
            transition: 0.1s;
            cursor: pointer;
            background-color: ${({ nearest }) => (nearest ? colors.blue : colors.white)};
            color: ${({ nearest }) => (nearest ? colors.white : colors.black)};
            background-image: ${({ isactive, percent }) =>
                isactive
                    ? `linear-gradient(0, ${colors.blue} ${percent}, ${colors.white} ${percent})`
                    : 'none'};

            &:hover {
                border: 2px solid ${colors.blue};
                color: ${colors.blue};
            }
        }
    `}
`;

export const SumCell = styled.td`
    ${({ theme: { colors, shadows } }) => css`
        && {
            width: 50px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: ${colors.gray};
            box-shadow: ${shadows.small};
            border-radius: 8px;
            border-bottom: 0;
        }
    `}
`;

export const AddCell = styled.td`
    ${({ theme: { colors, shadows } }) => css`
        && {
            width: 50px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: ${colors.white};
            box-shadow: ${shadows.small};
            border-radius: 8px;
            border-bottom: 0;
            transition: 0.1s;
            cursor: pointer;

            &:hover {
                background-color: ${colors.lightGray};

                svg {
                    fill: ${colors.blue};
                }
            }
        }
    `}
`;

export const AverageValueCell = styled.td`
    ${({ theme: { colors, shadows } }) => css`
        && {
            width: 50px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: ${colors.gray};
            box-shadow: ${shadows.small};
            border-radius: 8px;
            border-bottom: 0;
        }
    `}
`;

export const ClearMatrix = styled.div`
    ${({ theme: { colors, shadows } }) => css`
        width: 35px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${colors.white};
        position: fixed;
        top: 0;
        left: 0;
        box-shadow: ${shadows.small};
        border-radius: 50%;
        margin: 15px;
        transition: 0.1s;
        cursor: pointer;

        &:hover {
            background-color: ${colors.lightGray};
            svg {
                fill: ${colors.blue};
            }
        }
    `}
`;
