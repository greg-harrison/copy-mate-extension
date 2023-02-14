// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "copy-mate" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand("copy-mate.transformText", async function () {
		// Get the active text editor
		let editor = vscode.window.activeTextEditor;

		if (!editor) {
			return;
		}

		// Get the selected text in the active editor
		let selection = editor.selection;
		let text = editor.document.getText(selection);

		// Show an information message with the selected text
		vscode.window.showInformationMessage(`Selected text: "${text}"`);

		await vscode.env.clipboard.writeText("Hello World!");

		vscode.window.showInformationMessage("Wrote hello world to Clipboard!");
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
