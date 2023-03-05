import styled from 'styled-components'
import { Medium } from '../../responsiveDesign/MediaQueries'
import Logo from './Logo'
import NavItems from './NavItems'

const Container = styled.nav`
    background-color: #F8F8F8;
    display: flex;
    justify-content: space-around;
    padding: 4rem 0;

    ${Medium({ flexDirection: 'column', alignItems: 'center', padding: '4rem 0' })}
`

const Navbar = () => {
    return (
        <Container>
            <Logo />
            <NavItems />
        </Container>
    )
}

export default Navbar