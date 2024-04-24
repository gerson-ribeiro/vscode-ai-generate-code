import * as vscode from "vscode";
import handler from "./handler";

const AI_PARTICIPANT_ID = "ai-code.generator";

export default function (context: vscode.ExtensionContext) {
  const aiCode = vscode.chat.createChatParticipant(AI_PARTICIPANT_ID, handler);

  aiCode.iconPath = vscode.Uri.joinPath(
    context.extensionUri,
    "src",
    "assets",
    "icons",
    "plugin-chat-black-cat.jpg"
  );
}
