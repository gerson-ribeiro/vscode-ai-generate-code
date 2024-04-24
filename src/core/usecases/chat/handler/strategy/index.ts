import * as vscode from 'vscode';
import helpAction from './help-action';

export default async function (request : vscode.ChatRequest, extensionContext: vscode.ChatContext) {
    return await helpAction(request, extensionContext);   
}