
const dados = [
  { id: '1', nome: 'João', mensagem: 'Olá, como você está?' },
  { id: '2', nome: 'Maria', mensagem: 'Bom dia, tenha um excelente dia!' },
  { id: '3', nome: 'Pedro', mensagem: 'Espero que seu dia esteja indo bem!' },
  { id: '4', nome: 'Ana', mensagem: 'Como tem passado ultimamente?' },
  { id: '5', nome: 'Carlos', mensagem: 'Oi, fico feliz em vê-lo!' },
  { id: '6', nome: 'Laura', mensagem: 'Boa tarde, aproveite o resto do dia!' },
  { id: '7', nome: 'José', mensagem: 'Até mais, tenha um bom dia!' },
  { id: '8', nome: 'Mariana', mensagem: 'Tenha um dia maravilhoso e produtivo!' },
  { id: '9', nome: 'Rafael', mensagem: 'Como posso te ajudar hoje?' },
  { id: '0', nome: 'Camila', mensagem: 'Sinta-se à vontade para perguntar o que quiser!' },
  { id: '1', nome: 'João', mensagem: 'Estou muito feliz em vê-lo novamente!' },
  { id: '2', nome: 'Maria', mensagem: 'Que seu dia seja repleto de realizações!' },
  { id: '3', nome: 'Pedro', mensagem: 'Espero que esteja tudo indo bem com você!' },
  { id: '4', nome: 'Ana', mensagem: 'O que tem feito de interessante ultimamente?' },
  { id: '5', nome: 'Carlos', mensagem: 'Como posso ser útil para você hoje?' },
  { id: '6', nome: 'Laura', mensagem: 'Desejo uma ótima tarde para você!' },
  { id: '7', nome: 'José', mensagem: 'Até a próxima vez que nos falarmos!' },
  { id: '8', nome: 'Mariana', mensagem: 'Tenha um dia cheio de boas surpresas!' },
  { id: '9', nome: 'Rafael', mensagem: 'Estou à disposição para ajudar em qualquer coisa!' },
  { id: '0', nome: 'Camila', mensagem: 'Fique à vontade para explorar e perguntar!' },
  { id: '1', nome: 'João', mensagem: 'Que bom te ver por aqui mais uma vez!' },
  { id: '2', nome: 'Maria', mensagem: 'Que cada momento do seu dia seja especial!' },
  { id: '3', nome: 'Pedro', mensagem: 'Estou animado para conversar com você hoje!' },
  { id: '4', nome: 'Ana', mensagem: 'Como anda a sua jornada recentemente?' },
  { id: '5', nome: 'Carlos', mensagem: 'Estou aqui para o que precisar!' },
  { id: '6', nome: 'Laura', mensagem: 'Desejo uma tarde maravilhosa para você!' },
  { id: '7', nome: 'José', mensagem: 'Até logo, tenha um ótimo dia!' },
  { id: '8', nome: 'Mariana', mensagem: 'Tenha um dia incrível e produtivo!' },
  { id: '9', nome: 'Rafael', mensagem: 'Como posso tornar o seu dia melhor?' },
  { id: '0', nome: 'Camila', mensagem: 'Sinta-se à vontade para explorar tudo por aqui!' },
  { id: '1', nome: 'João', mensagem: 'Olá, que bom te ver de novo!' },
  { id: '2', nome: 'Maria', mensagem: 'Tenha um dia cheio de coisas boas!' },
  { id: '3', nome: 'Pedro', mensagem: 'Como está sendo o seu dia?' },
  { id: '4', nome: 'Ana', mensagem: 'Espero que esteja tudo bem com você!' },
  { id: '5', nome: 'Carlos', mensagem: 'Estou aqui para ajudar no que precisar!' },
  { id: '6', nome: 'Laura', mensagem: 'Boa tarde, aproveite o resto do dia!' },
  { id: '7', nome: 'José', mensagem: 'Até logo, tenha um dia maravilhoso!' },
  { id: '8', nome: 'Mariana', mensagem: 'Que seu dia seja produtivo e repleto de conquistas!' },
  { id: '9', nome: 'Rafael', mensagem: 'Como posso fazer a diferença no seu dia?' },
  { id: '0', nome: 'Camila', mensagem: 'Sinta-se à vontade para explorar e tirar suas dúvidas!' },
  { id: '1', nome: 'João', mensagem: 'Olá, é um prazer te ver de novo!' },
  { id: '2', nome: 'Maria', mensagem: 'Tenha um dia maravilhoso e cheio de alegrias!' },
  { id: '3', nome: 'Pedro', mensagem: 'Como está sendo o seu dia até agora?' },
  { id: '4', nome: 'Ana', mensagem: 'Espero que tudo esteja indo bem com você!' },
  { id: '5', nome: 'Carlos', mensagem: 'Oi, estou aqui para te ajudar!' },
  { id: '6', nome: 'Laura', mensagem: 'Desejo uma tarde incrível para você!' },
  { id: '7', nome: 'José', mensagem: 'Até a próxima, tenha um excelente dia!' },
  { id: '8', nome: 'Mariana', mensagem: 'Que o seu dia seja repleto de realizações!' },
  { id: '9', nome: 'Rafael', mensagem: 'Estou aqui para tornar o seu dia mais fácil!' },
  { id: '0', nome: 'Camila', mensagem: 'Sinta-se à vontade para explorar e perguntar o que quiser!' }
]

for (let i = 0; i < dados.length; i++) {
const { Kafka, Partitioners } = require('kafkajs');
const kafka = new Kafka({
  clientId: dados[i].nome,
  brokers: ['localhost:9092'],
  createPartitioner: Partitioners.LegacyPartitioner 
});

const producer = kafka.producer();

async function run() {
  await producer.connect();

  // Enviando mensagem com uma chave de partição (partition key)
  await producer.send({
    topic: 'topicName',
    messages: [
      { value: dados[i].mensagem, key: dados[i].id, 
        headers: {
        'token': dados[i].id,
      }}
    ]
  });

  await producer.disconnect();
}
run().catch(console.error);
}