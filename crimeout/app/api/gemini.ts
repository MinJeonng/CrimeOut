import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(`${process.env.NEXT_PUBLIC_API_KEY}`);

export async function isCrime(msg: string) {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const prompt = `${msg} 이 메세지가 피싱일 확률 숫자로만 대답해줘`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return text;
}

export async function getExample() {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const prompt = `최근 피싱, 스미싱 사례 알려줘`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return text;
}

export async function useGemini(msg: string) {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const prompt = `피싱, 스미싱관련 : ${msg}`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return text;
}
