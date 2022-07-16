import styled, { css } from 'styled-components'

const LabelComp = styled.label`
    align-items: center;
    padding: 0.5em 0;
    display: block;
`;

export const Label = ({label,isRequired}) => {
    return (
        <LabelComp>{label}{isRequired ? '*' : ''}</LabelComp>
    );
}

export const Error = styled.div`
    color: red;
`;

export const TemplateCss = css`
    display: block;
    padding: 10px;
    width: 90%;
    border-radius: 10px;
    border: 1px solid #1ea7fd;

    :hover {
        border: 1px solid #aaa;
    }
`;