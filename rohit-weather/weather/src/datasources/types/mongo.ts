import { GSContext,  GSDataSource, GSStatus, PlainObject,} from "@godspeedsystems/core";
// import { v4 as uuidv4 } from 'uuid';
// import mongoose from 'mongoose';
import { MongoClient } from 'mongodb'

  export default class DataSource extends GSDataSource {
  protected async initClient(): Promise<object> {
      try {
        const url = 'mongodb+srv://rohitkoktarebugatti:rohit5211@cluster0.ceeahzt.mongodb.net/test';
        const client = new MongoClient(url);
        const dbName = 'myProject';
        await client.connect();
        // console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('documents');
        return collection
      } catch (error) {
      throw error;
      }
  }

  async execute(ctx: GSContext, args: PlainObject): Promise<any> {
      
      try {
    
        const {id,fact,length,meta:{fnNameInWorkflow,entityType}} = args;

        let method = fnNameInWorkflow.split('.')[2];
        if(this.client){
            if(method == 'createOne'){
                const res = await this.client.insertOne({ _id:id ,_fact: fact,_length: length});
                return res;
            }
        }else{
            return "No client available"
        }
        
      } catch (error) {
        throw error;
      }
  }
  }
  const SourceType = 'DS';
  const Type = "mongo"; 
  const CONFIG_FILE_NAME = "mongo";
  const DEFAULT_CONFIG = {};

  export {
    DataSource,
    SourceType,
    Type,
    CONFIG_FILE_NAME,
    DEFAULT_CONFIG
  }