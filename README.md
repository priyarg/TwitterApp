# Twitter Screens

This is sample Twitter App with 3 screens :
Profile on click of thumbnail
Menu on click of home icon
Search on click of search icon

## Dependencies
- React Native
- NativeBase for UI Elements
- 

## Pre installations
- need Node, the React Native command line interface, Python2, a JDK, and Android Studio.
Open an Administrator Command Prompt (right click Command Prompt and select "Run as Administrator"), 
then run the following command:
choco install -y nodejs.install python2 jdk8

- npm install -g react-native-cli -> only one time on each system
- npm install -g yarn             -> only one time on each system     

react-native init ImadAppRNA
cd ImadAppRNA

#To run your app on Android:

- set environment variable ANDROID_HOME to C:\Users\TEST\AppData\Local\Android\sdk
- append "C:\Program Files (x86)\Android\android-sdk\platform-tools" to PATH so that build tools can find adb.exe

 On Android :
- Enable Debugging over USB: 

- enable the "Developer options" menu by going to Settings → About phone and then tapping the Build number row at the bottom seven times. You can then go back to Settings → Developer options to enable "USB debugging".

- Plug in your device via USB:
Check by typing which shows connected device
$ adb devices
List of devices attached
Run your app
$ react-native run-android








