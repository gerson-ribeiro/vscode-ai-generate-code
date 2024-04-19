import * as vscode from "vscode";
import chat from "./core/usecases/chat";
import { CONFIG_API_KEY_NAME } from "./core/constants";

export function activate(context: vscode.ExtensionContext) {
	const apikey = vscode.workspace.getConfiguration().get(CONFIG_API_KEY_NAME);
	if(!apikey || apikey === ""){
		vscode.window.showInformationMessage("Please set your api key in the settings!");
	}

	chat(context);

}

export function deactivate() {}
