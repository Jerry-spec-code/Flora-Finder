# Flora-Finder

# Summary
A plant identification app built for LA Hacks 2023

# Inspiration
As we strolled around UCLA's breathtaking campus, we couldn't help but feel a sense of wonder at the vast array of plants and flora surrounding us. However, our curiosity quickly turned to frustration as we realized that we had absolutely no idea what we were looking at! We scoured the internet for plant identification apps, but we found that they were either too complicated or simply didn't work. That's when we decided to take matters into our own hands and create Flora Finder - an app that makes identifying plants easy, fun, and accessible to everyone!

# What it does
Flora Finder is a plant identification app that uses an API to identify plants by analyzing user-uploaded photos. It provides users with the common name, scientific name, and other information about the plant. With Flora Finder, you can easily discover and learn about the plants and flora around you.

# How we built it
We built this app using React Native, Node, Express, and Expo. React Native was used to build the mobile app, while Node and Express were used to build the backend server that handles API requests. Expo was used for testing and deployment. By using these technologies, we were able to create a fast and reliable plant identification app that is accessible to users on both Android and iOS devices.

# Challenges we ran into
During the development process, we faced several challenges, such as integrating the API and ensuring that the app was user-friendly. However, we overcame these challenges with a willingness to learn and a LOT of debugging.

# Accomplishments that we're proud of
We are proud of what we have accomplished with Flora Finder. We have created a user-friendly and intuitive app that makes it easy for anyone to identify plants and learn about the flora around them. We have also been able to incorporate educational resources, such as photos and descriptions, to help users deepen their knowledge and appreciation of the botanical world.

# What we learned
Building Flora Finder taught us about the challenges and opportunities of developing mobile apps that rely on AI and machine learning. We gained experience with React Native and Express, and were reminded of the power of technology to connect people with the natural world.

# Built With
1. React/React-native
2. Node.js/Express.js
3. Expo.io

### Express Server Setup 

```sh
cd ./server
npm install
npm start
```

This will run the server on port 5000

### Frontend React Setup
```sh
cd ./client
npm install
npm start
```

Install the Expo Go app on your iOS or Android phone and connect to the same wireless network as your computer. On Android, use the Expo Go app to scan the QR code from your terminal to open your project. On iOS, use the built-in QR code scanner of the default iOS Camera app.

### Frontend Environment variables 

| Variable    | Description                                 |
| ----------- | ------------------------------------------- |
| NODE_ENV    | `development`                               |
| IP_ADDRESS  | your local IP address                       |

Note: Frontend Environment variables can be supplied via a `.env` file in the client directory. See  `./client/example.env` for an example

### Backend Environment variables 

| Variable    | Description                                 |
| ----------- | ------------------------------------------- |
| API_KEY     | your API key                                |

Note: Backend Environment variables can be supplied via a `.env` file in the server directory. See  `./server/example.env` for an example
