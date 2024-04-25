import * as vscode from "vscode";
import handler from "./handler";

export default async function (context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      "ai-code.chat",
      await handler(context)
    )
  );
}
