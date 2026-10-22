# KOR-0294 marketing site context

## Scope

- Independent public marketing and study site for released app `KOR-0294` only.
- App source is read-only: `/Users/youngjunma/Documents/various test prep apps project/services/kor/02/kor-0294`.
- Android package and iOS bundle identifier: `app.mcyj.examprep.kor0294`.
- Production target: `https://mcyj.github.io/tokl-korean-proficiency-exam-prep-web/`.

## Verified Store state — 2026-09-19

- Google Play resolves publicly for the exact package.
- Apple lookup resolves the exact bundle to track ID `6797335125` in KR, US and GB.
- Both official Store badges are active and use the same 194 × 75 px outer frame without distorting artwork.

## Content and official facts

- Korean and English routes with 10 substantive guides per locale.
- The official guide describes 90 items over two sessions: 60 minutes and 70 minutes, totaling 130 minutes.
- The format has 80 five-choice objective items and 10 written-response items for 200 total points; listening uses 30 minutes.
- Six domains are vocabulary, grammar, language rules, listening, reading and writing.
- Thinking indicators cover understanding, inference, criticism and creativity and are reported separately from the total score and level.
- The official guide states that levels are awarded from 121 total points; detailed thresholds must be checked against the current official guide.
- Score and credential validity is two years.
- The live schedule changes frequently, so the website links to the official schedule instead of hardcoding one test date.
- Canonical sources:
  - `https://www.tokl.or.kr/information/Tguide`
  - `https://www.tokl.or.kr/information/Tassess`
  - `https://www.tokl.or.kr/information/Ttime`
  - `https://www.tokl.or.kr/information/Treport`
  - `https://www.tokl.or.kr/receipt/schedule`

## Design and implementation

- Visual thesis: soft sage language cards on a warm cream surface, with sand accents connecting reading, listening and writing.
- Global Korean-safe wrapping uses `word-break: keep-all` and `overflow-wrap: break-word`.
- Dependency-free static generator; GitHub Actions builds, checks and deploys `dist/` to Pages.

## Verification log

- 2026-09-19: project initialized from the proven static-site system and retargeted to KOR-0294 content, app assets and exact Store identities.
- 2026-09-19: local build generated 34 indexable routes and 36 HTML files; metadata, internal links, exact Store identities, `keep-all`, equal marketplace frames and stale-content rejection passed.
- 2026-09-19: local HTTP QA returned 200 for all 34 sitemap routes and five key assets; an unknown route returned 404.
- 2026-09-19: live Store recheck returned Google Play 200 and Apple bundle `app.mcyj.examprep.kor0294`, track ID `6797335125`.
- 2026-09-19: GitHub Pages workflow run `35367558498` completed successfully.
- 2026-09-19: production QA returned 200 for all 34 sitemap routes and five key assets; an unknown route returned 404.
- 2026-09-19: production CSS contains global `word-break: keep-all` and the shared 194 × 75 px marketplace frame; the Korean home contains both exact public Store links.

## 2026-10-23 — SEO technical improvements

- Added dependency-free post-build SEO validation and enhancement: valid reciprocal language alternates, page-preserving language switching, source-backed Article identities/citations, BreadcrumbList, social text metadata, noindex on the utility 404, and priority for existing above-fold app imagery.
- Removed unverified structured-data offers where present. Preserved existing official-source verification dates, visible study content, app artwork, keep-all and equal marketplace badge frames.
- Public repository instructions were treated only as methodology; no external skill, tool, tracking, account connection, or scheduled action was installed.
