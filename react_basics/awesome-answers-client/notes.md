# Cloning or copying a React project

If you're copying or cloning a React project to your local machine, the project likely has a
.gitinore file that will be ignoring node_modules that you will need for your project to work
locally.  Therefore, you need to install the dependencies with npm install.  However, you might
want to follow these steps first to avoid common errors:

# 1
Make sure you are in the correct react directory/repository

# 2
Make sure that there are no existing node_modules in your directory or any ancestor directories. Hint: Often if you did "npm i" in the wrong directory, node_modules will exist in the wrong directory and will conflict with other directories.  cd into your home (~) directory and work your way down to your current react directory.  If you see node_modules
where they are not meant to be, you can remove them with: rm -rf node_modules

# 3 
Back to your react directory. Remove any package-lock.json or yarn-lock.json files. 

# 4
Remove any unwanted cache that might have accumulated with: npm cache clear --force

# 5
Now do npm i.  If you used yarn to generate your project, you can do yarn i, but you might encounter 
other issues.

# 6 
Now you should be able to use your npm commands like npm start to start your React project
Note: React npm start defaults to localhost:3000.  If you're running your Rails server in localhost:3000, run that first.  Then when you run your React client with npm start, it will ask you if you want to use a different port, to which you answer y (for yes), and it will open a second port as the client.

