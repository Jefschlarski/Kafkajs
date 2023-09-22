const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'jef',
  brokers: ['localhost:9092']
});

const consumer = kafka.consumer({ groupId: '123' });

const idDesejado = '1';

const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'topicName', fromBeginning: false });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
        const header = message.headers['token'].toString()
        console.log(header)
      // const eventID = message.key.toString();
      // if (eventID === idDesejado) {
      //   console.log(`Evento com ID ${idDesejado} recebido: ${message.value.toString()}`);
      // }
    },
  });
};

run().catch(console.error);