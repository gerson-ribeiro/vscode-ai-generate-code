import * as vscode from "vscode";
import aiClientService from "../../../../../functions/services/ai-client-service/ai-client.service";
import useEnvVar from "../../../../../utils/useEnvVar";
import { Strategy } from "..";

export default async (
  request: Strategy,
  history: any[],
  extensionContext: vscode.ExtensionContext
) => {
  const { apiKey, model } = useEnvVar();
  const prompt = request.message;
  if (!apiKey || apiKey === "") {
    vscode.window.showInformationMessage(
      "Please set your api key in the settings (ai-generate-code)!"
    );
    return "Please set your api key in the settings! (ai-generate-code)";
  }
  const messages =
    history.length === 0
      ? []
      : history.map(({ role, content }) => ({ role, content }));

  const aiClient = await aiClientService({
    apiKey,
    settings: {
      model,
      messages,
      stream: false,
    },
  });
  return await aiClient.completion(prompt);
};
