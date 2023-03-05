import styled from 'styled-components'
import CardImage from './CardImage'
import CardText from './CardText'
import CardTitle from './CardTitle'

const Contianer = styled.div`
    padding: 42px 45px;
`

const Card = ({ cardObj }) => {
    return (
        <Contianer>
            <CardTitle cardTitle={cardObj.title} />
            <CardImage imageSource={cardObj.img} />
            <CardText cardText={cardObj.text} />
        </Contianer>
    )
}

export default Card