Minimal reproduction of a type error when using `ipfs-message-port-server` with `ifps` or `ipfs-core`.

## Use

Install dependencies

```
yarn install
```

Compile

```
yarn build
```

## Result

Compilation fails with the following error:

```
$ tsc
src/worker.ts:7:27 - error TS2345: Argument of type 'IPFSService' is not assignable to parameter of type 'MultiService<{ dag: { ipfs: ...; put: ...; get: ...; resolve: ...; }; core: { ipfs: ...; addAll: ...; add: ...; cat: ...; ls: ...; }; files: { ipfs: ...; stat: ...; }; block: { ipfs: ...; get: ...; put: ...; rm: ...; stat: ...; }; }>'.
  The types of 'dag.ipfs' are incompatible between these types.
    Type 'IPFS<any>' is not assignable to type 'never'.

7 const server = new Server(service)
                            ~~~~~~~


Found 1 error in src/worker.ts:7
```