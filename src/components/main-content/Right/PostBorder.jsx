import styled from "styled-components"
import CardTitle from "./CardTitle"
import PostCard from "./PostCard"
import { posts } from "../../../virtual_DB/posts"


const Border = styled.div`
    border: 20px solid #EBEBEB;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 42px 45px;
`

const PostBorder = () => {
    return (
        <Border>
            <CardTitle cardTitle={"Recent Posts"} />
            {
                posts.map(post => <PostCard postCardObj={post} />)
            }
        </Border>
    )
}

export default PostBorder