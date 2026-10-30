# Agent guide

Instructions for every coding agent in this repository (Claude Code reads them through `CLAUDE.md`).

Static photo gallery, **part 4 of 4**, for Ariel Tzur Musatov's brit party (Hebrew UI, Jan 2025). Live at https://evgeny94.github.io/ariel_brit_party_4/ via GitHub Pages: branch `main`, root folder, legacy build, no workflow file. **Every push to `main` deploys immediately.**

## This repo is one of four linked sites

The sibling repos `ariel_brit_party_1` … `ariel_brit_party_4` are expected next to this one (in `Repos/ariel_brit_party/`). They share identical `styles.css`, `script_txt.js`, `images.txt` and `hatching-chick.svg`. Their `index.html` and `script.js` differ only in the part number and the photo range. The nav in `index.html` (it appears twice, in the header and below the gallery) hard-codes absolute links to all four Pages sites. **Any change to nav, styling or gallery logic must be made in all four repos and pushed in all four.**

Check that the copies are in sync, and roll out a shared change (run from the parent `ariel_brit_party/` folder):
```bash
md5sum */styles.css */script_txt.js */images.txt */hatching-chick.svg   # expect 4 identical hashes per file
diff ariel_brit_party_1/index.html ariel_brit_party_2/index.html        # expect only the <h1> part number
diff ariel_brit_party_1/script.js  ariel_brit_party_2/script.js         # expect only startIndex/totalImages
# after committing and pushing all four, confirm each deploy reports "built":
for i in 1 2 3 4; do gh api repos/evgeny94/ariel_brit_party_$i/pages/builds/latest -q '"\(.status) \(.created_at)"'; done
```
Large pushes (new photos) are slow, so push one repo at a time.

The photos were split across four repos because each part is ~650–700 MB and GitHub Pages limits a site to 1 GB. Check `du -sh images` before adding photos.

## How the gallery works

- `index.html` loads `script.js`, which builds the gallery into `#gallery` with a loop from `startIndex` to `totalImages` (this part: **264–349**). Photo numbering runs across all four parts, so the ranges must not overlap or leave gaps.
- Each item shows a lazy-loaded thumbnail from `images/thumbnails/ariel_musatov_<n>.jpg` and links (with `download`) to the full image `images/ariel_musatov_<n>.jpg`. Adding a photo means adding both files under the next number and raising `totalImages`. That shifts the ranges of the later parts.
- The download badge uses the Font Awesome 6 CDN stylesheet linked in `<head>`.
- `script_txt.js` + `images.txt` are **unused**. They are an earlier version that loaded full-size images from postimg.cc URLs. `images.txt` lists all 349 photos.
- `images/thumbnails/` also holds leftover thumbnails for photos from earlier parts (numbers below 264). The page never requests them.

## Local preview

```bash
python -m http.server 8000   # then open http://localhost:8000
```
There is no build, lint or test tooling. The nav links point to the live sites, not to localhost.

## Keeping docs off the live site

`_config.yml` excludes `README.md`, `AGENTS.md` and `CLAUDE.md` from the GitHub Pages (Jekyll) build. When adding a new top-level doc or notes file, add it to that list, or it will be published. Don't add `.nojekyll`: that turns Jekyll off, and with it this exclude list.

## How to report back

End every reply, short ones too, with a plain-language summary and no jargon:
- **Before:** what the state was.
- **Now:** what changed. For site changes, also say whether the change is pushed (pushing to `main` = deployed) and give the live URL. If you checked the deploy, give its status.
- **WHAT TO DO:** what Evgeny has to do, numbered with the cheapest step first, or "nothing". It must be self-contained: file paths, commands, and a ready-to-paste prompt if a new session is needed. Never write "see my previous message"; repeat a step for as long as it is still the next one.

Also:
- Do everything you can yourself. Don't put work on Evgeny's list that you could do.
- When something is blocked (a permission, a login, a step that needs Evgeny's hands), say what was blocked and give the exact steps or a ready-to-paste snippet to unblock it.
- Ask questions as multiple choice with the recommended option first (in Claude Code, use the AskUserQuestion tool), not as plain-text questions.
- Reply in the language Evgeny writes in (Hebrew or English). Code, file names and docs stay in English.
- Keep delivery lean: one report at the end, and no extra plan or record files.
