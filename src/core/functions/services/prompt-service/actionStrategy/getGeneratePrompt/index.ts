import * as vscode from "vscode";
import { PromptAction } from "../../prompt.service";
import getHelpPrompt from "../getHelpPrompt";
import { CONFIG_APP_NAME } from "../../../../../constants";
import promptTxt from '../../../../utils/prompt/generate';

export default function (action: PromptAction, context: vscode.ChatContext) {
  if (action !== PromptAction.GENERATE) {
    return getHelpPrompt(action, context);
  }

  return promptTxt;
}
