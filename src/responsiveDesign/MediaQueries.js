import { css } from "styled-components";

export const Small = (props) => {
    return (
        css`
            @media only screen and (max-width: 740px) {
                ${props}
            }
        `
    )
}

export const Medium = (props) => {
    return (
        css`
            @media only screen and (max-width: 900px) {
                ${props}
            }
        `
    )
}

export const Large = (props) => {
    return (
        css`
            @media only screen and (max-width: 1200px) {
                ${props}
            }
        `
    );
};