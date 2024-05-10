import { PluginAction } from "../..";
import * as vscode from "vscode";
import generateAction from "../generate-action";
import aiClientService from "../../../../../functions/services/ai-client-service/ai-client.service";
import promptService, {
  PromptAction,
} from "../../../../../functions/services/prompt-service/prompt.service";
import { ChatCompletionSystemMessageParam } from "openai/resources/index.mjs";
import useEnvVar from "../../../../../utils/useEnvVar";
import { Strategy } from "..";

export default async function (
  request: Strategy,
  history: any[],
  extensionContext: vscode.ExtensionContext
) {
  if (request.action !== PluginAction.HELP) {
    return generateAction(request, history, extensionContext);
  }

  const { apiKey, model } = useEnvVar();

  if (!apiKey || apiKey === "") {
    vscode.window.showInformationMessage(
      "Please set your api key in the settings (ai-generate-code)!"
    );
    return "Please set your api key in the settings! (ai-generate-code)";
  }

  const prompt = request.message;
  let sysPrompt: ChatCompletionSystemMessageParam | undefined = undefined;

  if (history.length === 0)
    sysPrompt = {
      content: await promptService({
        context: extensionContext,
        action: PromptAction.HELP,
      }),
      role: "system",
    };

  const messages =
    history.length === 0 && sysPrompt !== undefined
      ? [sysPrompt]
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
}
