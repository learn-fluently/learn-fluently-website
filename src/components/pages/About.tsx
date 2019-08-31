import React, { Component } from 'react';
import styled from 'styled-components';
import MockupsImage from './../../res/images/mockups.png';

const Container = styled.div`
    display: flex;
`;

const Description = styled.div`
    flex: 0.5;
`;

const MokcupsContainer = styled.div`
    display: block;
    flex: 0.5;
`;

const Mockups = styled.img`
    width: 100%;
    display: block;
    height: auto;
`;

export class About extends Component {
    // Public functions

    public render(): React.ReactNode {
        return (
            <Container>
                <Description></Description>
                <MokcupsContainer>
                    <Mockups width={716} height={911} src={MockupsImage} alt={'Learn Fluently iPhone'} />
                </MokcupsContainer>
            </Container>
        );
    }
}
