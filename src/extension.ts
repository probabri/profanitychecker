// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "profanitychecker" is now active!');

	let disposable = vscode.commands.registerCommand('profanitychecker.runProfanityChecker', () => {

		//Define the editor as the active window
		const editor = vscode.window.activeTextEditor;
	
		//Configure bad word filter
		let swearListDep = require('badwords-list'); 
		let swearList = swearListDep.array;
		const badWordFilter = require("badwords-filter");
		const filter = new badWordFilter({ list: swearList });

	
		if(editor){

			const document = editor.document; //Define the document as the open editor window document.
			
			let lengthOfDoc = document.lineCount; //gets the number of lines in the document

			let profanityOutput = vscode.window.createOutputChannel("profanityOutput"); //defines the console output
			let profanityFlag = false;
			
			for (let i = 0; i < lengthOfDoc; i++){
				let docTextLine = document.lineAt(i).text; //grab a line from the document
				docTextLine = docTextLine.replace(/[^0-9a-z]/gi, ' '); //replace non alphanumerics with a space
				let tokenizedLine = docTextLine.split(" "); //creates an array containing each word on a line
				
				//go through each word on a line and check for profanity
				for (let j = 0; j < tokenizedLine.length; j++){ 
					
					if(filter.isUnclean(tokenizedLine[j])) {
						profanityFlag = true;
						profanityOutput.append('PROFANITY ON LINE: ' + (i+1) + '\n \t  "' + tokenizedLine[j] + '" flagged as profane\n');
						profanityOutput.show();
					}
				}
			}

			if(profanityFlag){
				profanityOutput.append('\n-- Profanity Found -- ');
				profanityOutput.show();
			}
			else{
				profanityOutput.append('\n-- Document clean from profanity --');
				profanityOutput.show();
			}
			
		}
		vscode.window.showInformationMessage('Profanity Checker has run successfully!');
	});


	let disposable2 = vscode.commands.registerCommand('extremeprofanitychecker.runExtremeProfanityChecker', () => {

		//Define the editor as the active window
		const editor = vscode.window.activeTextEditor;
		
		if(editor){

			const document = editor.document; //Define the document as the open editor window document.
			const exceptionsList = require('./exceptionsArray'); //defines a list of common code words that technically include a bad word e.g. class

			let lengthOfDoc = document.lineCount; //gets the number of lines in the document
			let profanityOutput = vscode.window.createOutputChannel("profanityOutput"); //defines the console output
			let profanityFlag = false; //a flag defining if a profane word was found or not

			//Define swear list
			let swearListDep = require('badwords-list'); 
			let swearList = swearListDep.array;
			
			
			for (let i = 0; i < lengthOfDoc; i++){
				let docTextLine = document.lineAt(i).text.toLowerCase();; //grab a line from the document and turn it all lower case
				docTextLine = docTextLine.replace(/[^0-9a-z]/gi, ' '); //replace non alphanumerics with a space
				let tokenizedLine = docTextLine.split(" "); //creates an array containing each word on a line

				for (let m = 0; m < tokenizedLine.length; m++){ //go through each word on tokenized line
					let isException=false;

					for (let k = 0; k < exceptionsList.length ; k++){ //check if a word is on the exceptions list & replace with nothing
						if(tokenizedLine[m].includes(exceptionsList[k])){
							isException = true;
						}
					}	
					if(isException===true){ //if word is an exception, go to the next word; don't check for swears.
						continue;
					}
					for(let j=0; j < swearList.length ; j++){
						if(tokenizedLine[m].includes(swearList[j])){
							profanityOutput.append('PROFANITY ON LINE: ' + (i+1) + '\n \t"' + tokenizedLine[m] + '"\n\tContains Profane Word: ' + swearList[j] + '\n');
							profanityOutput.show();
							profanityFlag = true;
							break; //break because if there's one swear word in a word, you don't need to find it twice e.g. shit & shithead
						}
					}
				}
			}

			if(profanityFlag){
				profanityOutput.append('\n-- PROFANITY FOUND -- ');
				profanityOutput.show();
			}
			else{
				profanityOutput.append('\n-- Document clean from profanity --');
				profanityOutput.show();
			}
			
		}
		vscode.window.showInformationMessage('Profanity Checker has run successfully!');
	});

		context.subscriptions.push(disposable);
		context.subscriptions.push(disposable2);
		

		
}

// this method is called when your extension is deactivated
export function deactivate() {}
