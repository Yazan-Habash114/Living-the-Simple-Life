import styled from "styled-components"
import { Small } from "../../../../responsiveDesign/MediaQueries"

const Image = styled.div`
    width: 198px;
    height: 242px;
    background-size: cover;
    background-position: center;
    background-image: ${props => `url(${require(`../../../../assets/images/${props.name}`)})`};
    background-position: ${props => props.name === 'deco.jpg' ? 'left' : 'center'};

    ${Small({ width: '100%' })}
`

const PostImg = ({ imgName }) => <Image name={imgName} />

export default PostImg