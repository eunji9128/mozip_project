import styled from "styled-components";
import { color } from "../style/colorVar";

const Navbar = () => {
    const handleClick = () => {
        // navagation 기능 및 button activated 스타일 적용 코드
    }

    return (
        <Container>
            <IconGroup>
                <Icon>
                    <span class="material-icons">home</span>
                    <p>홈</p>
                </Icon>
                <Icon>
                    <span class="material-icons">sms</span>
                    <p>채팅</p>
                </Icon>
                <Icon>
                    <span class="material-icons">wb_sunny</span>
                    <p>성향</p>
                </Icon>
                <Icon>
                    <span class="material-icons">person_outline</span>
                    <p>마이페이지</p>
                </Icon>
            </IconGroup>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 60px;
    background: ${color.gray800};
    border-radius: 15px 15px 0 0;
    position: fixed;
    left: 0;
    bottom: 0;
`

const IconGroup = styled.div`
    padding: 8px 0;
    display: flex;
`

const Icon = styled.div`
    margin: auto;
    text-align: center;
    color: ${color.gray500};
`


export default Navbar