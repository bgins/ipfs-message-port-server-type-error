// import { create } from "ipfs"
import { create } from "ipfs-core"
import { Server, IPFSService } from "ipfs-message-port-server"

const ipfs = await create()
const service = new IPFSService(ipfs)
const server = new Server(service)