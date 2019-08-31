import React, { Component } from 'react';
import styled from 'styled-components';
import { MenuViewModel } from './MenuViewModel';
import { Colors } from '../../appearance/Colors';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { MenuLink } from './MenuLink';

const Container = styled.ul`
    display: flex;
    align-items: flex-start;
    padding: 0;
    margin: 0;
    a {
        text-decoration: none;
    }
    @media only screen and (max-width: 666px) {
        flex-direction: column;
        align-items: center;
        > a {
            margin: 2px 0 2px 0;
        }
    }
`;

const Item = styled.li<{ isCurrent: boolean }>`
    display: flex;
    padding: 10px 17px 10px 17px;
    text-transform: uppercase;
    border-radius: 7px;
    font-weight: bold;
    font-size: 13px;
    background-color: ${props => (props.isCurrent ? Colors.menuSelectedBackgroundColor : 'none')};
    cursor: pointer;
    transition: background-color 300ms ease-out;
    color: ${Colors.menuTextColor};
`;

class Menu extends Component<RouteComponentProps<{}>> {
    // Properties

    private readonly viewModel = new MenuViewModel();

    // Public functions

    public render(): React.ReactNode {
        return (
            <Container>
                {this.viewModel.itemViewModels.map((item, index) => (
                    <MenuLink key={'MenuItem' + index} to={item.link}>
                        <Item isCurrent={window.location.pathname === item.link}>{item.title}</Item>
                    </MenuLink>
                ))}
            </Container>
        );
    }
}

export default withRouter(Menu);
