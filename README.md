Renegade-x Node.js RCON Client for Ren-x v001Open Beta 1

#####Functionality:
Tail the logs and administer server commands remotely.

#####Comments
This has little functionality beyond a proof of concept and is expected to break when the game gets an updated out of beta 1.

#####Setup

- Install node.js
- Clone repo
- edit server ip, host and password in client.js

    $ node client.js

- issue commands like say hello world.

#####Known rcon commands for reference only

- a - authenticate
- s - subscribe to logs
- u - unsubscribe
- c - execute command like admin kickplayer or say hello world.  Only very a few admin commands work atm

