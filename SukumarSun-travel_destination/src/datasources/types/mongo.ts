import { GSContext,  GSDataSource, GSStatus, PlainObject} from "@godspeedsystems/core";
import { MongoClient, MongoClientOptions } from 'mongodb';

export default class DataSource extends GSDataSource {
    private databaseName: string;
    private collectionName: string;

    constructor(config: PlainObject) {
        super(config);
        this.databaseName = 'Cluster0'; 
        this.collectionName = 'Post'; 
    }
    protected async initClient(): Promise<MongoClient> {
        const url:any=process.env.MONGO_TEST_URL;
        const options = {
            useUnifiedTopology: true,
        } as MongoClientOptions;
        const client = new MongoClient(url, options);
        client.connect().then(() => this.client);
        return client
    }
    async execute(ctx: GSContext, args: PlainObject): Promise<any> {
        const {data, meta: {fnNameInWorkflow}} = args;
        const method = fnNameInWorkflow.split('.')[2];
        try {
            // Ensure the MongoDB client is initialized
            if (this.client) {
                const database = this.client.db(this.databaseName);
                const collection = database.collection(this.collectionName);
                const response = await collection[method](data);
                return Promise.resolve(new GSStatus(true, 200, undefined, data));
            }

        } catch (error) {
            throw error;
        }
    }
}
