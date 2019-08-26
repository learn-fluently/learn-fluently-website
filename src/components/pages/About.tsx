import React, { Component } from 'react';
import styled from 'styled-components';
import MockupsImage from './../../res/images/mockups.png';

const Container = styled.div`
    display: flex;
`;

const Description = styled.div`
`;

const Mockups = styled.img`
    width: 578px;
`;

export class About extends Component {
    // Public functions

    public render(): React.ReactNode {
        return (
            <Container>
                <Description></Description>
                <Mockups src={MockupsImage} alt={'Learn Fluently iPhone'} />
            </Container>
        );
    }
}
