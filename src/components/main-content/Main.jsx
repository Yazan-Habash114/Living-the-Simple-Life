import styled from 'styled-components'
import MainContentLeft from './left/MainContentLeft'
import MainContentRight from './Right/MainContentRight'

const Container = styled.main`
    margin: 3rem 8rem;
    display: flex;
    flex-direction: row;
`

const Main = () => {
    return (
        <Container>
            <MainContentLeft />
            <MainContentRight />
        </Container>
    )
}

export default Main