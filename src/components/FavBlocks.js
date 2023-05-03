import styled from "styled-components";

const FavBlocks = () => {
    return (
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
                    <FlexBlock width={"180px"} height={"94px"} bgColor={"#737373"} margin={"0 16px 16px 0"}>
                        <Content>
                            TRAVEL
                        </Content>
                    </FlexBlock>
                </Block>
                <Block>
                    <FlexBlock width={"180px"} height={"290px"} bgColor={"#737373"} margin={"0 16px 16px 0"}>
                        <Content>
                            UX<br />RESEARCH
                        </Content>
                    </FlexBlock>
                </Block>
            </FlexBlock>
            <FlexBlock>
                {/* <FlexBlock width={"100px"} height={"180px"} bgColor={"#8e8e8e"} margin={"0 16px 16px 0"}>
                    <Content>
                        PET
                    </Content>
                </FlexBlock> */}
                <FlexBlock width={"180px"} height={"180px"} bgColor={"url(/favSpBlock.svg)"} margin={"0 16px 16px 0"}>
                    <Content>
                        <br />PET
                    </Content>
                </FlexBlock>
                {/* <FlexBlock width={"164px"} height={"65px"} bgColor={"#737373"} margin={"0 16px 16px -20px"} style={{zIndex: 4}}></FlexBlock> */}
            </FlexBlock>
        </Container>
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
    width: 100vw;
    padding: 16px;
    text-align: left;
    margin-top: 34px;
`

const SubBlock = styled(FlexBlock)`
    width: 180px;
    height: 180px;
    background: url("/favSpBlock.svg");
    // position: absolute;


`

export default FavBlocks