### Gemini-Clone
- I have integrated the gemini api with react js.
- In the src folder create a directory with name `config`.
- In the config folder create `gemini.js` file.
- [Create API Key](https://ai.google.dev/gemini-api?_gl=1*egufhf*_up*MQ..&gclid=EAIaIQobChMI6JrKoMr4hgMVPaVmAh2H7QT0EAAYASAAEgJ5xvD_BwE).
- Get code for the api and paste in `gemini.js`.

![Screenshot 2024-06-26 112814](https://github.com/Steffi-Wilson-Anthony/Gemini-Clone/assets/114890864/4a817412-582a-431a-a139-d0580999ff45)

![Screenshot 2024-06-26 113053](https://github.com/Steffi-Wilson-Anthony/Gemini-Clone/assets/114890864/30486bc8-a6e5-4923-82cb-cfc8978d77ee)


- install @google/generative-ai

### Create your api key here

![Screenshot 2024-06-26 113347](https://github.com/Steffi-Wilson-Anthony/Gemini-Clone/assets/114890864/1ca7d404-6310-4c1e-946a-dcfb24d69bc2)

### Code gemini.js

- Paste your api key in place of `your api key` in the code.

```
/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai"
  
  const apiKey = "your api key";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());
    return result.response.text();
  }
  
  export default run;
```
