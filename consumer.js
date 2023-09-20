const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-producer',
  brokers: ['localhost:9092']  // Adicione os endereços dos brokers do seu cluster Kafka
});

const consumer = kafka.consumer({ groupId: 'my-group' });

async function run() {
  await consumer.connect();
  await consumer.subscribe({ topic: 'teste', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message.value.toString(),
      });
    },
  });
}

run().catch(console.error);
