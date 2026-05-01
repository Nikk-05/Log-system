import { Client } from '@elastic/elasticsearch';

export const esClient = new Client({
  node: 'http://localhost:9200'
});


export const createIndex = async () => {
    try {
      const exists = await esClient.indices.exists({ index: 'logs' });
  
      if (!exists) {
        await esClient.indices.create({
          index: 'logs',
          mappings: {
            properties: {
              level: { type: 'keyword' },
              message: { type: 'text' },
              resourceId: { type: 'keyword' },
              timestamp: { type: 'date' }
            }
          }
        });
  
        console.log('✅ Index created');
      }
    } catch (err) {
      console.log("⚠️ Elasticsearch not available");
    }
  };