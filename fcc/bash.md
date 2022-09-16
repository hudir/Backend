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






The syntax is at the top, not all of it is required. Here's another example:

if [[ CONDITION ]]
then
  STATEMENTS
fi
Remove the echo $1 in your script and add an if condition that checks if [[ $1 == arg1 ]]. In its then area, use echo to print true to the screen. There must be spaces on the inside of the brackets ([[ ... ]]) and around the operator (==).


if [[ $1 == arg1 ]]
then
 echo true
fi



Notice that the end of the syntax is fi (if backwards). It should print true if you pass arg1 to your script now. Run the script with arg1 as the only argument.

Execute conditional command.
    

    $ help [[ expression ]]

    Returns a status of 0 or 1 depending on the evaluation of the conditional
    expression EXPRESSION.  Expressions are composed of the same primaries used
    by the `test' builtin, and may be combined using the following operators:
    
      ( EXPRESSION )    Returns the value of EXPRESSION
      ! EXPRESSION              True if EXPRESSION is false; else false
      EXPR1 && EXPR2    True if both EXPR1 and EXPR2 are true; else false
      EXPR1 || EXPR2    True if either EXPR1 or EXPR2 is true; else false
    
    When the `==' and `!=' operators are used, the string to the right of
    the operator is used as a pattern and pattern matching is performed.
    When the `=~' operator is used, the string to the right of the operator
    is matched as a regular expression.
    
    The && and || operators do not evaluate EXPR2 if EXPR1 is sufficient to
    determine the expression's value.
    
    Exit Status:

codeally@6b6d9489246d:~/project$ help test
test: test [expr]
    Evaluate conditional expression.
    
    Exits with a status of 0 (true) or 1 (false) depending on
    the evaluation of EXPR.  Expressions may be unary or binary.  Unary
    expressions are often used to examine the status of a file.  There
    are string operators and numeric comparison operators as well.
    
    The behavior of test depends on the number of arguments.  Read the
    bash manual page for the complete specification.
    
    File operators:

    -a FILE        True if file exists.
      -b FILE        True if file is block special.
      -c FILE        True if file is character special.
      -d FILE        True if file is a directory.
      -e FILE        True if file exists.
      -f FILE        True if file exists and is a regular file.
      -g FILE        True if file is set-group-id.
      -h FILE        True if file is a symbolic link.
      -L FILE        True if file is a symbolic link.
      -k FILE        True if file has its `sticky' bit set.
      -p FILE        True if file is a named pipe.
      -r FILE        True if file is readable by you.
      -s FILE        True if file exists and is not empty.
      -S FILE        True if file is a socket.
      -t FD          True if FD is opened on a terminal.
      -u FILE        True if the file is set-user-id.
      -w FILE        True if the file is writable by you.
      -x FILE        True if the file is executable by you.
      -O FILE        True if the file is effectively owned by you.
      -G FILE        True if the file is effectively owned by your group.
      -N FILE        True if the file has been modified since it was last read.
    
      FILE1 -nt FILE2  True if file1 is newer than file2 (according to
                       modification date).
    
      FILE1 -ot FILE2  True if file1 is older than file2.
    
      FILE1 -ef FILE2  True if file1 is a hard link to file2.
    
    All file operators except -h and -L are acting on the target of a symbolic
    link, not on the symlink itself, if FILE is a symbolic link.
    
    String operators:
    
      -z STRING      True if string is empty.
    
      -n STRING
         STRING      True if string is not empty.
    
      STRING1 = STRING2
                     True if the strings are equal.
      STRING1 != STRING2
                     True if the strings are not equal.
      STRING1 < STRING2
                     True if STRING1 sorts before STRING2 lexicographically.
      STRING1 > STRING2
                     True if STRING1 sorts after STRING2 lexicographically.
    
    Other operators:
    
      -o OPTION      True if the shell option OPTION is enabled.
      -v VAR         True if the shell variable VAR is set.
      -R VAR         True if the shell variable VAR is set and is a name
                     reference.
      ! EXPR         True if expr is false.
      EXPR1 -a EXPR2 True if both expr1 AND expr2 are true.
      EXPR1 -o EXPR2 True if either expr1 OR expr2 is true.
    
      arg1 OP arg2   Arithmetic tests.  OP is one of -eq, -ne,
                     -lt, -le, -gt, or -ge.
    
    Arithmetic binary operators return true if ARG1 is equal, not-equal,
    less-than, less-than-or-equal, greater-than, or greater-than-or-equal
    than ARG2.
    
    See the bash manual page bash(1) for the handling of parameters (i.e.
    missing parameters).
    

Nothing happened? Each command has an exit status that can be accessed with $?. View the exit status of the last command with echo $?.
[[ 4 -ge 5 ]]; echo $?

You can think of an exit status of 0 as true. But it means that the command had zero errors. All commands have an exit status. Using the same syntax, enter bad_command; and check its exit status on a single line.



The file must exist. It's checking the folder the command is entered from. Try it again with bad_file.txt.
[[ -a bad_file.txt ]]; echo $?


bad_file.txt doesn't exist. I think you're getting the hang of this. Using the same syntax, check if you have permissions to execute your countdown.sh file. You may want to look at that menu again.
[[ -x countdown.sh ]]; echo $?



You played around with a number of the expressions. View the help [[ expression ]] menu again that you looked at before to see a few more options. You can view the menu with just help [[.

[[ ... ]]: [[ expression ]]
    Execute conditional command.
    
    Returns a status of 0 or 1 depending on the evaluation of the conditional
    expression EXPRESSION.  Expressions are composed of the same primaries used
    by the `test' builtin, and may be combined using the following operators:
    
      ( EXPRESSION )    Returns the value of EXPRESSION
      ! EXPRESSION              True if EXPRESSION is false; else false
      EXPR1 && EXPR2    True if both EXPR1 and EXPR2 are true; else false
      EXPR1 || EXPR2    True if either EXPR1 or EXPR2 is true; else false
    
    When the `==' and `!=' operators are used, the string to the right of
    the operator is used as a pattern and pattern matching is performed.
    When the `=~' operator is used, the string to the right of the operator
    is matched as a regular expression.
    
    The && and || operators do not evaluate EXPR2 if EXPR1 is sufficient to
    determine the expression's value.
    
    Exit Status:
    0 or 1 depending on value of EXPRESSION.

[[ -x countdown.sh && 5 -le 4 ]]; echo $?
[[ -x countdown.sh || 5 -le 4 ]]; echo $?