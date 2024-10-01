import { openai } from '@ai-sdk/openai';

export default async function handler(req, res) {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: "Prompt is required" });
    }

    try {
        const { text } = await openai.generateText({
            model: openai('gpt-4-turbo'),
            prompt,
        });

        res.status(200).json({ text });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
