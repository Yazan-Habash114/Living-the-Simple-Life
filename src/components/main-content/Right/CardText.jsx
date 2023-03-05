import styled from 'styled-components'

const Text = styled.p`
    width: 162px;
    color: #143774;
    font-size: 14px;
`

const CardText = ({ cardText }) => <Text>{cardText}</Text>

export default CardText