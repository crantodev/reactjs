import React from 'react';
import { ListItem, ListItemContent, ListItemAction, Icon } from 'react-mdl';

export default class Gist extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { content } = this.props;
        return (
            <ListItem>
                <ListItemContent avatar="code">{content.description ? content.description : 'N/D'}</ListItemContent>
                <ListItemAction>
                    <a href={content.html_url} target="_blank"><Icon name="arrow_forward" /></a>
                </ListItemAction>
            </ListItem>
        );
    }
}
