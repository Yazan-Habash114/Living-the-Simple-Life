import styled from 'styled-components'

const Image = styled.img`
    width: 150px;
    margin-top: 17px;
    margin-bottom: 10px;
`

const PostImage = ({ imageSource }) => <Image src={require(`../../../assets/images/${imageSource}`)} alt={imageSource} />

export default PostImage