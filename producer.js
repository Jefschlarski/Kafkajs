const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-producer',
  brokers: ['localhost:9092']  // Adicione os endereços dos brokers do seu cluster Kafka
});

const producer = kafka.producer();

async function run() {
  await producer.connect();

  await producer.send({
    topic: 'teste',
    messages: [
      { value: 'Mensagem 1' },
      { value: 'Mensagem 2' }
    ]
  });

  await producer.disconnect();
}

run().catch(console.error);
