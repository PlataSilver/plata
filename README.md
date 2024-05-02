# plata


## Minimum requirements
- react-native >= 0.63.0
- expo >= 41 (if you use Expo)
- typescript >= 4.1.0 (if you use TypeScript)

## Installation

Install the required packages in your React Native project:
npm
```npm install @react-navigation/native```

React Navigation is made up of some core utilities and those are then used by navigators to create the navigation structure in your app. Don't worry too much about this for now, it'll become clear soon enough! To frontload the installation work, let's also install and configure dependencies used by most navigators, then we can move forward with starting to write some code.

The libraries we will install now are react-native-screens and react-native-safe-area-context. If you already have these libraries installed and at the latest version, you are done here! Otherwise, read on.

## Installing dependencies into an Expo managed project
In your project directory, run:

```npx expo install react-native-screens react-native-safe-area-context```

This will install versions of these libraries that are compatible.

## Installing the native stack navigator library
The libraries we've installed so far are the building blocks and shared foundations for navigators, and each navigator in React Navigation lives in its own library. To use the native stack navigator, we need to install @react-navigation/native-stack :

npm
```npm install @react-navigation/native-stack```

💡 @react-navigation/native-stack depends on react-native-screens and the other libraries that we installed in Getting started. If you haven't installed those yet, head over to that page and follow the installation instructions.



https://expo.dev/artifacts/eas/9dR1jKMt7TXd8hHvckQ9wJ.apk