import { storage } from '../storage.js';

export const stageFour = {
  exec({ from, message }) {
    const address = storage[from].address;
    const phone = from.split('@');

    storage[from].stage = 5;
    let desserts = '';
    const itens = storage[from].itens;
    itens.map((item, index) => {
      if (index == itens.length - 1) {
        desserts += item.description + '.';
      } else {
        desserts += item.description + ', ';
      }
    });
    const total = storage[from].itens.length;

    return `š *NOVO PEDIDO* š: \n\nš Cliente: +${
      phone[0]
    } \nš Logins vpns e iptv: *${desserts} \nš° Valor dos logins: *${
      total * 
    },00 reais*. \nā³ Tempo de entrega: *3 minutos*. \nš Detalhes: *${message}*`;
  },
};
