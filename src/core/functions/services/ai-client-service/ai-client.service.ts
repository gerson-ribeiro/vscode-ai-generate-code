import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions.mjs";

interface IOpenAIProps {
  apiKey: any;
  settings: {
    model: string;
    messages: Array<ChatCompletionMessageParam>;
    stream: boolean;
  };
}
export default async ({ apiKey, settings }: IOpenAIProps) => {
  const openai = new OpenAI({
    apiKey,
  });

  const completion = async (prompt: string) => {
    const { model, messages, stream } = settings;

    messages[1].role = "user";
    messages[1].content = prompt;
    const chatCompletionParams: OpenAI.Chat.ChatCompletionCreateParams = {
      model,
      messages,
      stream: false,
    };

    const gptResponse =
      await openai.chat.completions.create(chatCompletionParams);

    return gptResponse.choices.map((choice) => choice.message.content).join("\n");
  };

  return {
    completion
  };
};
