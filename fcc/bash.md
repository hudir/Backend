You can see what's in a file with more <filename>. Use it to view what's in the package.json file.


That's a lot of folders. You can add a flag to a command to use it different ways like this: ls <flag>. List the contents of the node_modules folder in "long list format". Do that by adding the -l flag to the "list" command.

You can go back two folders with cd ../... Each set of dots represents another folder level. Go back to the project directory from the node_modules directory.


There's three files, but where's the .gitignore file? I think it's hidden. Most commands have a --help flag to show what the command can do. Display the "help" menu for the ls command. Here's an example: command <flag>



The . takes you to the folder you are in, and .. takes you back, or up, a folder. 
```
.  ..  .gitignore  index.html  index.js  styles.css
```



Looks like they're all deleted. There was a mistake with the extensions for the font files. You can rename them with mv like this: mv <filename> <new_filename>. mv stands for "move", it can rename or move something. Rename roboto.font to roboto.woff.


You can use find to find things or view a file tree. Enter find to view the file tree of the website folder to see all the files and folders withing it.

Things are looking more organized 😄 You can use find <folder_name> to display the tree of a different folder. View the file tree of the client folder from the website folder.

The menu isn't very pretty, but there's a -name flag in there. You can use it to search for something with find -name <filename>. Use find with the -name flag to search for index.html.

You can search for folders with it, as well. Using the same command and flag, find the src folder.

You don't need the old images folder anymore. You can use rmdir <directory_name> to remove a folder. rmdir stands for "remove directory". Try to remove the images folder with rmdir. Make sure it's the one in the website folder.

You can print to a file instead of the terminal with echo text >> filename. Use it to print I made this boilerplate to your README.md file.

Use the "exit" command to exit the terminal.