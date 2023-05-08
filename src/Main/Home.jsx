import styled from "styled-components";
import { color } from "../style/colorVar";
import { MemberCard, ProjectCard } from "./Cards";

const Home = () => {
    return (
        <Container>
            <HomeBanner />
            <StyledBtn>내 프로필 설정하기</StyledBtn>
            <Container margin={"16px 0 0 0"}>
                <h1>인기 프로젝트</h1>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </Container>
            <Container margin={"16px 0 0 0"}>
                <h1>새로운 프로젝트</h1>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </Container>
            <Container margin={"16px 0 0 0"}>
                <h1>새로운 멤버</h1>
                <MemberCard />
            </Container>
        </Container>
    )
};

const Container = styled.div`
    width: 100%;
    padding: 16px;
    margin: ${props => props.margin || 0};
`

const HomeBanner = styled.div`
    width: 360px;
    height: 180px;
    margin: auto;
    background-image: url(/home_banner.svg);
`

const StyledBtn = styled.button`
    width: 100%;
    height: 52px;
    border: none;
    border-radius: 30px;
    background: ${color.mainColor};
    color: ${color.gray900};
    font-size: 18px;
    font-weight: bold;
`

export default Home