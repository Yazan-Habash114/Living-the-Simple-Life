import styled from 'styled-components'
import { Large } from '../../../responsiveDesign/MediaQueries'

const Image = styled.img`
    width: 150px;
    margin-top: 17px;
    margin-bottom: 10px;

    ${Large({ width: '100%', height: '275px', objectFit: 'cover' })}
`

const PostImage = ({ imageSource }) => <Image src={require(`../../../assets/images/${imageSource}`)} alt={imageSource} />

export default PostImage