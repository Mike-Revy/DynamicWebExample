# DynamicWebExample
My long process jpournal with MySQL, Javascript 
I have been following tutorial at 
https://blog.risingstack.com/node-hero-tutorial-getting-started-with-node-js/

I have installed XAMP to load various server software.  Using XAMP I can run Apache and MySQL.  
I have MySQL listening to port 3000.  
You will need to insall express modules .. npm install express

To test if node.js ans see results in browser : 
    At command prompt run node expressNode.js and should get message server is listening 3000.  
    To test in browser go to localhost:3000
    Should see Hello from express in browser
    to kill expressNode.js .. go to command window and enter <ctrl-c>

Next I check to see if I can use expressHandlebars
I set up a subdirectory views and views/layout off of directory where index2.js sits 

In these files I have my main layout and my views html 
Of course, I had to install expressHadlebars .. npm install expressHandlebars 

Testing MySQL with in node console .. xamp MySQL server!  
Iuse phpAdmin (localhost:127.0.0.1 - http://localhost/phpmyadmin)
to create a database named node_heroDB. Table is USERS and has a name (varchar 20) and age (smallint 6)
I added a simple record - Mike 55 

Then command prompt ... node node_heroDBConsole.js - you should see in console 
connected as id ... 
The solution is:  [ RowDataPacket { name: 'Mike', age: 55 } ]




    

