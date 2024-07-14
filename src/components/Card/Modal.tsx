import styled from "styled-components";
import { Box } from "../../utils";
import { Button } from "react-bootstrap";

type Foam = {
    name: string;
    density: string;
    size: string;
    image: string[];
    price: string;
    color: string;
    height: string;
};

const Modal = (onclose: Function, foam: Foam) => {
    return (
        <Bg>
            <Container>
                <Button onClick={ ()=>onclose() }></Button>
            </Container>
        </Bg>
    )
};

const Bg = styled(Box)`
    width: 100vw;
    height: 100vh; 
    background: rgba(0,0,0,0.5); 
    position: fixed;
    top: 0;
    left: 0; 
    z-index:100;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 10px 10px 5px lightblue;
`;

const Container = styled(Box)`
    width: 60vw;
    height: 75vh;
    background: black; 
    border-radius: 16px;
    box-shadow: 0px 0px 20px rgba(255,0,0,1);
    position: relative;
`;

export default Modal;