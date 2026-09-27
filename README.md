# BERLIN // SWT26

> Three days. Two ICEs back. One Snowflake World Tour.  
> Obviously this required its own operating system.

A tiny, aggressively over-engineered travel field system for **Berlin · 28–30 Sep 2026**.

Built for the moment when the calendar is technically correct, the train leaves in 17 minutes, the conference app has the pass, someone moved the meeting point, and nobody wants to remember which carriage the seat is in.

**→ [Open the field system](https://jdistlr.github.io/berlin-swt26/)**

---

## What this is

Not a travel blog.  
Not a conference website.  
Not another productivity dashboard.

It is a deliberately small **context surface** answering three questions:

```
WHERE AM I?
WHAT IS NEXT?
DO I NEED TO MOVE?
```

Everything else is secondary.

The interface knows about trains, hotel, dinner, Snowflake sessions, the executive briefing, free windows and the way back home. It progressively changes state as time moves through the trip.

---

## Runtime model

```text
data/agenda.js
      │
      ├── build ──────→ static agenda HTML
      │
      └── runtime ────→ NOW / NEXT / LOS
                         countdown
                         current event
                         day scroll-spy
                         sticky context bar
```

**`data/agenda.js` is the source of truth.**

The agenda itself is pre-rendered into HTML so the page arrives complete and does not rearrange itself after JavaScript wakes up.

JavaScript is only allowed to add **context**, not basic content.

That distinction became important after several aesthetically ambitious experiments were politely murdered by an iPhone viewport.

---

## Visual grammar

There are intentionally very few signals.

| Signal | Meaning |
| --- | --- |
| White | primary information |
| Grey | context / secondary information |
| Snowflake Blue `#29B5E8` | Snowflake + interaction |
| Neon `#DFFF00` | **temporal presence** — NOW / countdown |
| DB Red | Deutsche Bahn, because Deutsche Bahn |

The neon dot is intentionally rare. If it appears, your eyes should find it before your brain has finished asking the question.

No gradients.  
No dashboard rainbow.  
No heroic cards for secondary actions.

---

## Small things that matter

- **NOW / NEXT** state machine
- **LOS** when a movement time becomes more relevant than the appointment itself
- current event marker
- day scroll-spy: `MO 28 · DI 29 · MI 30`
- contextual sticky toolbar after the hero leaves the viewport
- compact train metadata: `W2 · P127 · RUHE`
- DB Komfort Check-in shortcuts
- Snowflake Conferences + official Berlin agenda
- cached core assets for unreliable train internet
- no booking codes, PINs or ticket secrets in the public page

---

## Editing the trip

Do **not** hand-edit rendered agenda entries in `index.html`.

Change:

```text
data/agenda.js
```

The render workflow updates the static agenda from there.

A train looks roughly like this:

```js
{
  start: "2026-09-30T14:37:00+02:00",
  end:   "2026-09-30T16:12:00+02:00",

  title:  "ICE 1101 → Erfurt Hbf",
  detail: "Berlin Hbf → Erfurt Hbf",

  brand:  "db",
  moveAt: "2026-09-30T14:10:00+02:00",

  train: {
    coach: "33",
    seat: "94",
    zone: "HANDY",
    arrival: "16:12"
  },

  checkin: true
}
```

If the data is wrong, the system is wrong.

---

## Design rule

Before adding a feature, ask:

> Does this reduce thinking while moving through Berlin?

If not, it probably does not belong here.

Things deliberately **not** included:

```text
weather widget
live rail dashboard
embedded chatbot
map full of pins
CMS
login
twelve kinds of cards
animated cyberpunk nonsense
```

We came dangerously close to some of these.

---

## Stack

Almost offensively small:

```
HTML
CSS
vanilla JavaScript
IntersectionObserver
Service Worker
GitHub Actions
GitHub Pages
```

No application framework.  
No database.  
No client-side router.  
No reason to npm install half the internet.

---

## Failure philosophy

The page should remain useful when:

- JavaScript is late,
- mobile reception is terrible,
- a CDN disappears,
- Safari has opinions,
- or Hannes has approximately seven seconds of available attention.

Static first. Enhancement second.

---

## Status

```text
BERLIN // SWT26
release: field-ready
mode: feature freeze
next mutation: reality
```

If reality changes, update the data.

If the interface merely feels boring, **leave it alone**.
