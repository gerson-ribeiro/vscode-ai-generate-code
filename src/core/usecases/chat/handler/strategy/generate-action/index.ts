import * as vscode from "vscode";
import { PluginAction } from "../..";
import explainPluginAction from "../explain-plugin-action";
import { ChatCompletionSystemMessageParam } from "openai/resources/index.mjs";
import promptService, {
  PromptAction,
} from "../../../../../functions/services/prompt-service/prompt.service";
import aiClientService from "../../../../../functions/services/ai-client-service/ai-client.service";
import {
  CONFIG_API_KEY_NAME,
  CONFIG_API_MODEL_NAME,
} from "../../../../../constants";
import useEnvVar from "../../../../../utils/useEnvVar";
export default async function (
  request: vscode.ChatRequest,
  extensionContext: vscode.ChatContext
) {
  if (request.command !== PluginAction.GENERATE_CODE) {
    return explainPluginAction(request);
  }

  const { apiKey, model } = useEnvVar();
  if (!apiKey || apiKey === "") {
    vscode.window.showInformationMessage(
      "Please set your api key in the settings (ai-generate-code)!"
    );
    return "Please set your api key in the settings! (ai-generate-code)";
  }

  const prompt = request.prompt;

  const sysPrompt: ChatCompletionSystemMessageParam = {
    content: await promptService({
      context: extensionContext,
      action: PromptAction.GENERATE,
    }),
    role: "system",
  };

  const messages = [sysPrompt];

  const aiClient = await aiClientService({
    apiKey,
    settings: {
      model,
      messages,
      stream: false,
    },
  });

  return await aiClient.completion(prompt);
}
