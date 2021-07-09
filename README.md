This repository is for the Acklen Avenue QA recruiting challenge
# Challenge Description
This program is to Create a automated tests to demonstrate the functionality AND bugs of the following web
application: ​ http://www.shino.de/parkcalc/

# Install dependencies
* npm install

# Available Scripts
* In the project directory, you can run:

**npx cypress open**
* Runs the cypress app UI 

* The program will pop up and  you can see 2 test, the first test is to check, dropdowns, radiobottons,text box, price ande date
the second test is object oriented using clean code , clean tests and more user friendly. 

**npm run cypress:reports**

* Will run all tests  on the terminal
* Will  create videos
* Will create test screenshots if you get a errors
* Will create html test reports
* Will delete previous,reports,screenshots and videos every time you run this script




# Folders to check

* Mochawesome-report = This folder has the automatic results you can open on html report.
* Video= will save the video snapshots.
* Screenshot= will create screenshot if a error occurred.

 


# Comments
* Cypress is unable to build/deployment I try with  heroku but is not a clear info how to do it.
* Automated things used on the program prettier,eslint,githubautocommit,mocha,mochawesomereports.
* Cypress use mocha and chai libraries soo I use chai to make assertions.
