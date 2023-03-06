import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Small } from '../../responsiveDesign/MediaQueries'

const Container = styled.ul`
    display: flex;
    align-items: center;

    ${Small({ flexDirection: 'column' })}
`

const Item = styled.li`
    list-style-type: none;
    margin: 0 1.5rem;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 3.2px;
    text-transform: uppercase;
    cursor: pointer;
    padding-bottom: 2px;

    &:hover {
        border-bottom: 2px solid #717171;
        padding-bottom: 0;
    }

    ${Small({ margin: '1rem 0' })}
`

const NavItems = () => {
    return (
        <Container>
            {
                ['Home', 'About me', 'Recent posts'].map(itemText => <NavItem title={itemText} />)
            }
        </Container>
    )
}

const NavItem = ({ title }) => {
    return (
        <Item>
            {
                title === 'Home' && <NavLink to={"/"} style={({ isActive }) => ({
                    color: isActive ? '#143774' : '#717171',
                    textDecoration: 'none'
                })}>
                    Home
                </NavLink>
            }
            {
                title === 'About me' && <NavLink to={"/about-me"} style={({ isActive }) => ({
                    color: isActive ? '#143774' : '#717171',
                    textDecoration: 'none'
                })}>
                    About me
                </NavLink>
            }
            {
                title === 'Recent posts' && <NavLink to={"/recent-posts"} style={({ isActive }) => ({
                    color: isActive ? '#143774' : '#717171',
                    textDecoration: 'none'
                })}>
                    Recent posts
                </NavLink>
            }
        </Item>
    )
}

export default NavItems