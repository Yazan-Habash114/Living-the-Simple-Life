import styled from "styled-components";

const PostCardSpan = styled.p`
    color: #143774;
    font-size: 18px;
    width: 162px;
`

const PostCardText = ({ postCardText }) => <PostCardSpan>{postCardText}</PostCardSpan>

export default PostCardText