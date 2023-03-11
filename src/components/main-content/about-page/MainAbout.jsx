import React from 'react'
import styled from 'styled-components'
import MainContentRight from '../Right/MainContentRight'
import MainContentLeft from './MainContentLeft'
import { Large, Small } from '../../../responsiveDesign/MediaQueries'

const Container = styled.div`
    margin: 3rem 8rem;
    display: flex;

    ${Large({ flexDirection: 'column', alignItems: 'center' })}

    ${Small({ margin: '2rem' })}
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