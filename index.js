const Block = require('./src/Block')
const Blockchain = require('./src/Blockchain')

let baileyCoin = new Blockchain()

console.log('Mining block 1...')
baileyCoin.addBlock(new Block(1, '3/28/2021', { amount: 2 }))

console.log('Mining block 2...')
baileyCoin.addBlock(new Block(2, '3/28/2021', { amount: 10 }))