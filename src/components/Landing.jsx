import styled from "styled-components";

const Landing = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('가입되었습니다');
        // navigate 설정 코드 입력
    }

    return (
        <Contain>
            <LandingImg />
            <StyledBtn onClick={(e) => handleSubmit(e)}>시작하기</StyledBtn>
        </Contain>
    )
};

const Contain = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const LandingImg = styled.div`
    width: 280px;
    height: 588px;
    background: url(/landing1.svg);
    margin-top: 64px;
`

const StyledBtn = styled.button`
    width: 90%;
    height: 52px;
    background-color: #d4d4d4;
    border: none;
    border-radius: 10px;
    position: absolute;
    left:0;
    bottom: 0;
    margin: 16px;
    font-size: 16px;
    font-weight: bold;
`

export default Landing