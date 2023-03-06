import styled from 'styled-components'
import MainContentLeft from './left/MainContentLeft'
import MainContentRight from '../Right/MainContentRight'
import { Large, Small } from '../../../responsiveDesign/MediaQueries'

const Container = styled.main`
    margin: 3rem 8rem;
    display: flex;
    flex-direction: row;
    justify-content: center;

    ${Large({ flexDirection: 'column', alignItems: 'center' })}

    ${Small({ margin: '2rem' })}
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