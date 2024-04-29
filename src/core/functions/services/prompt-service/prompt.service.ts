import * as vscode from "vscode";
import * as fs from "fs";

export enum PromptAction {
  HELP = "help",
  GENERATE = "generate",
}

interface IPromptServiceProps {
  context: vscode.ExtensionContext;
  action: PromptAction;
}

export default function ({ context, action }: IPromptServiceProps) {
  if(action === PromptAction.HELP) {
    return fs.readFileSync(vscode.Uri.joinPath(context.extensionUri, "media", "prompts", "help.txt").fsPath).toString();
  }
  if(action === PromptAction.GENERATE) {
    return fs.readFileSync(vscode.Uri.joinPath(context.extensionUri, "media", "prompts", "generate.txt").fsPath).toString();
  }
  return "";
}
