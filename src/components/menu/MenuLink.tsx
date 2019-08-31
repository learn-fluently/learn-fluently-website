import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class MenuLink extends Component<{ to: string }> {
    // Public functions

    public render(): React.ReactNode {
        return this.props.to.startsWith('http') ? (
            <a href={this.props.to}>{this.props.children}</a>
        ) : (
            <Link to={this.props.to}>{this.props.children}</Link>
        );
    }
}
