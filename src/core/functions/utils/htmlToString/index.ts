import * as vscode from "vscode";

export default async function (
  pathTohtml: string[],
  context: vscode.ExtensionContext
) {
  const fs = await vscode.workspace.fs.readFile(
    vscode.Uri.joinPath(context.extensionUri, ...pathTohtml)
  );

  return fs.toString();
}
