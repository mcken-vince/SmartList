
# Smart TODO List Project

This is a smart, auto-categorizing todo list app. The user simply has to add the name of the thing, and it gets put into the correct list.


## Layout

!["Demo"](https://github.com/mcken-vince/SmartList/blob/master/planning/SmartList-demo.gif)

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.
5. You must login using one of the following usernames:
    - Moises
    - Ellie
    - Ancient Psychic Tandem War Elephant
6. Then, simply begin by entering in the item you want sorted into one of the following categories:
    - Movies
    - Foods
    - Books
    - Products
7. The wolfram API should automatically sort the item into the correct list. If the item is sorted into the wrong category, simply delete the item by clicking the trash icon. Then, specify which item you are searching for by clicking on one of four icons below the search bar.
    - You can toggle the search header by clicking on the name of the website on the top left corner.
8. When a sorted item is clicked, a modal will display with additional information and description about the item.
9. You can also choose to only view a single category by clicking on the name of the category and have the other sections toggled out from the view. Click on yhe category name to return back to the main view.


=========

## Project Setup

The following steps are only for _one_ of the group members to perform.

1. Create your own copy of this repo using the `Use This Template` button, ideally using the name of your project. The repo should be marked Public
2. Verify that the skeleton code now shows up in your repo on GitHub, you should be automatically redirected
3. Clone your copy of the repo to your dev machine
4. Add your team members as collaborators to the project so that they can push to this repo
5. Let your team members know the repo URL so that they use the same repo (they should _not_ create a copy/fork of this repo since that will add additional workflow complexity to the project)


## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information 
  - username: `labber` 
  - password: `labber` 
  - database: `midterm`
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
7. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
8. Visit `http://localhost:8080/`

## Warnings & Tips

- Do not edit the `layout.css` file directly, it is auto-generated by `layout.scss`
- Split routes into their own resource-based file names, as demonstrated with `users.js` and `widgets.js`
- Split database schema (table definitions) and seeds (inserts) into separate files, one per table. See `db` folder for pre-populated examples. 
- Use the `npm run db:reset` command each time there is a change to the database schema or seeds. 
  - It runs through each of the files, in order, and executes them against the database. 
  - Note: you will lose all newly created (test) data each time this is run, since the schema files will tend to `DROP` the tables and recreate them.

## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x

## Sidenotes from Development

- Conflict during click event, issue w/ two document ready functions (deleting the reminder was not firing before modal).
