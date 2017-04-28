/**
 * Created by HieuVP on 11/4/16.
 */

/**
 * @enum {number}
 */
const BuildType = {
  DEBUG: 0,
  RELEASE: 1,
};

/**
 * @type {BuildType}
 */
export const build = BuildType.RELEASE;

/**
 * @type {boolean}
 */
export const isLoggable = false;

/**
 * @type {boolean}
 */
export const isDebuggable = __DEV__ && build === BuildType.DEBUG;
//export const host = 'http://192.168.2.96:3000';
export const host = 'http://dev.nativetech.rmlbs.co';
export const path = '/api/v1/welcome_app/';
export const feedbackEmail = 'lam.codebox@gmail.vn';
export const appId = '544007664';
export const packageName = 'com.google.android.youtube';
export const maxAvatarSize = 300;
export const ratingLocalNotificationId = 'ratingLocalNotification';
export const showRatingInterval = 5 * 60 * 1000; // five minutes

export const firebase = {
  apiKey: "AIzaSyDbdcggdST8HNY4W97fDcJazMxCAPxE4U4",
  authDomain: "welcomeapp-146303.firebaseapp.com",
  databaseURL: "https://welcomeapp-146303.firebaseio.com",
  storageBucket: "welcomeapp-146303.appspot.com",
  messagingSenderId: "183283291854"
};

export const googleService = {
  projectNumber: '183283291854',
  webClientId:'183283291854-g46udtduikfmqnlvjb284ruoke87h2ea.apps.googleusercontent.com',
  iosClientId:'183283291854-27835jvlbeehna82hvpgqb4r383lijjh.apps.googleusercontent.com',
};
