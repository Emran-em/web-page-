import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { RESUME_DATA, EXPERIENCE, SKILLS, EDUCATION } from "../constants";

// Construct the system prompt with resume context
const RESUME_CONTEXT = `
You are an AI Assistant for MD Waseem's professional portfolio. 
Here is Waseem's resume data:

Name: ${RESUME_DATA.name}
Role: ${RESUME_DATA.title}
Location: ${RESUME_DATA.contact.location}
Contact: ${RESUME_DATA.contact.email}, ${RESUME_DATA.contact.phone}
Summary: ${RESUME_DATA.summary}

Skills:
${SKILLS.map(s => `- ${s.name} (${s.category}): ${s.description}`).join('\n')}

Experience:
${EXPERIENCE.map(e => `
- Company: ${e.company}
- Role: ${e.role}
- Period: ${e.period}
- Location: ${e.location}
- Highlights:
${e.description.map(d => `  * ${d}`).join('\n')}
`).join('\n')}

Education:
${EDUCATION.map(e => `- ${e.degree} at ${e.institution} (${e.period})`).join('\n')}

INSTRUCTIONS:
1. Answer questions as if you are a helpful assistant representing Waseem.
2. Be professional, concise, and enthusiastic.
3. Only answer questions related to Waseem's professional background, skills, and experience.
4. If asked for contact info, provide the email or LinkedIn.
5. Keep answers short (under 3-4 sentences) unless asked for details.
`;

let ai: GoogleGenAI | null = null;

const getAIClient = (): GoogleGenAI => {
  if (!ai) {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("API_KEY not found in environment variables. Chat features may not work.");
    }
    ai = new GoogleGenAI({ apiKey: apiKey || 'dummy-key-for-build' });
  }
  return ai;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const client = getAIClient();
    const model = 'gemini-2.5-flash'; 

    const response: GenerateContentResponse = await client.models.generateContent({
      model: model,
      contents: message,
      config: {
        systemInstruction: RESUME_CONTEXT,
      }
    });

    return response.text || "I'm sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I'm currently having trouble connecting to my brain. Please try again later.";
  }
};
