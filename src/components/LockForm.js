import { useState } from "react";
import styled from "styled-components";
import _ from "lodash";

function LockForm() {
    const [numbers, setNumbers] = useState([1999, 1, 1]);

    const handleNumberChange = _.throttle((index, value) => {
        setNumbers((prevNumbers) => {
            const newNumbers = [...prevNumbers];
            switch (index) {
                case 0:
                    newNumbers[index] = value;
                case 1:
                    newNumbers[index] = value % 12 + 1;
                    console.log(index, newNumbers[index]);
                case 2:
                    newNumbers[index] = value % 31 + 1;
            }
            return newNumbers;
        });
    }, 10000);

    const handleSubmit = (e) => {
        e.preventDefault();
        // 입력된 숫자 값 처리
        console.log(numbers.join(""));
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box>
                {numbers.map((number, index) => (
                    <StyledInput
                        type="number"
                        key={index}
                        value={number}
                        onChange={(e) => handleNumberChange(index, e.target.value)}
                    />
                ))}
            </Box>
            <StyledBtn type="submit">Submit</StyledBtn>
        </form>
    );
}

const Box = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 80px;
`

const StyledInput = styled.input`
    width: 78px;
    height: 54px;
    margin: 0 5px;
    text-align: center;
    background-color: #000000;
    color: #ffffff;
    border: solid 1px #ffffff;
    border-width: 1px 0;
    font-family: "yapari";
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

export default LockForm