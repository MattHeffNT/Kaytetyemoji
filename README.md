
# KaytejEmoji


This is an Ionic(v6)/React/TypeScript based recreation of the [IndigEmoji](https://github.com/Indigemoji-Australia/indigemoji-app) app. 


## Install

You will need Android Studio (including all the respective Java libraries, sdks etc) to develop for Android. For IOS you will need X-code (and probably an apple device) with respective libraries for that. 

Ionic has its own <a href='https://ionicframework.com/docs/'>documentation </a> so Ionic install and usage instructions should be sourced there first. 

To install and run this source code you will need to install the Ionic CLI 

```
npm install -g @ionic/cli
```
 
After that run npm install as usual.

## Android instructions

Features such as the social sharing will not work from just a web server so you will need to install Android/IOS wrappers to be able to use this in your development environment.

To build for Android you will need to use the Ionic/Capacitor CLI and do a few steps:

```
ionic capacitor add ios 
```

(from the documentation: with each meaningful change, ionic apps must be built into web assets before change can appear on android simulators/devices)

```
ionic capacitor copy ios 
```

Then if you have added any new Android native plugins etc you will need to run:

```
npx cap sync
```

To serve your app (ios) onto the simulator or device with live reload run:

```
ionic capacitor run ios -l --external
```

The steps are similar for IOS <a href = "https://ionicframework.com/docs/developing/ios"> IOS Documentation </a>


- Android and IOS branches to be pushed to respective stores

## notes for audio (from IndigEmoji src)

Files kept here to be imported into all platforms. These files are not referenced in the codebase.
All sound filenames must be in lowercase with no spaces.

Sound files must be in the following places:
Android: Save your sound clip files under the directory android/app/src/main/res/raw. Note that files in this directory must be lowercase and underscored (e.g. my_file_name.mp3) and that subdirectories are not supported by Android.
iOS: Open Xcode and add your sound files to the project (Right-click the project and select Add Files to [PROJECTNAME])

We may want to make an automation tool for doing both of the above at some point.
