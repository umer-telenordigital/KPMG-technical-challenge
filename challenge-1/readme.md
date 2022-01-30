pre-requisites:
- Minimum node version 17.4.0 

Rest of the node_modules are packaged in the challeng-1 folder itself, so should be good to go 
after cloning the repo, please go to challenge-1 subdir and run

node phone-book-server.js

open your browser and goto http://localost:5000/add_record.html
fill in the form and click submit
then point your browser to: http://localost:5000/

this shows you entries in the DB ... didn't get time to format the result properly.

This app stores the information as a document inside MongoDB - DB Tier
Server is hosted using NodeJS - Server tier
And the address form is the client tier 

this way we have the 3-tier environment 

If we need to scale this ... we can delpoy this application server inside a K8s cluster in the cloud and stand-alone MongoDB would be replaced with a MongoDB cluster



