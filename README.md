# BERLIN // SWT26

![status](https://img.shields.io/badge/status-FIELD_READY-DFFF00?style=flat-square&labelColor=111318)
![engineering](https://img.shields.io/badge/engineering-OVERENGINEERED_RESPONSIBLY-29B5E8?style=flat-square&labelColor=111318)

A tiny travel field system for three days in Berlin — because apparently a calendar was not enough.

[Open the live field system →](https://jdistlr.github.io/berlin-swt26/)

## Why

The page has one job: reduce thinking while moving. It knows the trains, hotel, dinner, Snowflake World Tour, the Executive Briefing and the way home. Time adds the useful bits: JETZT, ALS NÄCHSTES, LOS and the small neon signal that tells you where you are in the plan.

Everything else stays quiet. Berlin still needs enough cognitive bandwidth for drinks, Currywurst and whatever happens after the official agenda.

## Under the hood

`data/agenda.js` is the source of truth. The agenda is rendered as static HTML; a little vanilla JavaScript adds the live state, scroll spy and sticky context.

HTML · CSS · JavaScript · Service Worker · GitHub Actions · GitHub Pages.


If reality changes, update the data. If the interface merely feels boring, leave it alone.
