import * as vscode from "vscode";
import chat from "./core/usecases/chat";
import useEnvVar from "./core/utils/useEnvVar";

const history: any[] = [];

export async function activate(context: vscode.ExtensionContext) {
  const { apiKey } = useEnvVar();
  if (!apiKey || apiKey === "") {
    vscode.window.showInformationMessage(
      "Please set your api key in the settings!"
    );
  }
  await chat(context, history);
  let disposable = vscode.commands.registerCommand(
    "ai-code.generateFile.history",
    () => {
      vscode.window.activeTextEditor?.edit((editBuilder) => {
        editBuilder.insert(new vscode.Position(0, 0), history.toString());
      });
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
