import styled from "styled-components";

export const SignupName = () => {
    return (
        <Container>
            <h1>당신의 이름은 무엇인가요?</h1>
            <Content>모집은 당신이 궁금해요!</Content>
            <StyledInput placeholder={"이름 입력하기"}></StyledInput>
            <StyledBtn>다음</StyledBtn>
        </Container>
    )
};

export const SignupBirth = () => {
    return (
        <h1>Signup birth</h1>
    )
};

const Container = styled.div`
    width: 100vw;
    padding: 16px;
`

const Content = styled.p`
    color: #a3a3a3;
    margin-top: 12px;
`

const StyledInput = styled.input`
    width: 100%;
    margin-top: 86px;
    padding-left: 16px;
    height: 40px;
    background-color: #424242;
    border: 1px solid #8e8e8e;
    border-radius: 10px;
`

const StyledBtn = styled.button`
    width: 90%;
    height: 52px;
    background-color: #5b5b5b;
    border: none;
    border-radius: 10px;
    position: absolute;
    left:0;
    bottom: 0;
    margin: 16px;
    font-size: 16px;
    font-weight: bold;
`