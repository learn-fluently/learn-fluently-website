import React, { Component } from 'react';
import styled from 'styled-components';
import GlobalStyles from './appearance/GlobalStyles';
import LogoImage from './../res/images/logo.png';
import Menu from './menu/Menu';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { About } from './pages/About';
import { HowItWorks } from './pages/HowItWorks';
import { Routes } from './Routes';
import { PrivacyPolicy } from './pages/PrivacyPolicy';

const Container = styled.div`
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    background: white;
    margin: 50px auto 0;
    display: flex;
    flex: 1;
    position: relative;
    justify-content: flex-start;
    flex-direction: column;
    max-width: 1250px;

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

const Navbar = styled.div`
    display: flex;
    margin: 40px;
    justify-content: space-between;
    align-items: center;
    height: 91px;
`;

const Logo = styled.img`
    width: 91px;
    height: 91px;
`;

export class App extends Component {
    // Public functions

    public render(): React.ReactNode {
        return (
            <Container>
                <GlobalStyles />
                <Router>
                    <Navbar>
                        <Logo src={LogoImage} alt={'Learn Fluently'} />
                        <Menu />
                    </Navbar>
                    <Route exact path={Routes.about} component={About} />
                    <Route exact path={Routes.howItWorks} component={HowItWorks} />
                    <Route exact path={Routes.privacyPolicy} component={PrivacyPolicy} />
                </Router>
            </Container>
        );
    }
}
