# Profanity Checker

Profanity Checker is a VSCode Extension that allows you to run commands from the command palette to check for profane words in a code file. 

## Features

These extension contains 2 commands to run in the VSCode command palette:

>Run Profanity Checker

>Run Extreme Profanity Checker

![Command Palette] (/photos/ProfanityCheckerCommandPalette.png)

### Run Profanity Checker

Access the command palette using CMD + Shift + P on Mac or CTRL + Shift + P on Windows

This command will run through each word in the code and check for profane words and output the line number it is on as well as the profane word it is finding. 

### Run Extreme Profanity Checker

Access the command palette using CMD + Shift + P on Mac or CTRL + Shift + P on Windows

This command will run through the code and check if any word contains a bad word, which is specifically handy for checking for profane variable names. 
Extreme Profanity Checker is, as the title suggests, extreme. It will find profane words inside otherwords that otherwise aren't profane. E.g. "Sunglasses".

## Known Issues

None at present.

## Release Notes


### 0.0.1

Beta release of Profanity Checker extension. 


-----------------------------------------------------------------------------------------------------------
## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)


