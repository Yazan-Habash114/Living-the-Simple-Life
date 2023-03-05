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

const Anchor = styled.p`
    text-decoration: none;
    color: #717171;
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
            <Anchor>{title}</Anchor>
        </Item>
    )
}

export default NavItems