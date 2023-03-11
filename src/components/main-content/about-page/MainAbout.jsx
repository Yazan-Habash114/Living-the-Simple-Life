import React from 'react'
import styled from 'styled-components'
import MainContentRight from '../Right/MainContentRight'
import MainContentLeft from './MainContentLeft'

const Container = styled.div`
    margin: 3rem 8rem;
    display: flex;
`

const MainAbout = () => {
    return (
        <Container>
            <MainContentLeft />
            <MainContentRight />
        </Container>
    )
}

export default MainAbout