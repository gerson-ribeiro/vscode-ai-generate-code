import * as vscode from "vscode";
import { PromptAction } from "../../prompt.service";
import { CONFIG_APP_NAME } from "../../../../../constants";
import promptTxt from '../../../../utils/prompt/help';

export default function (action: PromptAction, context: vscode.ChatContext) {
  if (action !== PromptAction.HELP) {
    return `I want to ask you something`;
  }

  return promptTxt;
}
