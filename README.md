:envelope: Newsletter Template :envelope:
===

Description
---
Landing page for sign up to newsletter.
All entered emails will be saved into "users" table in "join_us" database (which you need to create - read Installation instructions).

Using `node migrations/migrations.js` application will create "users" table and insert fake users emails.

Created using NodeJS and MySql.

File List
---
```
./migrations

./public

./views

app.js

schema.sql

README.md
```

Installation
---
1. Download or clone the project
2. Go into the project `cd newsletter-signup`
3. Run `npm install`
4. Create database and name it "newsletter_subscribers"
5. Rename config_example.js file to config.js and set username and password
6. Run `npm run migration`
7. Run `npm start`

Application will open on localhost:8080

Screenshot
---
![example](https://user-images.githubusercontent.com/22341530/48863676-73fdf500-edca-11e8-87ba-60be259f8e8d.png)