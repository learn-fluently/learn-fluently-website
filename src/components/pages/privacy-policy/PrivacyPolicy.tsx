import React, { Component } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../appearance/Colors';
import { PrivacyPolicyViewModel } from './PrivacyPolicyViewModel';

const Container = styled.div`
    max-width: 1000px;
    padding: 2vw 4vw;
    color: ${Colors.bodyTextColor};
    text-align: left;
`;

export class PrivacyPolicy extends Component {
    // Properties

    private viewModel = new PrivacyPolicyViewModel();

    // Public functions

    public render(): React.ReactNode {
        return (
            <Container>
                <h2>{this.viewModel.title}</h2>
                {this.viewModel.privacyPolicy.map((description, index) => (
                    <p key={'PPDesc' + index} dangerouslySetInnerHTML={{ __html: description }} />
                ))}
            </Container>
        );
    }
}
