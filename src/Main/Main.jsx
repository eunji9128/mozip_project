import { useState } from "react"
import { Outlet, useNavigate } from "react-router"
import styled from "styled-components"
import { color } from "../style/colorVar.js";

const Main = () => {
    let [tabs, setTabs] = useState([true, false, false]);
    // 현재 컴포넌트에 따라 tab focus pseudo class style 적용하는 코드 입력
    // useMatch 사용 가능?
    const navigate = useNavigate();

    const handleNavigate = (e) => {
        e.preventDefault();
        navigate(`/home/${e.target.id}`);
    }

    return (
        <Container>
            <Header>
                <SmallLogo />
                <NavTabs>
                    <TabBtn id="" onClick={(e) => handleNavigate(e)}>홈</TabBtn>
                    <TabBtn id="recommend" onClick={(e) => handleNavigate(e)}>추천</TabBtn>
                    <TabBtn id="completed" onClick={(e) => handleNavigate(e)}>완료된 프로젝트</TabBtn>
                </NavTabs>
            </Header>
            <Outlet />
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    padding: 8px;
`

const Header = styled.div`
    width: 100%;
    position: sticky;
    top: 0;
    background: ${color.gray900};
`

const SmallLogo = styled.div`
    width: 40px;
    height: 40px;
    background-image: url(/mozip_logo_small.svg);
`

const NavTabs = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 32px;
    margin-bottom: 16px;
`

const TabBtn = styled.button`
    background: none;
    font-size: 18px;
    font-weight: bold;
    border: none;
    color: ${color.gray500};

    &:focus {
        text-decoration: underline;
        color: ${color.gray50};
    }
`

export default Main