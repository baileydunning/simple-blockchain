import Block from './Block'

export default class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()]
  }

  createGenesisBlock() {
    return new Block(0, new Date(), 'Genesis Block', '0')
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1]
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash
    newBlock.hash = newBlock.calculateHash()
    this.chain.push(newBlock)
  }
}