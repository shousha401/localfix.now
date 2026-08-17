# ShoushaTV demo capture assets

Files for capturing the three portfolio screenshots (`shoushatv-home.png`,
`shoushatv-guide.png`, `shoushatv-player.png`) with **zero real channel names,
logos, or brands** — the app's public claim is that it ships empty, so the
captures must only ever show this generic demo content.

- `shoushatv-demo.m3u` — 7 channels with generic names ("Demo News HD", "Demo
  Sports", …), each pointed at a well-known public **test** HLS stream (Apple
  bipbop test patterns, Mux test streams, the open movie Tears of Steel, a
  JW Player sample). All URLs verified responding 200 with a valid `#EXTM3U`
  manifest on 2026-08-16.
- `shoushatv-demo.xmltv` — matching guide data for the same 7 channel ids:
  48 hours of generic 2-hour blocks ("Morning Show", "Feature Film", "Cartoon
  Block", …) starting **2026-08-16 06:00 PT**. If you capture after 2026-08-18,
  edit the `start`/`stop` dates (format `YYYYMMDDHHMMSS +0000`, UTC) so the EPG
  grid renders full.

## Serving both files to the TV

The TV and this PC must be on the same network. From this `demo/` folder run
one of:

```bash
npx serve -l 8080 --cors .
```

```bash
python -m http.server 8080
```

Find this PC's LAN IP with `ipconfig` (the IPv4 address, e.g. `192.168.1.23`),
and allow the port through Windows Firewall if the TV can't connect (Windows
usually prompts on first run — choose Private networks).

## What to enter in the app on the TV

- **Playlist (M3U) URL:** `http://<LAN-IP>:8080/shoushatv-demo.m3u`
- **EPG (XMLTV) URL:** `http://<LAN-IP>:8080/shoushatv-demo.xmltv`

(The playlist's `url-tvg` header also points at the XMLTV — replace
`REPLACE-WITH-LAN-IP` in `shoushatv-demo.m3u` with the real IP if the app reads
the EPG URL from the playlist instead of a settings field.)

## Capture checklist

1. `shoushatv-home.png` — home screen with visible D-pad focus on a content rail
2. `shoushatv-guide.png` — the EPG grid, populated by the demo XMLTV
3. `shoushatv-player.png` — player UI (controls overlay or recovery state)

Then follow the publish steps in the repo root `SCREENSHOTS-TODO.md` (drop the
PNGs into `app/public/projects/`, `npm run optimize:images`, flip the staged
entry live in `projects.ts`).
