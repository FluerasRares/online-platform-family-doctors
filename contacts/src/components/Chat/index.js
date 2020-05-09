import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import styles from './styles';
import { Widget } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

const Chat = ({ classes }) => {
  // const handleNewUserMessage = (m) => {
  //   // todo send to user
  // }
  return (
    <div>
      <div id="chatlioWidgetPlaceholder" style={{margin: 'auto', height: 400, width: 400 }}></div>      
      {/* <Widget style={{ height: 100 }}
        handleNewUserMessage={handleNewUserMessage}
        // profileAvatar={avatar}
        title="Chat"
        subtitle=""
      /> */}
    </div>
  );
}

export default compose(
  // withStyles(styles, { withTheme: true }),
)(Chat);
