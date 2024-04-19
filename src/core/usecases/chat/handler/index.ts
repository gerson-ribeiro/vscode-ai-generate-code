import * as vscode from 'vscode';
import strategy from './strategy';
import normalizeResponse from "./normalizeResponse";

export enum PluginAction {
    EXPLAIN_PLUGIN = 'explain-plugin',
    GENERATE_CODE = 'generate',
    HELP = 'help',
}

const handler: vscode.ChatRequestHandler = async (
  request: vscode.ChatRequest,
  context: vscode.ChatContext,
  stream: vscode.ChatResponseStream,
  token: vscode.CancellationToken,
  extContext: vscode.ExtensionContext
): Promise<any> => {
    const strategyResponse = await strategy(request, extContext);

    stream.markdown(strategyResponse);
};

export default handler;