import * as vscode from "vscode";
import { PromptAction } from "../prompt.service";
import getGeneratePrompt from "./getGeneratePrompt";

function getPromptToRun(action: PromptAction, context: vscode.ExtensionContext) {
  return getGeneratePrompt(action, context);
}

export default getPromptToRun;