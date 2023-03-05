import styled from "styled-components"

const Image = styled.div`
    width: 198px;
    height: 242px;
    background-size: cover;
    background-position: center;
    background-image: ${props => `url(${require(`../../../assets/images/${props.name}`)})`};
    background-position: ${props => props.name === 'deco.jpg' ? 'left' : 'center'};
`

const PostImg = ({ imgName }) => <Image name={imgName} />

export default PostImg