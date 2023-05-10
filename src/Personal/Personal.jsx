import styled from "styled-components";
import Navbar from "../Main/Navbar";
import { color } from "../style/colorVar";

const Personal = () => {
    return (
        <Container>
            <Header />
            <Title>
                <p>팀원으로서 나는<br />어떤 사람일까?</p>
            </Title>
            <BadgeGroup>
                <Badge>모두</Badge>
                <Badge>공통</Badge>
                <Badge>디자이너</Badge>
                <Badge>개발자</Badge>
                <Badge>기획자</Badge>
            </BadgeGroup>
            <Navbar />
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    padding: 16px;
`

const Header = styled.div`
    width: 100%;
    height: 80px;
`

const Title = styled.div`
    width: 100%;
    font-size: 25px;
    text-align: left;
`

const BadgeGroup = styled.div`
    height: ${props => props.height || "20%"};
    display: flex;
    flex-direction: row;
    font-size: ${props => props.fontSize || "10px"};
    margin: auto;
    padding: ${props => props.padding || 0};
    flex-wrap: wrap;
`

const Badge = styled.div`
    padding: 4px 10px;
    margin: 0 4px 4px 0;
    background: ${color.gray700};
    border-radius: 15px;
    color: ${color.gray50};
    text-align: center;
`

export default Personal