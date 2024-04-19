import * as vscode from "vscode";
import { PluginAction } from "../..";

export default async function (request: vscode.ChatRequest): Promise<string> {
    return "To use this plugin, you can type the following commands:\n\n" +
        `1. /${PluginAction.EXPLAIN_PLUGIN} - to get an explanation of the plugin\n` +
        `2. /${PluginAction.GENERATE_CODE} - to generate code using the plugin\n` +
        `3. /${PluginAction.HELP} - to get help with any bugs do you have\n`;
}