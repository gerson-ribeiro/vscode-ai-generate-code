import * as vscode from "vscode";

interface ITemplatePath {
  htmlPath: vscode.Uri;
  cssPath: vscode.Uri;
  jsPath: vscode.Uri;
  sendButton: vscode.Uri;
}

export default (_extensionUri: vscode.Uri): ITemplatePath => ({
  htmlPath: vscode.Uri.joinPath(
    _extensionUri,
    ...["media", "assets", "templates", "chat", "index.html"]
  ),
  cssPath: vscode.Uri.joinPath(
    _extensionUri,
    ...["media", "assets", "templates", "chat", "index.css"]
  ),
  jsPath: vscode.Uri.joinPath(
    _extensionUri,
    ...["media", "assets", "templates", "chat", "index.js"]
  ),
  sendButton: vscode.Uri.joinPath(
    _extensionUri,
    ...["media", "assets", "icons", "send-button.svg"]
  ),
});
