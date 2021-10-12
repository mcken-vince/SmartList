
# Smart TODO List Project

This is a smart, auto-categorizing todo list app. The user simply has to add the name of the thing, and it gets put into the correct list.


## Screenshot

!["Demo"](https://github.com/mcken-vince/SmartList/blob/master/planning/SmartList-demo.gif)

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Create the `.env` file by using `.env.example` as a reference: `cp .env.example .env`
3. Update the `.env` file with your correct local information, you will need to create a local database, and set the DB_USER, DB_PASS, and DB_NAME variables to match your username, password, and database name.
4. Install dependencies using the `npm install` command.
5. Fix to binaries for sass: `npm rebuild node-sass`
6. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
7. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
9. You must login using one of the following usernames:
    - Moises
    - Ellie
    - Ancient Psychic Tandem War Elephant
10. Then, simply begin by entering in the item you want sorted into one of the following categories:
    - Movies
    - Foods
    - Books
    - Products
11. The wolfram API should automatically sort the item into the correct list. If the item is sorted into the wrong category, simply delete the item by clicking the trash icon. Then, specify which item you are searching for by clicking on one of four icons below the search bar.
    - You can toggle the search header by clicking on the name of the website on the top left corner.
12. When a sorted item is clicked, a modal will display with additional information and description about the item.
13. You can also choose to only view a single category by clicking on the name of the category and have the other sections toggled out from the view. Click on the category name to return back to the main view.


## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
- Express
- cookie-session
