import { Server } from "./server";
import { Client, Databases,Account,Functions , ID } from "appwrite";
// Init  Web SDK
const client = new Client();
client
    .setEndpoint('https://cloud.appwrite.io/v1') //  Appwrite Endpoint
    .setProject(Server.project) //  project ID
;

const databases = new Databases(client);
const account = new Account(client);
const functions = new Functions(client);

let api = {

  /**
   * Authentication
   **/

  createAccount: (email, password, name) => {
    console.log(account)
    return account.create('unique()', email, password, name);
  },

  getAccount: () => {
    return account.get();
  },

  getCurrentSession: () => {
    return account.getSession('current');
  },

  createSession: (email, password) => {
    return account.createSession(email, password);
  },

  deleteCurrentSession: () => {
    return account.deleteSession('current');
  },

  login: (email, password) => {
    return api.createSession(email, password).then((session) => {
      return api.getAccount().then((account) => {
        return {
          account: account,
        };
      });
    });
  },

  /**
   * Database
   */
  listDocuments: (collectionId, queries, limit, offset, cursor, cursorDirection, orderAttributes, orderTypes) => {
    return databases.listDocuments(collectionId, queries, limit, offset, cursor, cursorDirection, orderAttributes, orderTypes)
  },

  getDocument: (collectionId, documentId) => {
    return databases.getDocument(collectionId, documentId);
  },


  /**
   * Functions
   */
  createExecution: (functionId, data, isAsync = true) => {
    return functions.createExecution(functionId, data, isAsync);
  },

  getExecution: (functionId, executionId) => {
    return functions.getExecution(functionId, executionId);
  },

};

export default api;