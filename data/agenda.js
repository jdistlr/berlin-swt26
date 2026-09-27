const BERLIN_AGENDA=[
{start:"2026-09-28T12:05:00+02:00",end:"2026-09-28T12:20:00+02:00",title:"Forchheim → Bamberg",detail:"RE14 / RE20 · Ankunft 12:20",brand:"db",moveAt:"2026-09-28T11:50:00+02:00"},
{start:"2026-09-28T12:42:00+02:00",end:"2026-09-28T15:29:00+02:00",title:"ICE 508 → Berlin Hbf",detail:"Bamberg → Berlin Hbf",brand:"db",moveAt:"2026-09-28T12:30:00+02:00",train:{coach:"2",seat:"127",zone:"RUHE",arrival:"15:29"},after:{text:"Weiter: TITANIC · ÖPNV via Naturkundemuseum · Check-in ab ca. 15:50",label:"ROUTE ↗",url:"https://www.google.com/maps/dir/?api=1&origin=Berlin+Hauptbahnhof&destination=TITANIC+Chaussee+Berlin+Chausseestrasse+30&travelmode=transit"}},
{start:"2026-09-28T15:50:00+02:00",end:"2026-09-28T16:30:00+02:00",title:"TITANIC Chaussee",detail:"Check-in · Chaussee-Str. 30",brand:"base",action:{label:"KARTE ↗",url:"https://www.google.com/maps/search/?api=1&query=TITANIC+Chaussee+Berlin+Chausseestrasse+30"}},
{start:"2026-09-28T18:00:00+02:00",end:"2026-09-28T20:00:00+02:00",title:"Siemens Dinner",detail:"Chateau Royal · Neustädtische Kirchstr. 3",brand:"dinner",moveAt:"2026-09-28T17:15:00+02:00",action:{label:"KARTE ↗",url:"https://www.google.com/maps/search/?api=1&query=Chateau+Royal+Berlin+Neustaedtische+Kirchstrasse+3"}},
{start:"2026-09-29T08:00:00+02:00",end:"2026-09-29T10:05:00+02:00",title:"Snowflake World Tour",detail:"Registrierung · Frühstück · Networking · STATION Berlin",brand:"snowflake",moveAt:"2026-09-29T07:30:00+02:00",interests:[
{time:"08:30",title:"CoCo AI / Data Products",meta:"Track 6 · 30 Min."},
{time:"08:30",title:"Openflow / Near Realtime",meta:"Track 5 · 30 Min."},
{time:"08:30",title:"Hands-on Lab 1 · From Zero to Snowflake",meta:"Aletto Hotel · Stage · bis 09:45"},
{time:"09:05",title:"Snowpipe Streaming / Interactive Tables",meta:"Track 5 · bis 09:55"}
]},
{start:"2026-09-29T10:00:00+02:00",end:"2026-09-29T10:05:00+02:00",title:"Welcome",detail:"Jonah Rosenboom · Keynote Room",brand:"snowflake"},
{start:"2026-09-29T10:05:00+02:00",end:"2026-09-29T10:40:00+02:00",title:"Opening Keynote",detail:"Keynote Room",brand:"snowflake"},
{start:"2026-09-29T11:15:00+02:00",end:"2026-09-29T12:45:00+02:00",title:"Networking Lunch",detail:"Catering & Expo Hall · offizielles Programm bis 12:45",brand:"snowflake",interests:[
{time:"11:30",title:"AI Modernization Journey",meta:"Migrate smarter, not harder · Aletto Hotel · Stage · bis 12:30"},
{time:"12:00",title:"Every Stream Meets Its Table",meta:"Datastream and Transformations · Track 5 · bis 12:30"},
{time:"12:00",title:"CoCo · Ideas to Production",meta:"What’s New · Track 6 · bis 12:30"},
{time:"12:15",title:"CoCo → Data Product Agent",meta:"INFOMOTION Booth · bis 12:30 · Data Product Lifecycle · Governance · Agentic AI"},
{time:"12:30",title:"Lab 2 · Openflow + Snowflake AI",meta:"Aletto Hotel · Stage · separate registration",conflict:"Überschneidet Executive Briefing 13:00–13:30"},
{time:"12:45",title:"Data Products + Enterprise Data Mesh",meta:"Infomotion & Siemens Energy · Track 4 · bis 13:15",conflict:"Kollidiert mit LOS / Executive Briefing"}
]},
{start:"2026-09-29T12:35:00+02:00",end:"2026-09-29T13:00:00+02:00",title:"LOS → Reception Desk",detail:"Nicht direkt zum Tiny House Village gehen.",brand:"snowflake",priority:"critical"},
{start:"2026-09-29T13:00:00+02:00",end:"2026-09-29T13:30:00+02:00",title:"Executive Briefing",detail:"Michael Gerstlauer · Industry Field CTO — Manufacturing · Tiny House Village",brand:"snowflake",priority:"critical",moveAt:"2026-09-29T12:35:00+02:00"},
{start:"2026-09-29T13:30:00+02:00",end:"2026-09-29T17:15:00+02:00",title:"Breakouts · Manufacturing",detail:"Sessions · Expo",brand:"snowflake",interests:[
{time:"13:30",title:"AI Agents in Manufacturing",meta:"Capgemini & Siemens Energy · Track 2 · bis 14:00"},
{time:"15:00",title:"Manufacturing Experience Tour",meta:"bis 16:00 · separate registration"},
{time:"16:00",title:"Internal Marketplace 2.0",meta:"AI-Ready Data Products · Track 6 · bis 16:30"},
{time:"16:00",title:"Sovereignty · Vision & Architecture",meta:"Track 3 · bis 16:30"}
]},
{start:"2026-09-29T17:15:00+02:00",end:"2026-09-29T19:00:00+02:00",title:"Drinks Reception",detail:"Catering & Expo Hall · STATION Berlin · Ende 19:00",brand:"snowflake"},
{start:"2026-09-30T12:00:00+02:00",end:"2026-09-30T12:10:00+02:00",title:"Hotel-Checkout",detail:"TITANIC Chaussee",brand:"base"},
{start:"2026-09-30T12:10:00+02:00",end:"2026-09-30T14:10:00+02:00",title:"Freies Fenster",detail:"Jacke · Kaffee · Berlin · bis ca. 14:10",brand:"field"},
{start:"2026-09-30T14:37:00+02:00",end:"2026-09-30T16:12:00+02:00",title:"ICE 1101 → Erfurt Hbf",detail:"Berlin Hbf → Erfurt Hbf",brand:"db",moveAt:"2026-09-30T14:10:00+02:00",train:{coach:"33",seat:"94",zone:"HANDY",arrival:"16:12"},checkin:true},
{start:"2026-09-30T16:35:00+02:00",end:"2026-09-30T17:15:00+02:00",title:"ICE 601 → Bamberg",detail:"Erfurt Hbf → Bamberg",brand:"db",moveAt:"2026-09-30T16:20:00+02:00",train:{coach:"2",seat:"37",zone:"RUHE",arrival:"17:15"},checkin:true},
{start:"2026-09-30T17:39:00+02:00",end:"2026-09-30T17:53:00+02:00",title:"RE20 / RE14 → Forchheim",detail:"Bamberg → Forchheim · Ankunft 17:53",brand:"db",moveAt:"2026-09-30T17:25:00+02:00"}
];
if(typeof window!=="undefined") window.BERLIN_AGENDA=BERLIN_AGENDA;
if(typeof module!=="undefined") module.exports=BERLIN_AGENDA;
