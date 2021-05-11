
### Installation

Open a terminal. Go to the root folder of the project. Install all the project dependencies:

    npm i

Go to /ios folder and install iOS dependiencies:

    pod install

NOTE: This project was developed and tested with an iPhone 11 Simulator (version 14.4). So it's recommended to test the app in this simulator.

### Run the project

Open two terminals.
In the first terminal, go to the root folder of the project and run:

    npm start

This command will compile the JavaScript Bundler of the project.

When compilation is finished, go to the second terminal and execute:

    npm run ios

This will automatically open an iOS Simulator and you should be able to see the app running.

### Features

* **Welcome Screen**.
* **Register and Log In Screens**

  These screens have some forms that allow the user to enter some credentials.
    
* **Home Screen** 

  This screen contains a Tab Navigation (Home, Search, New Design, Messages and Profile) with icons that allow the user to navigate through the app.
  When the screen is completely loaded, two main sections are displayed: *What's new today* and *Browse all*. First section allow the user to scroll left so he can see the latest designs available. The second section is a list of a variety of designs. In this screen, you can press on an image and a new Display Screen will show up.



