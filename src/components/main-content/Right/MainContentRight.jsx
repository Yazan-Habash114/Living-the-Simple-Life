import styled from 'styled-components'
import { Large, Small } from '../../../responsiveDesign/MediaQueries'
import CardBorder from './CardBorder'
import PostBorder from './PostBorder'

const Container = styled.div`
    margin-left: 51px;

    ${Large({ margin: '1rem 0 0 0' })}
    
    ${Small({ width: '100%' })}
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