import styled from "styled-components";

const FavBlocks = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    };

    return (
        <>
            <Container>
                <FlexBlock justifyContent={"start"}>
                    <Block>
                        <FlexBlock
                            width={"180px"}
                            height={"180px"}
                            bgColor={"#737373"}
                            margin={"0 16px 16px 0"}
                        >
                            <Content>
                                UX UI<br />DESIGN
                            </Content>
                        </FlexBlock>
                        <FlexBlock
                            width={"180px"}
                            height={"94px"}
                            bgColor={"#737373"}
                            margin={"0 16px 16px 0"}
                        >
                            <Content>
                                TRAVEL
                            </Content>
                        </FlexBlock>
                    </Block>
                    <Block>
                        <FlexBlock
                            width={"304px"}
                            height={"290px"}
                            bgColor={"#737373"}
                            margin={"0 16px 16px 0"}
                        >
                            <Content>
                                UX<br />RESEARCH
                            </Content>
                        </FlexBlock>
                    </Block>
                </FlexBlock>
                <FlexBlock>
                    <FlexBlock
                        width={"180px"}
                        height={"180px"}
                        bgColor={"url(/favSpBlock.svg)"}
                        margin={"0 16px 16px 0"}
                    >
                        <Content>
                            <br />PET
                        </Content>
                    </FlexBlock>
                    <FlexBlock
                        width={"164px"}
                        height={"65px"}
                        bgColor={"#737373"}
                        margin={"0 16px 130px -80px"}
                    >
                        <Content>
                            START-UP
                        </Content>
                    </FlexBlock>
                    <FlexBlock
                        width={"84px"}
                        height={"100px"}
                        bgColor={"#737373"}
                        margin={"0 16px -62px -100px"}
                    >
                        <Content>
                            BX
                        </Content>
                    </FlexBlock>
                    <FlexBlock
                        width={"206px"}
                        height={"182px"}
                        bgColor={"#737373"}
                        margin={"0 16px 16px 0"}
                    >
                        <Content>
                            FIGMA
                        </Content>
                    </FlexBlock>
                </FlexBlock>
            </Container>
            <FlexBlock width={"100vw"} alignItems={"center"}>
                <StyledBtn onClick={(e) => handleSubmit(e)}>선택완료</StyledBtn>
            </FlexBlock>
        </>
    )
};

const Block = styled.div`
    width: ${props => props.width || "100%"};
    height: ${props => props.height || "100%"};
    padding: ${props => props.padding || 0};
    margin: ${props => props.margin || 0};
    background: ${props => props.bgColor || ''};
    border-radius: 20px;
`

const FlexBlock = styled(Block)`
    display: flex;
    align-items: ${props => props.alignItems || "center"};
    justify-content: ${props => props.justifyContent || "start"};
`

const Content = styled.p`
    padding: 14px;
    color: #000000;
    font-size 20px;
    font-family: "yapari";
    font-weight: bold;
`

const Container = styled.div`
    width: 548px;
    padding: 16px;
    text-align: left;
    margin-top: 34px;
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

export default FavBlocks