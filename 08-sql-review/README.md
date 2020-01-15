# Intro to SQL

## SWBATs
*  [ ] Explain persistence and the need for using SQL
*  [ ] Define SQL
*  [ ] Explain the difference between SQLite3 and SQL
*  [ ] Explore provided data through SQLite Browser
*  [ ] Define CRUD
*  [ ] Perform CRUD actions on a single table
*  [ ] Perform CRUD actions across related tables

## What can I do with data?

## CRUD

### Insta
- Create
  * Sign up -> user
  * Create a post
  * Send a message
  * Write a comment
  * Follow
- Read
  * See a feed
  * Search
  * View story
  * View profile / account settings
  * Read messages
  * Read comments
  * See number of likes
- Update
  * Changing your bio / account settings
  * Edit a comment
  * Add a like (updating a post)
  * Remove a like (updating a post)
  * Watch a video adds view
  * Edit a post (change the tagline)
  * Blocking (updating friendship)
- Delete
  * Delete a post
  * Delete account
  * Delete a comment
  * Unsend message
  * Unfollow (deleting a followership)


## Databases
- Excel -> table formatted (cols and rows)
- MS Access -> type of database
- Storage
- Information
- Servers
- Mainframe
- Privacy
- Hacking

### SQL
- Structured Query Language
- SQL -> MySQL, Postico, SQLite, Oracle, PostgreSQL

### Non Relational Databases (NoSQL DBs)
- MongoDB -> stores stuff as hashes
- Graph based DBs -> Neo4JS
- Cache  -> Redis

## Set Up 

1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
chinook db
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `chinook.db` file from this repo. This database is open source and maintained by Microsoft (SQL is no fun if you don't have any data)
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below

## Challenges

1. Write the SQL to return all of the rows in the artists table?

2. Write the SQL to select the artist with the name "Black Sabbath"

3. Write the SQL to create a table named 'fans' with an autoincrementing ID that's a primary key and a name field of type text

4. Write the SQL to alter the fans table to have an artist_id column type integer?

5. Write the SQL to add yourself as a fan of the Black Eyed Peas? ArtistId **169**

6. How would you update your name in the fans table to be your new name?

7. Write the SQL to return fans that are not fans of the black eyed peas.

8. Write the SQL to change a fan's artist.

9. Write the SQL to display an artists name next to their album title

10. Write the SQL to display artist name, album name and number of tracks on that album

11. Write the SQL to return the name of all of the artists in the 'Pop' Genre


## BONUS (very hard)

12. I want to return the names of the artists and their number of rock tracks
    who play Rock music
    and have move than 30 tracks
    in order of the number of rock tracks that they have
    from greatest to least

