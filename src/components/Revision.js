import React from "react";
import styled from "styled-components";


const Revision = () => {
    return (
        <Wrapper>
            <h3>Revision Zone</h3>
            <p>Resources</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width:100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1em;
    font-size: 1.2em;
    
`;
export default Revision