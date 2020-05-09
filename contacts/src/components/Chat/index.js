import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import styles from './styles';
import { Widget } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

const Chat = ({ classes }) => {
  const handleNewUserMessage = (m) => {
    // todo send to user
  }
  return (
    <div>
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        // profileAvatar={avatar}
        title="Chat"
        subtitle=""
      />
    </div>
  );
}

export default compose(
  withStyles(styles, { withTheme: true }),
)(Chat);
