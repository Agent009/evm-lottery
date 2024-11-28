# EVM Lottery

## lotteryToken

This contract holds the tokens that are used in the ballot.

### Testing

```bash
npm run token:test # deploy locally for testing purposes
```

### Deployment

To begin, deploy the contract:

```bash
npm run token:deploy # deploy to testnet
```

Then, store the token contract address in the `LOTTERY_TOKEN_SEPOLIA` environment variable for consequent operations.

#### Minting

```bash
npm run token:mint TARGET_ADDRESS MINT_AMOUNT
```

For example:

```bash
npm run token:mint 0xf5A39511d4E3D92059270B6388564846B675C3Ed 1000000000000000000000
```

## Scripts

```bash
npm run hh:test
npm run nqr:test
npm run pr:test
npm run random:test
```
