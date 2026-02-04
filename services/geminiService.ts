
import { GoogleGenAI, Type } from "@google/genai";
import { Recommendation } from "../types";

export const getBaristaRecommendation = async (mood: string, preferences: string): Promise<Recommendation> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Soy un cliente en "Café Algarrobo". Me siento ${mood} y prefiero sabores ${preferences}. Como un barista experto y elegante, recomiéndame una bebida de autor y un acompañamiento de repostería.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          drink: { type: Type.STRING, description: "Nombre de la bebida recomendada" },
          pairing: { type: Type.STRING, description: "Nombre del acompañamiento recomendado" },
          description: { type: Type.STRING, description: "Una breve explicación poética del porqué de esta elección." }
        },
        required: ["drink", "pairing", "description"]
      }
    }
  });

  return JSON.parse(response.text);
};
