# AD340-Assignment-TheDailyGrindTodoApp
![React Native](https://github.com/Angel43v3r/AD340-Assignment-TheDailyGrindTodoApp/blob/main/RESOURCES/reactnativeicon.png)
## Assignment 7 - The Daily Grind Todo App
### AD340 - Mobile Application Development
### North Seattle College (Spring 2026)
### Date: May 3, 2026


## Table Of Contents
1. [Objective](#objective)
2. [How to Use](#how-to-use)
3. [Contributing](#contributing)
4. [License](#license)


## Objective
Build a mobile application that manages a list of tasks using React’s useState hook and basic React Native components.


## How to Use
### Prerequisites
Make sure you have the following installed:
- **Visual Studio Code (VS Code)**
 - You can use any editor, VSC is recommended for this project. You can download from [VS Code official website](https://code.visualstudio.com/).
    
- **Node.js**
 - This project uses **Node.js 20 (LTS line)** to run the local development server and manage dependencies. You can download from [Node.js official website](https://nodejs.org/en/).

- **Node Package Manager (npm)**: Version 11.6.2 or higher (comes bundled with Node.js)
 - This project use npm to manage the libraries for the project, this comes pre-bundled with Node.js.

- **React Native CLI**
 - This project uses the **React Native CLI** to build and run the app native on Android and iOS devices.
 - It allows direct access to native modules and full control over the development environment.
 - You can run the project using `npx react-native` commands.
 - You might also have to install the required development dependency (optional):
```bash
npm install --save-dev @react-native-community/cli
npm install --save-dev @react-native/metro-config
```

- **Android Studio** or **Expo Go**
 - **Android Studio** is required to run the app on an Android emulator or a physical device.
 - It provides the Android SDK, emulator, and build tools needed for React Native development.
 - You can download from the [Android Studio official website](https://developer.android.com/studio).
 - **Expo Go** is a mobile app that allows you to quickly preview and test React Native apps on your physical device.
 - It is useful for rapid development without needing a full Android or iOS build setup.
 - You can download from the [Expo Go official website](https://expo.dev/go).
 - The following step is **only needed if you are creating a new React Native project using Expo Go**.

```bash
npx create-expo-app@latest --template
```

 *Note: To check version installed in your terminal or bash:*
 ```
 node -v
 npm -v
 npx -v
 ```

### Installation & Environment Setup
1. Go to your terminal or bash, navigate to the folder you want to save the project:

```
cd <Folder_Name>
```
2. Clone the Repository
In the folder you want to save your project in, run:

```
git clone git@github.com:Angel43v3r/AD340-Assignment-TheDailyGrindTodoApp.git
```

3. Navigate to the app folder:

```
cd AD340-Assignment-TheDailyGrindTodoApp/TheDailyGrindTodoApp
```

4. Install dependencies listed in package.json
```
npm install
```

5. Open the project in your preferred code editor such as VS Code.

6. Start the development server:
```bash
npx expo start
```

- To use **Expo Go:** Scan QR code with Expo Go app on your phone
- To use **Android Studio:** Open Android Studio, then open the project folder (Make sure Android studio is installed). Press `a -> Android emulator` in your bash or terminal.
 - To use **iOS simulator (Mac Only):** Press i -> iOS simulator (Mac only).


## Contributing
Developed By: **Jovy Ann Nelson**

Instructor: **BC Ko**

Course: **AD340 - Mobile Application Development**

College: **North Seattle College**

Term: **Spring 2026**

Date: **April 27, 2026** to **May 3, 2026**


## License

This project is licensed under the MIT License. Please refer to the [LICENSE](https://github.com/Angel43v3r/AD340-Assignment-TheDailyGrindTodoApp/blob/main/LICENSE) for more details.