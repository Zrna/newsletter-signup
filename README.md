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
2. Go into the project `cd JoinUs`
3. Run `npm install`
4. Create database and name it "join_us"
5. Set username and password in **app.js** -> **line 13 and 14**
6. Run `node migrations/migrations.js`
7. Run `node app.js`

Application will run on localhost:8080

Screenshot
---
![example](https://user-images.githubusercontent.com/22341530/48863676-73fdf500-edca-11e8-87ba-60be259f8e8d.png)