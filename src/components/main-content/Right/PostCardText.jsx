import styled from "styled-components";
import { Large } from "../../../responsiveDesign/MediaQueries";

const PostCardSpan = styled.p`
    color: #143774;
    font-size: 18px;
    width: 162px;

    ${Large({ fontSize: '20px', width: '100%' })}
`

const PostCardText = ({ postCardText }) => <PostCardSpan>{postCardText}</PostCardSpan>

export default PostCardText