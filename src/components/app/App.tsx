import React, { Component } from 'react';
import styled from 'styled-components';
import GlobalStyles from '../appearance/GlobalStyles';
import Menu from '../menu/Menu';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AppViewModel } from './AppViewModel';

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
    // Properties

    private viewModel = new AppViewModel();

    // Public functions

    public render(): React.ReactNode {
        return (
            <Container>
                <GlobalStyles />
                <Router>
                    <Navbar>
                        <Logo src={this.viewModel.logo.image} alt={this.viewModel.logo.description} />
                        <Menu />
                    </Navbar>
                    {this.viewModel.routes.map((route, index) => (
                        <Route key={'Route' + index} exact path={route.path} component={route.component} />
                    ))}
                </Router>
            </Container>
        );
    }
}
