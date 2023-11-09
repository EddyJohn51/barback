Barback
======

What is Barback?
------
Barback is a React Native application that fetches cocktail recipes from The Cocktail DB API. It supports text search to find recipes in full.
I had originally planned to implement a barcode scanner to find recipes (using UPCItemDB's API), however I cannot find a great way to get the _type_** of spirit
from the UPC code since the Cocktail DB doesn't search by brand name. In the future, I hope to figure out a way to make the barcode scanner work. For now, if you scan the
barcode of a project, it will just display information available from the UPC API.

### Technologies Used
#### APIs
* [The Cocktail DB API](https://www.thecocktaildb.com/api.php)
* [UPCItemDB API](https://devs.upcitemdb.com/)

#### Languages and Tools
* React / React Native
* Expo / Expo Router
* Axios

To Install and Use
------
1. Download / fork and clone into this GitHub repository.
2. Run `npm install` to install dependencies (If `npm` is not recognized, make sure you have Node.js installed).
3. While inside of the project directory, run `npx expo start` to start the Expo server.
4. Open the application
    * Web - Open the link given after starting the Expo server
    * IOS/Android
        1. Install the Expo Go app from the Google Play / App Store.
        2. Make sure your mobile device is connected to the same network that your server is running on
        3. Scan the QR Code provided after running the Expo server to access the project.

Usage
------
To search for cocktail recipes, enter an ingredient into the search bar at the top of the app. *NOTE* You cannot use brand-names in the search bar (Instead of seraching for
"Tito's", search for Vodka). Then, select the recipe you want to make!

The barcode scanner is not fully implemented, but if you scan an item, it will just display information about that project. It will *NOT* fetch cocktail information.