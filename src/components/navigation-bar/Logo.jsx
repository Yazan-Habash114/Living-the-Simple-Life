import styled from 'styled-components'

const Container = styled.div`
    cursor: default;
`

const Header = styled.h1`
    font-size: 33px;
    color: #143774;
`

const SubHeader = styled.p`
    margin-top: 4px;
    color: #1792D2;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2.4px;
`

const Logo = () => {
    return (
        <Container>
            <Header>Living the simple life</Header>
            <SubHeader>A blog exploring minimalism in life</SubHeader>
        </Container>
    )
}

export default Logo