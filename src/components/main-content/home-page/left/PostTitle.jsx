import styled from "styled-components"

const Title = styled.p`
    color: #143774;
    font-size: 24px;
    font-weight: bold;
`

const PostTitle = ({ postTitle }) => {
    return (
        <Title>{postTitle}</Title>
    )
}

export default PostTitle