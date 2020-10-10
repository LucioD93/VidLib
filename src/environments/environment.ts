// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyA_oRWZkL8xhbLhU7AgSWwoJbRVMKF96dY',
    authDomain: 'vidlib-back.firebaseapp.com',
    databaseURL: 'https://vidlib-back.firebaseio.com',
    projectId: 'vidlib-back',
    storageBucket: 'vidlib-back.appspot.com',
    messagingSenderId: '128764598637',
    appId: '1:128764598637:web:d58f330bb4f71523496264',
  },
  youtubeApiUrl: 'https://www.googleapis.com/youtube/v3/videos',
  youtubeApiKey: 'AIzaSyBkQQv4Hf4j84fTvFnvBKTHvzcmtRx7IeI'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
