[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Ianfield77/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Ianfield77/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

# GTA 6 meme on X

My entry for the make.fun bounty "Post a GTA 6 meme on X"
(gta6-meme-x-01). The meme is `meme.png`.

## The joke

A GTA fan has been sitting on a Vice City beach since 2013, watching the
sunset next to a tower of old calendars. Thirteen years of waiting for
GTA 6. The make.fun ghost sits beside him on the sand like a beach ball,
holding its star coin, because while he waited, make.fun paid him to wait.

Top caption: "13 YEARS WAITING FOR GTA 6".
Bottom caption: "MAKE.FUN PAYS ME TO WAIT".

## The post

The meme is posted on X from @Ianfield77 with the bounty link, a tag of
@makefunai, and the entrant's play code. The post's address lives in
`POST.json` (a placeholder of zeroes until the post is up, then it is
replaced with the real status URL).

## How main.ts works

`main.ts` is the entrypoint. It does one thing: it copies `POST.json`
from the repository into the output directory (`MAKEFUN_OUTPUT_DIR`,
default `out`), so the house can read the post's address. It uses only
the Node.js standard library, touches no network, reads no clock, and
prints nothing on success.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT. See `LICENSE`.
