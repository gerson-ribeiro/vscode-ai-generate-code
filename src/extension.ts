import * as vscode from "vscode";
import chat from "./core/usecases/chat";
import useEnvVar from "./core/utils/useEnvVar";

export async function activate(context: vscode.ExtensionContext) {
  const { apiKey } = useEnvVar();
  if (!apiKey || apiKey === "") {
    vscode.window.showInformationMessage(
      "Please set your api key in the settings!"
    );
  }
  await chat(context);
}

export function deactivate() {}
