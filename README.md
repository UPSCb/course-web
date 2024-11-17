# course-web - Course Web Site

Template for workshop websites

## Repository structure

The repository consists of very few important directories:

* bin - contains the __nodejs__ executable aptly named _www_
* public - the materials subdirectory is where we stored the courses PDFs - try to keep this small, i.e. no data!
* routes - this contains the js files; i.e. the logic behind the webpage behavior
* views - this contains the files that will generate the html; these are written in _pug_.

The other directories/files are managed by __nodejs__

## Relevant links

* https://nodejs.org/api/ - The nodejs API

* https://www.npmjs.com - The JS module repository

* https://expressjs.com/en/4x/api.html - The minimal nodejs module we use

* http://www.w3schools.com/bootstrap/default.asp - The "CMS" we use (Bootstrap)

* https://www.npmjs.com/package/pug - The template language for writing HTML

## Changes needed for a course

First, create a new branch from the most recent branch of the same course or from the master

To edit the website for a course, you need to:

1. Edit the title of the course in the index, connect and materials pug view files (Look for the first h1)
2. Edit the short version of the title in the index, connect and materials js routes files (Look for :title:")
3. Edit the participant list in the connect.js file (At the moment this is a bit convoluted as we used 2 servers and had to divide the participants across, but ideally it should be a simple user-ID list. The ID is later used to assign the Port number to connect to the user-specific Docker containers.

## Keeping up to date

Check the [node JS module repository](https://www.npmjs.com/) and update the package.json file accordingly.

## Starting

docker run -d -p 3000:3000 -v /mnt/picea/projects/docker/SLUBI2020:/course-web/public/materials delhomme/upscb-nodejs:Slubi2024

## TODOs

* provide a user file instead of modifying the connect.js

* handle different IPs more gracefully than in the connect.js

* provide the course title in a single place to avoid editing all _js_ files and the index, connect and materials _pug_ view files

* Find a way to import materials to _public/materials_ instead of git-ing everything
