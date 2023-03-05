import styled from "styled-components"
import ContinueReading from "./ContinueReading"
import DateAndComments from "./DateAndComments"
import PostArticle from "./PostArticle"
import PostImg from "./PostImg"
import PostTitle from "./PostTitle"

const Container = styled.div`
    width: 714px;
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
`

const PostLeft = styled.div``

const PostRight = styled.div`
    margin-left: 27px;
`

const Post = ({ postInfo }) => {
    return (
        <Container>
            <PostLeft>
                <PostImg imgName={postInfo.postImg} />
                <DateAndComments string={postInfo.dateAndComments} />
            </PostLeft>
            <PostRight>
                <PostTitle postTitle={postInfo.postTitle} />
                <PostArticle postArticle={postInfo.postArticle} />
                <ContinueReading />
            </PostRight>
        </Container>
    )
}

export default Post