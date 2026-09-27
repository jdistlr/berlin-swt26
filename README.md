# BERLIN // SWT26

A tiny travel field system for three days in Berlin — because apparently a calendar was not enough.

[Open the live field system →](https://jdistlr.github.io/berlin-swt26/)

<p align="center">
  <img src="docs/berlin-field-system.png" width="390" alt="Mobile view of BERLIN // SWT26 showing the current state, next event and travel agenda.">
</p>

## Why

The page has one job: reduce thinking while moving.

It knows the trains, hotel, dinner, Snowflake World Tour, the Executive Briefing and the way home. Time turns that static plan into context: JETZT, ALS NÄCHSTES, LOS, countdowns and the small neon dot that answers *where am I in this thing?*

Everything else is intentionally quiet. Berlin still needs enough cognitive bandwidth for drinks, Currywurst and whatever happens after the official agenda.

## Under the hood

`data/agenda.js` is the source of truth. GitHub renders the agenda into static HTML; a small amount of vanilla JavaScript adds the live state, scroll spy and sticky context bar.

HTML · CSS · JavaScript · Service Worker · GitHub Actions · GitHub Pages.

No framework, no database, no dashboard empire.

If reality changes, update the data. If the interface merely feels boring, leave it alone.
