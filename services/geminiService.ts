
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are Axio, the Lead Solutions Architect at Axionera. 
Your goal is to assist potential clients in defining their project scope, choosing the right technology stack, and understanding how Axionera can help.

Axionera specializes in:
- Custom Software Development (Enterprise, Web, Mobile)
- Cloud & DevOps Solutions (AWS, Azure, GCP)
- AI & Data Analytics (Machine Learning, Automation)
- Digital Strategy & Modernization

Tone: Professional, innovative, helpful, and concise. 
If a user asks for a quote, explain that specific pricing depends on complexity but we focus on delivering high ROI.
Always encourage them to book a discovery call via the contact form for a detailed proposal.
`;

export const getGeminiResponse = async (userMessage: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history,
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a brief technical glitch. Please try again or reach out to the Axionera team directly!";
  }
};
