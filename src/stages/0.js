import { storage } from '../storage.js';

export const initialStage = {
  exec({ from }) {
    storage[from].stage = 1;

    return 'ð OlÃ¡, como vai? \n\nEu sou Carlos, o *assistente virtual* EDSON NET. \n*Posso te ajudar?* ðââï¸ \n-----------------------------------\n1ï¸â£ - ```FAZER PEDIDO``` \n2â£ - ```FALAR COM ATENDENTE```';
  },
};
