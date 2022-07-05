# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to Run the project

- download the folder and go to the project directory
- make sure you have node installed in the machine and open terminnal in the poject location folder
- run ``` npm install ```
- create a process.env file and declare a variable with this name REACT_APP_GOOGLE_MAPS_API_KEY , and set your google.maps api key here. If you don't have google.maps api key then no need to do this step.
- run ``` npm start ```
- go to the localhost to see the project.

## Project Goal:

- Random selection of the restaurant within 3km of the user's current location.
- Provide a map view showing the location of the restaurant.
- Search for restaurant within 3km of the office.

## Project Description

This project utilizes the navigation functionality of the google map. It uses google map to locate the user's current location. After current location is retrieved, the user will be able to see the nearby restaurant locations on the map. The retrieved restaurant are also shown on the card view, left to the map view. The users can seach from the avaiilavble restaurant based on parameters passed. At any point of time the user can see all the nearby location map by clickings on the locate all restaurant buttons. The users can also select any random restaurant by clickings select random restaurant button.

## Project flow
![Project Overview](https://github.com/[DimaMirana]/[restaurant-finder]/blob/[main]/Project_Overview.PNG?raw=true)

## Technical Choices

| Name | Purpose | Reason |
| ------ | ------ | ------ |
| Antd | For making the UI | Easy to use |
| Foursquare | To fetch data from API | Populate data easily |
| Redux-toolkit | For managing state | Easy to keep track of the shared state of the application|
| Project Architecture | Observer Pattern | Only Update when it's necessary |
| react-google-maps| For loading maps and show marker on location | easy to use and load the map easily |

## Technical trade-offs

### Antd
- Pros: Easy to integrate with react
- Cons: Might be difficult to cutomize and if major versioning decapticates currrent structure that the project uses, then the UI might not chow properly.

### Foursquare

- Pros: Easy to fetch data and show on the UI.
- Cons: If the data send from API changes the sending data strucuture, then the application might not work properly. If this endpoint is depricated, then the application may not work.

### react-google-maps

- Pros: Easy to Integrate with react and show the map and the marker on location without any hassle.
- Cons: If the library changes it's parameter or not updated with recent updates made by google map, then the map view might not work as expected.

## Vulnerabilities

Need o be connected with internet to make sure the app is working properly. Also the application is heavily dependent on 3rd pary usage. So if there is any personal information implemented later, i.e. login system, save personal settings, then there might be a reason to be alerted about the user inforrmation getting exposed. And there need to be implemented approriate security protocol to protect the user's data in the app.

## Scalability

The current requirements are to search the restaurant within 3km radius of the current location, If the radius is increases and the data increases then there will be need to implementing pagination and filtering to fetch the data from the api and show properly.

## Monitoring and logging

To maintaining optimal application performance monitoring and logging is essential, to find the best API that fetch more information to display the data to the user and also to see if any of the 3rd party libraries are decapticated or found any better implementations in any other library. If any API or libraries are not available etc. So the application monitoring and logging is imporant.

## What could be done

- Testing: To see if each functionality are woring with different test case scenarios.
- Pagination: To fetch the data from API pagination shuld be done
- Select random/ search restaurant from database: The data that return from the current requirement are relatively small, the the random selection of the restaurant and searching are done on application state. If the number of data was lage then this functioality is better to be searching from the database.
- Implement recently viewed: To see the most recently viewed restaurant in a sssion, this sometimes helped to make decisions finally where to go.
