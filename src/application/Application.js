import React, {Component} from 'react';
import {
  View,
  StatusBar,
  Navigator,
  Platform,
  BackAndroid,
} from 'react-native';


/**
 * Created by HieuVP on 11/4/16.
 */
const ROUTES = {

};

export default class Application extends Component {

  constructor(props) {
    super(props);
    this.state = {
      signedIn: undefined
    }
  }

  async componentWillMount() {
    this.registerBackEvent();
    this.setState({
      signedIn: await userService.isSignedIn()
    })
  }

  componentDidMount() {
    this.setupGoogleSignIn();
  }

  componentWillUnmount() {
    this.unregisterBackEvent();
  }

  get navigator() {
    return this.state.navigator;
  }

  onBack = () => {
    if (this.navigator.state.routeStack.length > 1) {
      this.navigator.pop();
      return true;
    }
    return false;
  };

  registerBackEvent() {
    if (Platform.OS === 'android') {
      BackAndroid.addEventListener('hardwareBackPress', this.onBack);
    }
  }

  unregisterBackEvent() {
    if (Platform.OS === 'android') {
      BackAndroid.removeEventListener('hardwareBackPress', this.onBack);
    }
  }

  /**
   * @param {Route} route
   * @return {SceneConfigs}
   */
  configureScene = (route) => {
    switch (route.title) {
      default:
        return Navigator.SceneConfigs.PushFromRight
    }
  };

  /**
   * @param {Route} route
   * @param {Navigator} navigator
   * @return {React.ReactElement}
   */
  renderScene = (route, navigator) => {
    const Scene = ROUTES[route.title];
    if (!Scene) {
      throw new Error(route.title + " not found");
    }
    return (
      <View style={Style.container}>
        <StatusBar barStyle='default' />
        <Scene {...route} navigator={navigator} />
      </View>
    )
  };

  render() {
    if (this.state.signedIn === undefined) return null;
    let initialRoute = this.state.signedIn ?
    {title: HomeTab.TAG_NAME} : {title: Welcome.TAG_NAME};
    return (
      <View style={Style.container}>
        <Navigator
          ref={x => !this.state.navigator && this.setState({navigator: x})}
          initialRoute={initialRoute}
          configureScene={this.configureScene}
          renderScene={this.renderScene}
        />
        <PopupView navigator={this.state.navigator} />
      </View>
    )
  }
}