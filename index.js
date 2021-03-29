const Block = require('./src/Block')
const Blockchain = require('./src/Blockchain')

let baileyCoin = new Blockchain()

baileyCoin.addBlock(new Block(1, '3/28/2021', { amount: 2 }))
baileyCoin.addBlock(new Block(2, '3/28/2021', { amount: 10 }))

console.log('Is blockchain valid?', baileyCoin.isChainValid())

baileyCoin.chain[1].data = {amount: 100}

console.log('Is blockchain valid?', baileyCoin.isChainValid())

// console.log(JSON.stringify(baileyCoin))