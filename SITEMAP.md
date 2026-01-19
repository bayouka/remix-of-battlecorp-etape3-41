# Battlecorp Launchpad — SITEMAP (v1)

## Locales

- FR: `/fr`

- EN: `/en`

- Règle i18n: prefix-based. Le switch de langue fait un **swap-prefix-only** et conserve `pathname + search + hash`.

## Routes autorisées (canoniques, non traduites)

### Pages locales

- `/fr` — Home (sections: hero, wargame, two-views, loop, battlefield, playstyle, faq, progress)

- `/en` — Home

### Pages système (slugs non traduits)

- `/fr/terms` — Terms

- `/en/terms`

- `/fr/privacy` — Privacy

- `/en/privacy`

- `/fr/cookies` — Cookies

- `/en/cookies`

## 404

- Catch-all local: `/fr/*` et `/en/*`

- Catch-all global: `*` (fallback vers une page 404, jamais page blanche)

## Règles liens

- Interdit: `href="#"`.

- Externes: `target="_blank"` + `rel="noopener noreferrer"`.
