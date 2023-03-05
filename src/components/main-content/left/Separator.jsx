import styled from "styled-components"
import { Small } from "../../../responsiveDesign/MediaQueries"

const SepLine = styled.hr`
    margin-top: 2rem;
    border: 1px solid #707070;
    width: 714px;

    ${Small({ width: "100%" })}
`

const Separator = () => <SepLine />

export default Separator