import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './appearance/GlobalStyles';

const Container = styled.div`
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    background: white;
    margin: 50px 50px 0 50px;
    display: flex;
    flex: 1;
    min-height: 100%;

    @media only screen and (max-width: 500px) {
        margin: 30px 30px 0 30px;
    }

    @media only screen and (max-width: 400px) {
        margin: 20px 20px 0 20px;
    }

    @media only screen and (max-width: 320px) {
        margin: 10px 10px 0 10px;
    }
`;

const App: React.FC = (): JSX.Element => {
    return (
        <Container>
            <GlobalStyles />
        </Container>
    );
};

export default App;
