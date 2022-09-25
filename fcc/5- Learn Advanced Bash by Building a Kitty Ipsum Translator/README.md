The command you just entered printed to the terminal. You can redirect that output to a file using >. Here’s an example: <command> > <filename>. Enter the same command but redirect the output into stdout.txt.


A stdout.txt file was created. You should take a look at it. Instead of printing hello bash to the terminal, it redirected the output to the file. A single > will create or overwrite the file. Use the same command with >> to append to the file.


Take a look at the file. It was overwritten with the output of the command. Enter > stdout.txt in the terminal to redirect nothing into the file. Effectively, emptying it.

bad_command > stderr.txt 


There’s two types of output, stdout (standard out) for when a command is successful, and stderr (standard error) for when it’s not. Both of these will print to the terminal by default. bad_command was not a valid command, so it printed to stderr. You can redirect stderr with 2>. Enter the same command but redirect stderr to stderr.txt

1. Here's an example: <command> 2> <filename>

2. Make sure to use stderr.txt as the filename

3. Enter bad_command 2> stderr.txt in the terminal


Take a look at the stderr.txt file. The error was redirected to the file and nothing printed in the terminal. You used 2> to redirect stderr. Similarily, you can use 1> to redirect stdout. Enter echo hello bash again and use it to redirect stdout to the stdout.txt file.


stdout and stderr are for output. stdin (standard in) is the third thing commands can use and is for getting input. The default is the keyboard. Enter read NAME in the terminal to see a command that uses stdin.

The read command is looking at stdin for where to get input, which is pointing to the keyboard. Type your name and press enter.

read NAME
echo $NAME 1> stdout.txt



Just like you can redirect output, you can redirect stdin as well. Here's an example: <command> < <filename_for_stdin>. Use the read command to assign the NAME variable to the contents of name.txt by redirecting the stdin.
read NAME < name.txt


Now the variable is set to the content of the file, which was the input. Another way to set the stdin is by using the pipe (|). It will use the output from one command as input for another. Here's an example: <command_1> | <command_2>. This will take the stdout from command_1 and use it as the stdin for command_2. Use this method to echo your name and pipe the output into the read command which reads your name into the NAME variable.

echo hudir | read NAME


It worked, but it doesn't look like it. When you used the pipe (|) to set the input for read, it ran the command in a subshell or subprocess. Basically, another terminal instance within the one you see. The variable was set in there and didn't affect the one you had previously set. cat is another command that takes input. Enter it in the terminal.


cat can take a filename as an argument. Use it again with your name.txt file as an arguement to print the contents of the file.


Enter the same command but use redirection to set the stdin to name.txt

1. Use < to redirect input

2. Here's an example <commnad> < <filename>

3. It was the cat command with the name.txt file

4. Enter cat < name.txt in the terminal


echo hudir | ./script.sh
It didn't ask for input this time because you gave it input with the pipe. The two types of output were printed in the terminal. Run the same command but redirect stderr output to the stderr.txt


It didn't ask for input this time because you gave it input with the pipe. The two types of output were printed in the terminal. Run the same command but redirect stderr output to the stderr.txt
1. The previous command was echo <your_name> | ./script.sh

2. You can redirect sterr output with 2>

3. Here's an example: <previous_command> 2> <filename>

4. Enter echo <your_name> | ./script.sh 2> stderr.txt


Again, it didn't ask for input. This time it only printed your name to the terminal and not the output of bad_command. That produced an error, which you redirected to stderr.txt. Take a look at that file. You can redirect both the stderr and stdout by adding another redirection at the end like this: > <filename>. Enter the same command, redirect the stderr to the same place again, and the stdout to stdout.txt.

echo hudir | ./script.sh 2> stderr.txt > stdout.txt

It didn't ask for input and nothing was printed in the terminal that time. You redirected both outputs to files. You should take a look at them to see if they have what you expected. Run your script again, use redirection to set name.txt as the input. Don't redirect any of the output.

1. You should have a name.txt file with only the text freeCodeCamp in it

2. Here's an example: <command> < <filename>

3. Enter ./script.sh < name.txt in the terminal




Excellent. Run the same command, but redirect the stderr to stderr.txt
./script.sh < name.txt 2> stderr.txt 


Nice job! Run it again, redirect the stderr to the same place and the stdout to stdout.txt
./script.sh < name.txt 2> stderr.txt 1> stdout.txt

# topic start


You will write a small script to translate both of them into doggy ipsum. For now, you will learn some commands to figure out how. The first one is wc. It prints some info about a file. It can take a file as an argument like the cat command. Use it to see what it shows you about your kitty_ipsum_1.txt file.
27  332 1744 kitty_ipsum_1.txt

Not quite sure what all those numbers mean. Check the manual of the wc command to see if you can find out more.

 Print  newline,  word, and byte counts for each FILE, and a total line if more than one FILE is specified.  A word is a non-zero-length sequence of characters delim‐
       ited by white space.
       -c, --bytes
              print the byte counts

       -m, --chars
              print the character counts

       -l, --lines
              print the newline counts
        
        -L, --max-line-length
              print the maximum display width

        -w, --words
              print the word counts


wc stands for word count. It showed you how many lines were in the file, how many words, and how many bytes. Use the -l flag to only output how many lines are in the file. Don't do any redirecting of input or output.
$ wc -l kitty_ipsum_1.txt 


That shows the byte count instead of the character count. Some characters must be more than one byte. Use cat to pipe the content of the file as the input of the wc command to see if the output is the same.
 $ cat kitty_ipsum_1.txt | wc



It looks like the way you give input to a command may affect the output. It only printed the numbers that time and not the filename. Try using redirection as the input with the same file and command to see what that outputs.
wc < kitty_ipsum_1.txt 


No filename again with fewer spaces that time. You may have to play with certain commands to get the output you are looking for. You are going to create a file that has some meta information about the two kitty ipsum files in it. Use echo and redirection to print ~~ kitty_ipsum_1.txt info ~~ to a file named kitty_info.txt. Make sure to place the text in quotes.
echo "~~ kitty_ipsum_1.txt info ~~" > kitty_info.txt


Open the file so you can keep track of what's in it. Use echo and the -e flag with the new line character (\n) to append Number of lines: to the kitty_info.txt file. Add the new line character at the beginning of the text so there's an empty line. Remember that you can append output to a file with >>.