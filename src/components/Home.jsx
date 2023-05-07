import { useState } from "react"
import { Outlet } from "react-router"
import styled from "styled-components"

const Home = () => {
    let [tabs, setTabs] = useState([true, false, false]);
    // 현재 컴포넌트에 따라 tab focus pseudo class style 적용하는 코드 입력
    // useMatch 사용 가능?

    return (
        <Container>
            <Header>
                <SmallLogo />
                <NavTabs>
                    <TabBtn>홈</TabBtn>
                    <TabBtn>추천</TabBtn>
                    <TabBtn>완료된 프로젝트</TabBtn>
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
    background: #000000;
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
    margin-bottom: 32px;
`

const TabBtn = styled.button`
    background: none;
    font-size: 18px;
    font-weight: bold;
    border: none;
    color: #ffffff;

    &:focus {
        text-decoration: underline;
    }
`

export default Home