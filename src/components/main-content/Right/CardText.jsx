import styled from 'styled-components'
import { Large } from '../../../responsiveDesign/MediaQueries'

const Text = styled.p`
    width: 162px;
    color: #143774;
    font-size: 14px;

    ${Large({ fontSize: '20px', width: '100%' })}
`

const CardText = ({ cardText }) => <Text>{cardText}</Text>

export default CardText