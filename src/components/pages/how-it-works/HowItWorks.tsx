import React, { Component } from 'react';
import styled from 'styled-components';
import { Colors } from '../../appearance/Colors';
import { HowItWorksViewModel } from './HowItWorksViewModel';

const Container = styled.div`
    display: flex;
    flex: 1;
    margin: auto;
    max-width: 1100px;
    flex-direction: column;
    align-items: center;
    color: ${Colors.bodyTextColor};
    padding: 1.8vw;
    @media only screen and (max-width: 733px) {
        align-items: flex-start;
    }
`;

const Title = styled.h2`
    margin-top: 0;
    font-size: min(4vw, 18px);
    margin-bottom: 3vh;
    padding: 10px;
`;

const SectionsRowContainer = styled.div`
    display: flex;
    flex-direction: row;

    @media only screen and (max-width: 733px) {
        flex-direction: column;
    }
`;

const Section = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 180px;
    flex: 0.5;
    margin: 1.8vw;
    > img {
        position: absolute;
        margin-left: -40px;
    }
    > div {
        h5 {
            margin: 0 0 20px 0;
        }
        p {
            margin: 0;
        }
        display: flex;
        flex-direction: column;
        padding-left: 160px;
        padding-top: 30px;
        padding-bottom: 10px;
    }
`;

export class HowItWorks extends Component {
    // Properties

    private viewModel = new HowItWorksViewModel();

    // Public functions

    public render(): React.ReactNode {
        return (
            <Container>
                <Title>{this.viewModel.title}</Title>
                {this.viewModel.sections.map((sectionRow, index) => (
                    <SectionsRowContainer key={'SectionsRowContainer' + index}>
                        {sectionRow.map((section, index) => (
                            <Section key={'Section' + index}>
                                <img src={section.icon} alt={section.iconDescription} />
                                <div>
                                    <h5>{section.title}</h5>
                                    <p dangerouslySetInnerHTML={{ __html: section.description }} />
                                </div>
                            </Section>
                        ))}
                    </SectionsRowContainer>
                ))}
            </Container>
        );
    }
}
