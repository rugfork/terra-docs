# Validator migration guide

Follow this guide to become a validator on the Terra 2.0 chain. This guide walks you through making a `gentx` file that will be added to the validator chain. A `gentx` is a special transaction included in the genesis file that accomplishes three things:

1. Registers your validator account as a validator operator account.
2. Self-delegates the specified amount of LUNA tokens for staking.
3. Links the validator operator account with a Tendermint node pubkey used to sign blocks.

All validators that want to be included in the Terra 2.0 chain must follow the steps below.

## Networks

- Terra 2.0 testnet: `pisco-1`
- Terra 2.0 mainnet: `phoenix-1`

## Prerequisites

- [Terra Core]([https://github.com/terra-money/core](https://github.com/terra-money/core))
- [Go 1.18+](https://go.dev/dl/)
- [Full node tutorial]([https://docs.terra.money/docs/full-node/run-a-full-terra-node/README.html](https://docs.terra.money/docs/full-node/run-a-full-terra-node/README.html))

## Supplemental Resources

- [Official Terra V2 Validator Genesis Guide](https://github.com/terra-money/genesis-tools/blob/main/LAUNCH.md)
- [Cosmos SDK: How to run a node](https://docs.cosmos.network/master/run-node/run-node.html)
- [What is GenTX](https://docs.cosmos.network/master/run-node/run-node.html#adding-genesis-accounts)
- [Validator tutorial](https://docs.terra.money/docs/full-node/manage-a-terra-validator/README.html)
    
## Timeline (Expected)

- Fri May 27 2022 18:00:00 GMT+0900 (KST)
- Thu May 27 2022 09:00:00 GMT+0000 (UTC)

    Share `preultimate-genesis.json` and start to collect gen_txs from the validators.

- Sat May 28 2022 12:00:00 GMT+0900 (KST)
- Sat May 28 2022 03:00:00 GMT+0000 (UTC)

    Finish collecting gen_txs and build & share `genesis.json`

- Sat May 28 2022 15:00:00 GMT+0900 (KST)
- Sat May 28 2022 06:00:00 GMT+0000 (UTC)

    Launch network



## Snapshot

This section covers how to take the pre- and post-attack snapshots. The following steps need to be run on your existing validator's machine. 

1\. Stop your `columbus-5` node:

```sh
sudo systemctl stop terrad
```

2\. Clone, checkout, and install the Terra Core Genesis state exporter:

```sh
git clone https://github.com/terra-money/core-genesis-exporter
cd core-genesis-exporter
make install
```

3\. Verify the exporter binary version:

```sh
terrad version --long
```

Which will return the following: 

```sh
core: <current-version>
git commit: <current-version>
go.sum hash: <current-version>
build tags: netgo ledger
```

4\. Take the pre-attack snapshot:

```sh
terrad export --height 7544910 > pre-attack-snapshot.json
```

5\. Take the post-attack snapshot:

```sh
terrad export --height 7790000 > post-attack-snapshot.json
```

6\. Verify the SHA256 hash of the (sorted) pre-attack & post-attack export snapshots:

```sh
# pre-attack
jq -S -c -M '' pre-attack-snapshot.json | shasum -a 256
<hash output>

# post-attack
jq -S -c -M '' post-attack-snapshot.json | shasum -a 256
<hash output>
```

## Penultimate Genesis

The following steps need to be run on the same machine as your [snapshot](#Snapshot).

1\. Clone and checkout genesis builder:

```sh
git clone https://github.com/terra-money/genesis-tools
```

2\. Move pre-attack and post-attack snapshots into `genesis-tools`:

```sh
mv ./pre-attack-snapshot.json ./post-attack-snapshot.json ./genesis-tools
```

3\. Run genesis builder script:

```sh
python3 ./genesis-builder.py \
    ./genesis-template.json \
    ./pre-attack-snapshot.json \
    ./post-attack-snapshot.json \
    ./genesis-validators.json \
    --genesis-time=2022-05-28T06:00:00.000000Z \
    --pretty=false --chain-id=phoenix-1 \
    > penultimate-genesis.json
```

4\. Verify the SHA256 of the (sorted) penultimate-genesis.json:

```sh
jq -S -c -M '' penultimate-genesis.json | shasum -a 256
[placeholder]
```

## Set up a new validator

Set up a new validator on a new machine by following the steps outlined in the [full node tutorial](https://docs.terra.money/docs/full-node/run-a-full-terra-node/README.html). 

After [configuring your general settings](https://docs.terra.money/docs/full-node/run-a-full-terra-node/configure-general-settings.html), continue to the next section. 

## GenTx

Complete the following steps on your new validator's machine. 

1\. Checkout and install the Terra 2.0 core:

```sh
# checkout and install
git clone https://github.com/terra-money/core
cd core
git checkout v2.0.0
make install
```

2\. Verify the binary version:

```sh
terrad version --long
core: v2.0.0
git commit: [placeholder]
go.sum hash: [placeholder]
build tags: netgo ledger
```

3\. Prepare your environment:

```sh
# install or move penultimate-genesis.json to server
wget [placeholder]

# move genesis to config location
mv ./penultimate-genesis.json ~/.terra/config/genesis.json
```

4\. Execute GenTx:

```sh
terrad gentx [key-name] [amount-to-stake] \
    --chain-id phoenix-1 \
    --min-self-delegation=[] \
    --security-contact=[] \
    --moniker=[] \
    --details=[] \
    --commission-rate=[] \
    ...
```

5\. Upload the generated GenTx file to this repository's gentx folder via PR:

```sh
ls ~/.terra/config/gentx/*
```

## Collect GenTxs

The following steps need to be run on the same machine as your [GenTx](#GenTx).

1\. Download gentx files and change into the terra home config:

```sh
git clone https://github.com/terra-money/genesis-tools
cd genesis-tools
mv ./gentx/* ~/.terra/config/gentx/
```

2\. Execute `collect-gentxs`:

```sh
terrad collect-gentxs
```

3\. Verify the SHA256 hash of the (sorted) final genesis:

```sh
jq -S -c -M '' ~/.terra/config/genesis.json | shasum -a 256
[placeholder]
```

## Launch Network

Execute the `terrad` binary on your new validator's machine and wait until network launch:

```sh
sudo systemctl start terrad
```
