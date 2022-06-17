import { storage } from '../storage.js';

export const stageThree = {
  async exec({ from, message, client }) {
    storage[from].address = message;
    storage[from].stage = 4;

    if (message === '*') {
      storage[from].stage = 0;
      return 'Pedido *CANCELADO* com sucesso. \n Volte Sempre!';
    }

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

    await client.sendText(
      message.from,
      `🗒️ *RESUMO DO PEDIDO*: \n\n🚀 Logins vpn e iptv: *${desserts}* \n📍 Nome de usuario: *${message}* \n💰 Valor total dos serviços: *${
        total * 6
      },00 reais*. \n⏳ Tempo de espera: *2 minutos*. \n\n` +
        '🔊 ```Agora, informe a forma de pagamento.```'
    );

    return '✅ *Prontinho, pedido feito!* \n\nAgora,aguarde um atendente le atender obg por comprar os serviços EDSON NET volte sempre :) \n\n⏳ *Aguarde um instante*.';
  },
};
