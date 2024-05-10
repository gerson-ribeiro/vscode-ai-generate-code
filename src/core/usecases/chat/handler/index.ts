import * as vscode from "vscode";
import getTemplateForWebview from "../../../functions/utils/getTemplateForWebview";
import strategy from "./strategy";
import markdown from "../../../functions/services/markdown";

export enum PluginAction {
  EXPLAIN_PLUGIN = "explain-plugin",
  GENERATE_CODE = "generate",
  HELP = "help",
}

const handler = async (
  _context: vscode.ExtensionContext
): Promise<vscode.WebviewViewProvider> => {
  const { render } = await markdown();
  const history: any[] = [];
  const sendMessage = async (webviewView: vscode.WebviewView, message: any) => {
    const action = PluginAction.HELP;

    const response = await strategy(
      { action, message: message.message },
      history,
      _context
    );
    history.push({
      command: "send",
      role: "user",
      content: message.message,
    });

    const htmlRespose = render(response)
      .replace(/\n/g, "<br>")
      .replace(/<br>$/, "");

    history.push({
      command: "receive",
      role: "system",
      content: htmlRespose || response,
    });

    webviewView.webview.postMessage({
      command: "receive",
      message: htmlRespose || response,
    });
  };

  const resolveWebviewView = async (
    webviewView: vscode.WebviewView,
    context: vscode.WebviewViewResolveContext,
    token: vscode.CancellationToken
  ) => {
    webviewView.webview.options = {
      enableScripts: true,
      localResourceRoots: [_context.extensionUri],
    };

    webviewView.webview.html = await getTemplateForWebview(
      webviewView,
      _context.extensionUri
    );
    webviewView.webview.onDidReceiveMessage(async (message) => {
      switch (message.command) {
        case "send":
          sendMessage(webviewView, message);
          break;
        default:
          break;
      }
    });
  };
  return await {
    resolveWebviewView,
  };
};

export default handler;
