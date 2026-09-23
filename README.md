# Quaderno d'Inglese — V14 Compact

Versione personale PWA costruita a partire dalla V13.

## Nuova struttura
- interfaccia mobile Android compatta, ispirata all'anteprima approvata;
- navigazione principale a 4 voci: **Home · Impara · Parla · Impostazioni**;
- vecchie funzioni V13 mantenute e raggiungibili dalla Home o dai pannelli dedicati;
- Oxford 3000 integrato;
- corso A1, percorso personalizzato, AI Tutor, pronuncia e conversazione;
- backup/importazione locale e dati nel browser;
- Service Worker aggiornato alla cache V14;
- manifest con app shortcuts per accesso rapido alle attività su Android compatibile.

## Struttura file
- `index.html` — struttura e funzioni esistenti V13;
- `css/v14-compact.css` — nuovo livello grafico mobile;
- `js/v14-ui.js` — navigazione compatta V14;
- `data/oxford3000.js` — Oxford 3000 locale;
- `manifest.webmanifest` — configurazione PWA;
- `sw.js` — cache/offline V14;
- `icons/` — icone PWA.

La nuova UI è un livello sopra la logica V13: l'obiettivo è ridurre il rischio di rompere corso, tutor, vocabolario, Gemini e backup mentre si cambia la presentazione.
