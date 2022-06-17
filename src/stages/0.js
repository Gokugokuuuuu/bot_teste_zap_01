import { storage } from '../storage.js';

export const initialStage = {
  exec({ from }) {
    storage[from].stage = 1;

    return '👋 Olá, como vai? \n\nEu sou Carlos, o *assistente virtual* EDSON NET. \n*Posso te ajudar?* 🙋‍♂️ \n-----------------------------------\n1️⃣ - ```FAZER PEDIDO``` \n2⃣ - ```FALAR COM ATENDENTE```';
  },
};
