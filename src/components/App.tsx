import React, { Component } from 'react';
import styled from 'styled-components';
import GlobalStyles from './appearance/GlobalStyles';
import LogoImage from './../res/images/logo.png';
import Menu from './menu/Menu';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { About } from './pages/about/About';
import { HowItWorks } from './pages/how-it-works/HowItWorks';
import { Routes } from './Routes';
import { PrivacyPolicy } from './pages/PrivacyPolicy';

const Container = styled.div`
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    background: white;
    margin: 4vw auto 0;
    display: flex;
    flex: 1;
    position: relative;
    justify-content: flex-start;
    flex-direction: column;
    max-width: 1250px;
`;

const Navbar = styled.div`
    display: flex;
    margin: 3vw;
    justify-content: space-between;
    align-items: center;
    min-height: 91px;
`;

const Logo = styled.img`
    width: 91px;
    height: 91px;
    margin: 0;
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
