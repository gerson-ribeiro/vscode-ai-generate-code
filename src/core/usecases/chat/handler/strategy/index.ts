import * as vscode from 'vscode';
import helpAction from './help-action';

export interface Strategy {
    action: string;
    message: string;
}

export default async function (obj: Strategy, extensionContext: vscode.ExtensionContext) {
    return await helpAction(obj, extensionContext);   
}