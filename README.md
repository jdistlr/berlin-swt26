# BERLIN // SWT26

**A tiny travel field system for Berlin · 28–30 Sep 2026.**

Three days, a few trains, Snowflake World Tour and an Executive Briefing.  
Obviously this required its own operating system.

[**Open the field system →**](https://jdistlr.github.io/berlin-swt26/)

---

## The idea

This is not a travel blog and not another productivity dashboard.

It exists to answer three questions quickly:

**Where am I? · What is next? · Do I need to move?**

The interface knows the trip, trains, hotel, dinner and conference schedule. As time moves through Berlin, it adds only the context that matters: **JETZT**, **ALS NÄCHSTES**, countdowns, **LOS**, the current day and the current event.

The underlying rule is simple:

> If a feature does not reduce thinking while moving through Berlin, it probably does not belong here.

---

## How it works

```text
data/agenda.js
      │
      ├─ build ───→ static agenda HTML
      │
      └─ runtime ─→ JETZT · NEXT · LOS · countdown
                    current event · scroll spy · sticky context
```

**`data/agenda.js` is the source of truth.**

The agenda is pre-rendered into HTML so the page arrives complete. JavaScript adds context afterwards; it does not create the basic content.

That keeps the interface useful when mobile reception is terrible, JavaScript is late or Safari has opinions.

The stack is deliberately boring: **HTML · CSS · vanilla JavaScript · IntersectionObserver · Service Worker · GitHub Actions · GitHub Pages.**

No framework. No database. No client-side router. No reason to install half the internet.

---

## Visual language

**White** carries primary information. **Grey** carries context. **Snowflake Blue `#29B5E8`** belongs to Snowflake and interaction. **Neon `#DFFF00`** means temporal presence: *this is where you are now*. DB keeps its own red.

The neon signal is intentionally rare. If it appears, the eye should find it before the brain has finished asking the question.

No gradients. No dashboard rainbow. No decorative animation. Secondary actions stay secondary.

---

## Changing the trip

Edit **`data/agenda.js`**, not the rendered agenda in `index.html`.

A train entry looks like this:

```js
{
  start: "2026-09-30T14:37:00+02:00",
  end:   "2026-09-30T16:12:00+02:00",
  title: "ICE 1101 → Erfurt Hbf",
  detail: "Berlin Hbf → Erfurt Hbf",
  brand: "db",
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

The build workflow turns that source into the static agenda. The browser then uses the same data for JETZT, NEXT, LOS and the time-dependent states.

**If the data is wrong, the system is wrong.**

---

## Field rules

The page deliberately keeps booking codes, PINs and ticket secrets out of the public repository. It also deliberately has no weather widget, live-rail dashboard, embedded chatbot, CMS, login or map full of pins.

We considered enough of those to know better.

**Status:** field-ready · feature freeze  
**Next mutation:** reality

If reality changes, update the data.  
If the interface merely feels boring, leave it alone.
