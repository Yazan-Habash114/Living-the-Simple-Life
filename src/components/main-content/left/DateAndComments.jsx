import styled from "styled-components"

const Info = styled.p`
    color: #707070;
    margin: 26px 0;
    font-size: 14px;
`

const DateAndComments = ({ string }) => <Info>{string}</Info>

export default DateAndComments