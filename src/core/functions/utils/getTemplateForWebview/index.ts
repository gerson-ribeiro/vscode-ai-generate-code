import * as vscode from "vscode";
import * as fs from "fs";
import webviewTemplates from "../webviewTemplates";

export default async (
  webviewView: vscode.WebviewView,
  _extensionUri: vscode.Uri
): Promise<string> => {
  const { htmlPath, cssPath, jsPath } = webviewTemplates(_extensionUri);

  if (fs.existsSync(htmlPath.fsPath)) {
    const htmlTxt = fs.readFileSync(htmlPath.fsPath, "utf-8");
    const cssWebview = webviewView.webview.asWebviewUri(cssPath);
    const jsWebview = webviewView.webview.asWebviewUri(jsPath);

    const htmlReplacedContext = htmlTxt
      .replace("{{styles}}", cssWebview.toString())
      .replace("{{jsPath}}", jsWebview.toString())
      .replace("{{cspSource}}", webviewView.webview.cspSource);

    return htmlReplacedContext;
  } else {
    console.error("File does not exist: " + htmlPath.toString());
    return "File does not exist: " + htmlPath.toString();
  }
};
