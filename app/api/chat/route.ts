import { xai } from "@ai-sdk/xai";
import { convertToCoreMessages, streamText } from "ai";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: xai("grok-vision-beta"),
    system:
      "do not respond on markdown or lists, keep your responses brief, you can ask the user to upload images or documents if it could help you understand the problem better",
    messages: convertToCoreMessages(messages),
  });

  return result.toDataStreamResponse();
}
