import * as vscode from "vscode";
import getPromptToRun from "./actionStrategy";

export enum PromptAction {
  HELP = "help",
  GENERATE = "generate",
}

interface IPromptServiceProps {
  context: vscode.ChatContext;
  action: PromptAction;
}

export default function ({ context, action }: IPromptServiceProps) {
  const promptToRun = getPromptToRun(action, context);

  return promptToRun;
}
