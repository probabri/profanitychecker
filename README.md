# Profanity Checker

Profanity Checker is a VSCode Extension that allows you to run commands from the command palette to check for profane words in a code file. It can be damaging to potentially let forward facing code, such as that for a website or applicationg, accidentally slip to the public with profane words. Also sometimes the frustration of working on something can slip through in code comments that you may not want your code reviewers to see. This extension can give you the peace of mind that your code is clean or profanity and safe for release. 

## Features

These extension contains 2 commands to run in the VSCode command palette:

>Run Profanity Checker

>Run Extreme Profanity Checker

![Command Palette](https://i.imgur.com/5qs60O6.png)

### Run Profanity Checker

Access the command palette using CMD + Shift + P on Mac or CTRL + Shift + P on Windows

Running this command will go through each word in the code and check for profane words and output a summary of a line number where profanity is found as well as the profane word it is finding. 

![Output of Run Profanity Checker command](https://i.imgur.com/vykHGJ7.png)

### Run Extreme Profanity Checker

Access the command palette using CMD + Shift + P on Mac or CTRL + Shift + P on Windows

This command will run through the code and check if any word contains a bad word, which is specifically handy for checking for profane variable names. 
Extreme Profanity Checker is, as the title suggests, extreme. It may find profane words inside otherwords that otherwise aren't profane. E.g. "Sunglasses".

There is a list of exception words that are common words in code. For example, the word class is a very common word in code, but does technically contain "ass". This exception list helps to prevent seeing this or similar words flagged.

![Output of Run Profanity Checker command](https://i.imgur.com/gyfx9cE.png)

## Known Issues

None at present.

## Release Notes


### 0.0.1

Beta release of Profanity Checker extension. 

### 0.0.2

Updated ReadMe.md with screenshots as well as added more common code terms to the exceptions list.
