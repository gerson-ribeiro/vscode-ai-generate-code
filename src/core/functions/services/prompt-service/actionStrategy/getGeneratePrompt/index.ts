import * as vscode from "vscode";
import { PromptAction } from "../../prompt.service";
import getHelpPrompt from "../getHelpPrompt";

export default function(action: PromptAction, context: vscode.ExtensionContext) {
    if(action !== PromptAction.GENERATE) {
        return getHelpPrompt(action, context);
    }
    const generatePromptFile = vscode.Uri.joinPath(
      context.extensionUri,
      "core",
      "prompt",
      "generate.txt"
    );

    const streamReader = vscode.workspace.fs.readFile(generatePromptFile);
    const prompt = streamReader.then((buffer) =>
      new TextDecoder().decode(buffer)
    );

    return prompt;
}