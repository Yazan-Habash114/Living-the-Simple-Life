import styled from "styled-components"
import AboutMe from "../../../assets/images/about-me.jpg"
import { Small } from "../../../responsiveDesign/MediaQueries"

const Container = styled.div``

const Image = styled.img`
    width: 714px;
    height: 308px;
    object-fit: cover;
    margin-bottom: 2rem;

    ${Small({ width: '100%' })}
`

const Content = styled.div``

const Header = styled.h3`
    color: #143774;
    font-size: 24px;
    letter-spacing: 4.8px;
    margin-bottom: 1rem;
`

const Paragraph = styled.p`
    color: #707070;
    margin-bottom: 1rem;
    font-size: 18px;
`

const HeadingParagraph = styled.p`
    color: #1792D2;
    font-size: 21px;
    margin-bottom: 1rem;
    margin-top: 2rem;
    font-weight: bold;
`

const MainContentLeft = () => {
    return (
        <Container>
            <Image src={AboutMe} alt="Life image" />
            <Content>
                <Header>My name is John and living the simple life saved my life</Header>
                <Paragraph>
                    <strong>I used to be a pack rat</strong> I had so many things that I thought that I loved, but the truth was I couldn't even appreciate any of it
                    because there was too much.
                </Paragraph>
                <Paragraph>
                    Things were terrible. I had a job that I hated, a home that I didn't
                    want to live in, and I couldn't hold a relationship.
                </Paragraph>
                <HeadingParagraph>How I turned things around</HeadingParagraph>
                <Paragraph>
                    <strong>I was on the verge of a breakdown when I got rid of everything. </strong>I literally put
                    90% of my possessions in the
                    garbage, sold my place and moved into a smaller apartment, and I quit my job.
                </Paragraph>
                <Paragraph>
                    It wasn't easy at all, but everything around me was in such a bad place, I didn't know what else
                    to do. And it worked.
                </Paragraph>
                <HeadingParagraph>Now I live the simple life</HeadingParagraph>
                <Paragraph>
                    Now that I'm living a simple life, things are so much better.
                    I'm less stressed, enjoy life and work more, and I have more free time to enjoy.
                </Paragraph>
                <Paragraph>
                    With how much it turned my life around, <strong>I felt like I had no choice but to start sharing
                        how I
                        did it</strong>, and how
                    others can benefit from living a simple life as well, which is why I started this site!
                </Paragraph>
            </Content>
        </Container>
    )
}

export default MainContentLeft