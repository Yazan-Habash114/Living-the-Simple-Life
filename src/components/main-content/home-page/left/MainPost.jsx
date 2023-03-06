import styled from 'styled-components'
import ContinueReading from './ContinueReading'
import MainPostImg from '../../../../assets/images/work.jpg'
import DateAndComments from './DateAndComments'
import { Small } from '../../../../responsiveDesign/MediaQueries'

const Container = styled.section`
    width: 714px;

    ${Small({ width: '100%' })}
`

const Image = styled.img`
    width: 714px;

    ${Small({ width: '100%' })}
`

const MainPost = () => {
    return (
        <Container>
            <Image src={MainPostImg} />
            <DateAndComments string="July 23, 2019 | 3 comments" />
            <PostTitle>Finding simplicity in life</PostTitle>
            <PostContent />
            <ContinueReading />
        </Container>
    )
}

const PostTitle = styled.h3`
    color: #143774;
    font-size: 24px;
    letter-spacing: 4.8px;
    margin-bottom: 1rem;
`

const Explanation = styled.p`
    font-size: 18px;
    color: #707070;
    margin-bottom: 1rem;
`

const InlineText = styled.span`
    color: #1792D2;
    text-decoration: underline;
    cursor: pointer;
`

const PostContent = () => {
    return (
        <>
            <PostTitle />
            <Explanation>
                <strong>Life can get complicated really quickly</strong>, but it doesn't have to be!
                There are many ways to simplify your life, <InlineText>a few of which we've explored in the past</InlineText>
                . This week
                we're taking a bit of a approach though, in how you can find simplicity in the life you already
                living.
            </Explanation>
        </>
    )
}

export default MainPost