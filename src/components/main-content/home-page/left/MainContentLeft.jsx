import { useState, useEffect } from 'react'
import styled from 'styled-components'
import MainPost from './MainPost'
import Post from './Post'
import Separator from './Separator'
import { posts } from '../../../../virtual_DB/posts'

const Container = styled.div``

const MainContentLeft = () => {

    let [path, setPath] = useState("/")

    useEffect(() => setPath(window.location.pathname), [])

    return (
        <Container>
            {
                path === '/' ?
                    <>
                        <MainPost />
                        <Separator />
                    </> : null
            }
            {
                path === '/' ?
                    posts.map((postItem, index) => index > 0 ? <Post postInfo={postItem} /> : null) :
                    posts.map(postItem => <Post postInfo={postItem} />)
            }
        </Container >
    )
}

export default MainContentLeft