import React, { Component } from 'react';
import styled from 'styled-components';
import { MenuViewModel } from './MenuViewModel';
import { Colors } from '../appearance/Colors';
import { Link, withRouter } from 'react-router-dom';

const Container = styled.ul`
    display: flex;
    align-items: flex-start;
    a {
        text-decoration: none;
    }
`;

const Item = styled.li<{ isCurrent: boolean }>`
    display: flex;
    margin: 0;
    padding: 10px 20px 10px 20px;
    text-transform: uppercase;
    border-radius: 7px;
    font-weight: bold;
    font-size: 13px;
    background-color: ${props => (props.isCurrent ? Colors.menuSelectedBackgroundColor : 'none')};
    cursor: pointer;
    transition: background-color 300ms ease-out;
    color: ${Colors.menuTextColor};
`;

class Menu extends Component<any> {
    // Properties

    private readonly viewModel = new MenuViewModel();

    // Public functions

    public render(): React.ReactNode {
        return (
            <Container>
                {this.viewModel.itemViewModels.map((item, index) => (
                    <Link to={item.link}>
                        <Item key={'MenuItem' + index} isCurrent={window.location.pathname === item.link}>
                            {item.title}
                        </Item>
                    </Link>
                ))}
            </Container>
        );
    }
}

export default withRouter(Menu);
