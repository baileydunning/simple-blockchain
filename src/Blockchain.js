const Block = require('./Block')

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()]
    this.difficulty = 1
  }

  createGenesisBlock() {
    return new Block(0, new Date(), 'Genesis Block', '0')
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1]
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash
    newBlock.mineBlock(this.difficulty)
    this.chain.push(newBlock)
  }

  isChainValid() {
    for(let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i]
      const previousBlock = this.chain[i - 1]

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false
      } else if (currentBlock.previousHash !== previousBlock.hash) {
        return false
      }

      return true
    }
  }
}

module.exports = Blockchain