import styled from "styled-components"

const Article = styled.article`
    margin: 2rem 0;
    color: #707070;
    font-size: 18px;
`

const PostArticle = ({ postArticle }) => {
    return (
        <Article>{postArticle}</Article>
    )
}

export default PostArticle