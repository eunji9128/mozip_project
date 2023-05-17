import styled from "styled-components"
import { color } from "../style/colorVar"
import { useEffect } from "react";
import React from "react";
import { useState } from "react";
import { colorData } from "./colorData";

const Test1 = () => {
    let [step, setStep] = useState(0);
    
    let grid = new Array(colorData[step].row*colorData[step].column).fill(0);
    
    useEffect(() => {
        if (step !== 0) {
            console.log('debug1: ', colorData[step-1].pickId, colorData[step].mainColor);
            for (let i=0; i<(colorData[step-1].row * colorData[step-1].column); i++) {
                document.getElementsByClassName('colorGrid')[i].style.backgroundColor = colorData[step].mainColor;
            }
        }
        document.getElementById(colorData[step].pickId.toString()).style.backgroundColor = colorData[step].pickColor;
        console.log('debug2: ', colorData[step].pickId, colorData[step].pickColor);
    },[step])

    // useEffect(() => {
    //     setStep(step);
    // }, [])

    const handleTestClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (parseInt(e.target.id) === colorData[step].pickId) {
            if (step >= colorData.length-1) {
                console.log('done: ', step);
                return
            }
            let copy = step;
            copy = copy + 1;
            setStep(copy);
        }
        console.log(step);
    }

    return (
        <Container>
            <Header>
                <h1>header</h1>
            </Header>
            <ProgressBar>
                <h1>progress bar</h1>
            </ProgressBar>
            <TestContents>
                <ColorGrid row={colorData[step].row} column={colorData[step].column} color={colorData[step].mainColor}>
                    {
                        grid.map((data, i) => {return <div key={i} id={i} className="colorGrid" onClick={(e) => handleTestClick(e)}/>})
                    }
                </ColorGrid>
            </TestContents>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
`

const Header = styled.div`
    width: 100%;
`

const ProgressBar = styled.div`

`

const TestContents = styled.div`
    width: 100%;

`

const ColorGrid = styled.div`
    width: 328px;
    height: 328px;
    display: grid;
    grid-template-columns: repeat(${props => props.row || 2}, 1fr);
    grid-template-rows: repeat(${props => props.column || 2}, 1fr);
    background-color: ${color.gray700};
    border-radius: 10px;
    padding: 8px;

    div {
        background-color: ${props => props.color || '#ffffff'};
        border-radius: 10px;
        margin: 6px;
    }
`

export default Test1