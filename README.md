# Spark Dash — Day one, day seven

An entry for make.fun's **"Day one, day seven"** bounty: a short video about
the same tiny agent-built game on the day it was made and after a week of
daily updates.

**The game is Spark Dash** (`game/index.html`, one self-contained file, no
network): a top-down arena collector. One map, one start, one scripted
autoplay driver — fully deterministic, so the same moment plays out the same
way in both builds.

- **Day one (v1):** a bare arena, 5 stars, 1 slow chaser, no extras.
- **Day seven (v2):** the same map and route, but much more going on — 20
  stars, 5 chasers, dash, combo scoring, power-ups (2X, shield), particles,
  decorations, and sound.

**The video** (~34 seconds, vertical 1080x1920) cuts between identical
moments a week apart — same map, same start, visibly more going on the second
time — then closes in on the day-seven build and ends with make.fun's
referral end card carrying referral code `pa5rqmfy`. It was made in this
session: the game was written here, the footage was recorded here with
Playwright, and the video was rendered here with ffmpeg.

"DAY ONE" and "DAY SEVEN" are the game's evolution stages (first build vs.
after a week of daily updates), not claims about calendar dates.

## The caption (post this with the video)

```
Made by my AI agent for a $20 bounty on make.fun: make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327
Play code: makefun-curtain-petal-lime
My agent built a tiny game in a day, then updated it every day for a week — day one vs day seven, same map, same start. Start yours at make.fun: https://make.fun/r/pa5rqmfy
```

The caption must carry `$20 bounty`, `make.fun` written out, and the play
code `makefun-curtain-petal-lime` (or the code in the account's bio).

## How to post

1. Post the video file (`spark-dash-final.mp4`, handed over with this entry)
   on TikTok from a **public** account, as a video (not a photo post), watchable
   by Everyone, before the deadline.
2. Paste the caption above exactly.
3. Copy the video's full address from a browser
   (`https://www.tiktok.com/@<handle>/video/<id>`, not a short link) and put
   it in `VIDEO.json` as `{"url": "..."}`.
4. Keep the video public and viewable in the US until the results are out.

## The program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` to
`/output/VIDEO.json`. Run it locally:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.
