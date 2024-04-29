# plata

Super Duper Pay is a peer-to-peer payment app that uses NFC and QR codes for transactions.

## Figma Design
https://www.figma.com/file/N99UQ5fEPvgY2JRmFeytps/Untitled?type=design&node-id=7%3A1097&mode=design&t=LbqmfYtvpRCWoHxJ-1

## Features

- **Login/Sign Up**: Secure access to personal accounts.
- **NFC and QR Code Support**: Enables transactions via NFC and QR codes. {https://medium.com/@diliplohar204/nfc-integration-made-easy-exploring-react-native-nfc-manager-for-seamless-mobile-communication-65bf56f31398}
- **Transaction Amount Input**: Allows users to specify the amount to send.
- **Confirmation via Biometrics**: Ensures secure transactions with fingerprint or face scan confirmation.

## Additional Features

- **User Profile**: View and edit personal profile information.
- **Transaction History**: Keep track of past transactions.
- **Security Features**: Additional security measures like two-factor authentication, data encryption, and secure communication protocols.
- **Notifications**: Stay updated with successful transactions, received payments, or account changes.
- **Error Handling and Feedback**: User-friendly error messages and feedback for smooth app usage.
- **Help/Support**: Access help or customer support as needed.
- **Settings**: Customize app settings like notification preferences, security settings, etc.
- **Integration with Bank Accounts or Credit Cards**: Add or withdraw funds with ease.

## Future Improvements

- TODO: List any planned features or improvements here.

## Getting Started

- TODO: Instructions for setting up the project locally.

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

## License

- Information about the project's license.
