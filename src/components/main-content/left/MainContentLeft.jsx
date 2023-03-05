import styled from 'styled-components'
import MainPost from './MainPost'
import Post from './Post'
import Separator from './Separator'
import { posts } from '../../../virtual_DB/posts'

const Container = styled.div``

const MainContentLeft = () => {
    return (
        <Container>
            <MainPost />
            <Separator />
            {
                posts.map(postItem => <Post postInfo={postItem} />)
            }
        </Container>
    )
}

export default MainContentLeft