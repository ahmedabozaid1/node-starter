
class DBClient {
  static #instance;
  constructor(prisma) {
    this.prisma = prisma
  }

  static getInstance = () => {
    if (!DBClient.#instance) {
       throw new Error("DBClient has to be initialized first")
    }
    return DBClient.#instance
  }
   static initialize = (prisma) => {
      DBClient.#instance = new DBClient(prisma)
    return DBClient.#instance
  }
}

exports.DBClient = DBClient;