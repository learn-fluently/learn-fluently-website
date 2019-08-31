import React, { Component } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../appearance/Colors';
import { AboutViewModel } from './AboutViewModel';

const Container = styled.div`
    display: flex;

    @media only screen and (min-width: 666px) {
        > div {
            flex: 0.5;
        }
    }
    @media only screen and (max-width: 666px) {
        flex-direction: column;
    }
`;

const Content = styled.div`
    padding: 3vw;
`;

const Title = styled.h1`
    margin: 0;
`;

const Description = styled.p`
    color: ${Colors.bodyTextColor};
`;

const DownloadButton = styled.a`
    cursor: pointer;
    display: block;
    margin-top: 4vw;
`;

const MockupsContainer = styled.div`
    padding-right: 2vw;
`;

const Mockups = styled.img`
    width: 100%;
    display: block;
    height: auto;
`;

export class About extends Component {
    // Properties

    private viewModel = new AboutViewModel();

    // Public functions

    public render(): React.ReactNode {
        return (
            <Container>
                <Content>
                    <Title>{this.viewModel.title}</Title>
                    {this.viewModel.descriptions.map((description, index) => (
                        <Description
                            key={'ContentDescription' + index}
                            dangerouslySetInnerHTML={{ __html: description }}
                        />
                    ))}
                    <DownloadButton href={this.viewModel.appStoreDownloadLink.link}>
                        <img
                            src={this.viewModel.appStoreDownloadLink.icon}
                            alt={this.viewModel.appStoreDownloadLink.description}
                        />
                    </DownloadButton>
                </Content>
                <MockupsContainer>
                    <Mockups src={this.viewModel.mockupImage.image} alt={this.viewModel.mockupImage.description} />
                </MockupsContainer>
            </Container>
        );
    }
}
