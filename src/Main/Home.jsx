import styled from "styled-components";
import { color } from "../style/colorVar";

const Home = () => {
    return (
        <Container>
            <HomeBanner />
            <StyledBtn>내 프로필 설정하기</StyledBtn>
        </Container>
    )
};

const Container = styled.div`
    width: 100%;
`

const HomeBanner = styled.div`
    width: 360px;
    height: 180px;
    margin: auto;
    background-image: url(/home_banner.svg);
`

const StyledBtn = styled.button`
    width: 328px;
    height: 52px;
    margin: auto;
    border: none;
    border-radius: 30px;
    background: ${color.mainColor};
    color: ${color.gray900};
    font-size: 18px;
    font-weight: bold;
`

export default Home