import PostCardText from './PostCardText'
import PostImage from "./PostImage"

const PostCard = ({ postCardObj }) => {
    return (
        <div>
            <PostImage imageSource={postCardObj.postImg} />
            <PostCardText postCardText={postCardObj.postTitle} />
        </div>
    )
}

export default PostCard