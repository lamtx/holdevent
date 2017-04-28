import { PropTypes } from 'react';
import { Navigator } from 'react-native';
import BaseComponent from '../component/BaseComponent';

export default class BaseContainer extends BaseComponent {

  static propTypes = {
    navigator: PropTypes.instanceOf(Navigator).isRequired,
  };

  constructor(props) {
    super(props);
  }

  /**
   * @override
   */
  componentDidMount() {
    super.componentDidMount();
  }

  /**
   * @override
   */
  componentDidUpdate() {
    super.componentDidUpdate();
  }

  /**
   * @override
   */
  componentWillUnmount() {
    super.componentWillUnmount();
  }

  /**
   * @param {NavigationEvent} event
   */
  navigatorWillFocus(event) {
  }

  /**
   * @param {NavigationEvent} event
   */
  navigatorDidFocus(event) {
  }

  /**
   * @return {Navigator}
   */
  get navigator() {
    return this.props.navigator;
  }
}
