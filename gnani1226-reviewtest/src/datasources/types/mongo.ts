import { GSContext,  GSDataSource, GSStatus, PlainObject,} from "@godspeedsystems/core";
import { v4 as uuidv4 } from 'uuid';
import { MongoClient } from 'mongodb'

  export default class DataSource extends GSDataSource {
  protected async initClient(): Promise<object> {
      try {
        const url = 'mongodb+srv://kondagnani060:gnani1226@godspeedwebsite.iuzv7pj.mongodb.net/testing';
        const client = new MongoClient(url);
        const dbName = 'reviwProject';
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('currency');
        return collection
      } catch (error) {
      throw error;
      }
  }

  async execute(ctx: GSContext, args: PlainObject): Promise<any> {
      
      try {
    
        const {base_code,conversion_rates,meta:{fnNameInWorkflow,entityType}} = args;

        let method = fnNameInWorkflow.split('.')[2];
        if(this.client){
            if(method == 'createOne'){
                const res = await this.client.insertOne({ _id:uuidv4 ,_base_code: base_code,_conversion_rates: conversion_rates});
                return res;
            }
          }
        else{
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