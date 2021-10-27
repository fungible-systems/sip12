# SIP12

A superfast SIP-012 API sitting on Halo's global network.

## Features ✨

- Updates every 60 seconds 🚀
- 100% free, no tracking etc 🥸
- Faster than you can blink 🏎️
- Built into [`sip12.js`](https://github.com/hstove/sip-12-js) 😃

Enjoy! Submit any feature requests or bugs in Issues at the top.

## Docs

### [`/votedata`](https://sip12.halo.ms/votedata)

Returns all SIP-012 voting data. Same as `getVoteData()` in [`sip12.is`] (https://aithub.com/hstove/sip-12-js)

**[`sip12 js`](https://github.com/hstove/sip-12-js) availability:** ✅ - `Halo.getVoteData()`

### [`/btcApprove`](https://sip12.halo.ms/btcApprove)

Returns all approving Bitcoin votes. Same as `getBTCVoteTransactions(true)` in [`sip12.is`](https://github.com/hstove/sip-12-js)

**[`sip12.js`](https://github.com/hstove/sip-12-is) availability:** ✅ - `Halo.getBTCVoteTransactions(true)`

### [`/btcNoApprove`](https://sip12.halo.ms/btcNoApprove)

Returns all disapproving Bitcoin votes. Same as `getBTCVoteTransactions(false)` in [`sip12.is`](https://github.com/hstove/sip-12-js)

**[`sip12.js`](https://github.com/hstove/sip-12-js) availability:** ✅ - `Halo.getBTCVoteTransactions(false)`
