import * as vscode from "vscode";
import helpAction from "./help-action";

export interface Strategy {
  action: string;
  message: string;
}

export default async function (
  obj: Strategy,
  history: any[],
  extensionContext: vscode.ExtensionContext
) {
  return await helpAction(obj, history, extensionContext);
}
