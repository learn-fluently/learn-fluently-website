import React, { Component } from 'react';
import styled from 'styled-components';
import MockupsImage from './../../res/images/mockups.png';
import { Colors } from '../appearance/Colors';
import DownloadAppStore from './../../res/images/download-app-store.svg';

const DownloadLink = 'https://learnfluently.com';

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

const MokcupsContainer = styled.div``;

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
                <Content>
                    <Title>Learn Fluently</Title>
                    <Description>
                        Want to be fluent? Looking for a way to practice speaking? <br /> This app could help you.
                        <br />
                        By using this app, you can improve your English and any other languages skills.
                    </Description>
                    <Description>
                        Learn Fluently is an app for learning English or any other languages.
                        <br /> This app is an open source software, so not only is it free to use, but you can also help
                        make it better.
                    </Description>
                    <DownloadButton href={DownloadLink}>
                        <img src={DownloadAppStore} alt={'Download learn fluently on app store'} />
                    </DownloadButton>
                </Content>
                <MokcupsContainer>
                    <Mockups width={716} height={911} src={MockupsImage} alt={'Learn Fluently iPhone'} />
                </MokcupsContainer>
            </Container>
        );
    }
}
