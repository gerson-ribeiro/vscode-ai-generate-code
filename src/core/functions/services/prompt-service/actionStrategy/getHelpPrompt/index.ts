import * as vscode from "vscode";
import { PromptAction } from "../../prompt.service";

export default function (action: PromptAction, context: vscode.ExtensionContext) {
    if(action !== PromptAction.HELP)
        return `I want to ask you something`;


    const helpPromptFile = vscode.Uri.joinPath(
      context.extensionUri,
      "core",
      "prompt",
      "help.txt"
    );

    const streamReader = vscode.workspace.fs.readFile(helpPromptFile);
    const prompt = streamReader.then((buffer) =>
      new TextDecoder().decode(buffer)
    );

    return prompt;
}
