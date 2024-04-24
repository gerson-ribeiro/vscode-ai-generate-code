import * as vscode from "vscode";
import {
  CONFIG_APP_NAME,
  CONFIG_API_KEY_NAME,
  CONFIG_API_MODEL_NAME,
} from "../../constants";

export default function () {
  const defaultConfig = vscode.workspace.getConfiguration(CONFIG_APP_NAME);
  const apiKey: string = defaultConfig.get(CONFIG_API_KEY_NAME) ?? "";
  const model: string = defaultConfig.get(CONFIG_API_MODEL_NAME) ?? "gpt-3.5-turbo";

  return {
    apiKey,
    model,
  };
}
