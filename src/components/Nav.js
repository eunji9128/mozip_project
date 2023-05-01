import styled from "styled-components";

const Nav = () => {
    return (
        <Container>
            <span class="material-symbols-outlined">
                chevron_left
            </span>
        </Container>
    )
};

const Container = styled.div`
    width: 100vw;
    padding: 12px 8px;
    display: flex;
    justify-content: start;
`

export default Nav