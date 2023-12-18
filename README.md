# INST377-Final-Project
##  Miriam Luka, Mia Mesina, Ava Zhou

# Game Tracker
##  Developed by Miriam Luka, Mia Mesina, Ava Zhou

## The most convenient way to track, search, and find new games!
Our app, Game Tracker, allows users to search through libraries of paid and free games on any platform. Our app gives users access to STEAM reviews, sale status, accurate prices, and more! We believe gamers on any platform could benefit from our app because of its aesthetically pleasing design, ease of use, and practicality. 

## User Manual Link
    (UPDATE THIS BASED ON YOUR CODED SECTION)
## Paid Games Page
Upon first glance, the page offers users a few sorting options: Upper Price Limit, lower price limit, and sort by. Initially, the page is loaded with a table with the Top Five Games on Sale. The table will automatically reload to the sorted version after the user submits any of the sorting options above. Empty options will default to none. 

The Top Five Games on Sale table and the Sorted Table are designed in the same fashion with the main difference is the length. The Sorted Table has 15 game options rather than just 5. This length is not unchangable.

## Developer Manual 
REQUIRED SECTION [

* How to install your application and all dependencies
* How to run your application on a server
* How to run any tests you have written for your software
* The API for your server application - all GET, POST, PATCH, etc endpoints, and what they each do
* A clear set of expectations around known bugs and a road-map for * future development.

]

## Installation Guide
To install the application and all dependencies, follow these steps: 
1. Clone the repository to your local machine
2. Navigate to the project directory
3. Run the following command to install dependencies:

```
npm install
```

## Running the Application
1. To run the application on a server, run the following command:

```
npm start
```
2. Open your web browser and navigate to http://localhost:3000


## Software Testing
- Tests have not been created yet. Please check future development for more information. 



## API Endpoints
The server application has the following API endpoints:

### GET Endpoints

- `/`: Serves the home page of the application.
- `/games`: Fetches all games from the database in JSON format.

### POST Endpoints
- `/games`: Adda a new game to the database. The request body should contain `title`, `price`, and `date` properties. 



## API's Used: 
- [Supabase Database: A free and open source database.](https://supabase.com/docs/guides/database/overview)
- [CheapShark: A price comparison website for digital PC Games.](https://apidocs.cheapshark.com/)
- [FreeToGame: Returns the Best free-to-play games and free MMO games available on any platoform!](https://www.freetogame.com/api-doc)

## Known Bugs
- Paid Games Page: Results sometimes show missing values caused by the API's dataset. For future developments, consider API's with accurate values.


## Future Development
- **Add testing**: Add testing to make the code more robust.
- **Add sale notifications**: Add a notification service for games on sale.    
