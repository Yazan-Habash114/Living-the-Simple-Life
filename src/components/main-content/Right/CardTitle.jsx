import styled from 'styled-components'

const Title = styled.p`
    color: #143774;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 3.6px;
`

const CardTitle = ({ cardTitle }) => <Title>{cardTitle}</Title>

export default CardTitle