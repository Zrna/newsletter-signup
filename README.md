:envelope: Newsletter Template :envelope:
===

File List
---
```
./public

./views

app.js

schema.sql

README.md
```

Description
---
Landing page for sign up to newsletter.
All entered emails will be saved into "users" table in join_us database (which you need to create - read Installation instructions).

**Code in *app.js* file from line 38 to line 50 will create 10 test users.**
Simply delete that part of the code if you do not need it.

Created using NodeJS and MySql.

Installation
---
1. Donwload or clone the project
2. Go into the project
3. Run `npm install`
4. Create database and name it "join_us"
5. Set username and password in **app.js** -> **line 13 and 14**
6. Run `node app.js`

Application will run on localhost:8080.

Screenshot
---
![sample](https://user-images.githubusercontent.com/22341530/48580610-f8aac800-e91f-11e8-9c6c-7e16653e461d.png)
