
### Installation

Go to the root folder of the project (/photo). 
Install all the project dependencies:

    npm i

Go to /ios folder and install iOS dependiencies:

    pod install

NOTE: This project was developed and tested with an iPhone 11 Simulator (version 14.4). So it's recommended to test the app in this simulator.

### Run the project

Open two terminals.
In the first terminal, go to the root folder of the project (/photo) and run:

    npm start

This command will compile the JavaScript Bundler of the project.

When compilation is finished, go to the second terminal and execute:

    npm run ios
    
This will automatically open an iOS Simulator and you should be able to see the app running.




