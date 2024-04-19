import { ChatCompletionChunk } from "openai/resources/index.mjs";
import { Stream } from "openai/streaming.mjs";

export default async function (steam: Stream<ChatCompletionChunk>) : Promise<string>{
    let responseNormalized = "";
    for await (const message of steam) {
        responseNormalized += message.choices[0]?.delta?.content || "";
    }    
    return responseNormalized;
}
