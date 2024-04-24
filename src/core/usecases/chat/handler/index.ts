import * as vscode from 'vscode';
import strategy from './strategy';

export enum PluginAction {
    EXPLAIN_PLUGIN = 'explain-plugin',
    GENERATE_CODE = 'generate',
    HELP = 'help',
}

const handler: vscode.ChatRequestHandler = async (
  request: vscode.ChatRequest,
  context: vscode.ChatContext,
  stream: vscode.ChatResponseStream,
  token: vscode.CancellationToken
): Promise<any> => {
    const strategyResponse = await strategy(request, context);

    stream.markdown(strategyResponse);
};

export default handler;