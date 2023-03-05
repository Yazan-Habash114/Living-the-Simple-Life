import styled from "styled-components"

const Container = styled.footer`
    background-color: #143774;
    padding: 60px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & p {
        color: #fff
    }
`

const SiteName = styled.p`
    opacity: 0.8;
`

const Copyright = styled.p`
    opacity: 0.54;
    font-size: 14px;
`

const Footer = () => {
    return (
        <Container>
            <SiteName>Living the Simple Life</SiteName>
            <Copyright>Copyright 2019</Copyright>
        </Container>
    )
}

export default Footer