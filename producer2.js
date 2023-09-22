const { Kafka, Partitioners } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'jef2',
  brokers: ['localhost:9092'],
  createPartitioner: Partitioners.LegacyPartitioner // Adicione esta linha
});

const producer = kafka.producer();

async function run() {
  await producer.connect();

  // Enviando mensagem com uma chave de partição (partition key)

  await producer.send({
    topic: 'topicName',
    messages: [
      { value: 'Mensagem 2', key: '123458' }
    ]
  });



  await producer.disconnect();
}

run().catch(console.error);
