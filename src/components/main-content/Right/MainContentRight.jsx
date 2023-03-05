import styled from 'styled-components'
import CardBorder from './CardBorder'
import PostBorder from './PostBorder'

const Container = styled.div`
    margin-left: 51px;
`

const MainContentRight = () => {
    return (
        <Container>
            <CardBorder />
            <PostBorder />
        </Container>
    )
}

export default MainContentRight