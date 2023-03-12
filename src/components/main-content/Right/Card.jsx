import styled from 'styled-components'
import CardImage from './CardImage'
import CardText from './CardText'
import CardTitle from './CardTitle'

const Container = styled.div`
    padding: 42px 45px;
`

const Card = ({ cardObj }) => {
    return (
        <Container>
            <CardTitle cardTitle={cardObj.title} />
            <CardImage imageSource={cardObj.img} />
            <CardText cardText={cardObj.text} />
        </Container>
    )
}

export default Card