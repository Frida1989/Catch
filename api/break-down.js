import { GoogleGenAI } from "@google/genai";

// Connect to Gemini with the secret API key
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { title, description } = req.body;
  if (!title || !title.trim()) {
    return res.status(400).json({ error: "Title is required" });
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",

      contents: `
Task title: ${title}

Task description: ${description || "No description provided"}

Break this task into exactly 3 small, clear and realistic next steps.

Each step should:
- start with an action
- be short
- be practical
- help the user make progress
      `,

      // Ask Gemini to return an array with exactly 3 strings
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: "array",
          items: {
            type: "string",
          },
          minItems: 3,
          maxItems: 3,
        },
      },
    });

    const steps = JSON.parse(response.text);

    return res.status(200).json({ steps });
  } catch (error) {
    console.error("Gemini API error:", error);

    return res.status(500).json({
      error: "Could not generate steps",
    });
  }
}
