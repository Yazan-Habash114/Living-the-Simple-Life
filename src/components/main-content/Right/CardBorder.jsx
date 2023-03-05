import styled from "styled-components"
import Card from "./Card"

const Border = styled.div`
    border: 20px solid #EBEBEB;
    margin-bottom: 45px;
`

const CardBorder = () => {
    return (
        <Border>
            <Card cardObj={{
                title: 'About me',
                img: 'about-me.jpg',
                text: "I find life better, and I'm happier, when things are nice and simple."
            }} />
        </Border>
    )
}

export default CardBorder