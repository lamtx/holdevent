import { Component } from 'react';
import { Alert } from 'react-native';

/**
 * Created by HieuVP on 11/4/16.
 */
export default class BaseComponent extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
  }

  /**
   * @see {module:action.actions}
   * @return
   */
  get actions() {
    return this.props.actions;
  }

  /**
   * @param {string} message
   * @param {function} callback
   */
  showInformationDialog = (message, callback) => {
    Alert.alert(message, null, [
      {
        text: 'OK', onPress: callback, style: 'default'
      },
    ])
  };

}
