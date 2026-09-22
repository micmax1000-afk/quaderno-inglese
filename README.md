# Quaderno d'Inglese — Personal V13

Versione personale, statica e PWA. Non richiede Node.js, Express o un backend.

## V13 — Percorso personale quotidiano
- Tutte le funzioni della V11 Oxford.
- Nuova **Sessione di oggi** nella Home con 5 attività: ripasso, parole nuove, pronuncia, mini-conversazione e corso A1.
- Stato della sessione salvato localmente per data; il giorno successivo parte una nuova sessione.
- Barra di avanzamento e conteggio attività completate.
- Collegamenti diretti alle sezioni dell'app.
- Service Worker aggiornato alla cache V13.

## Funzioni principali
- Corso A1 e percorso personalizzato
- test iniziale del livello
- conversazione con Gemini
- AI Tutor
- pronuncia, riconoscimento vocale e sintesi vocale
- vocabolario e ripasso SM-2
- Oxford 3000 locale con filtri A1/A2/B1/B2
- progressi, errori e backup locale
- tema e impostazioni
- installazione PWA su Android

## Gemini personale
Inserisci la tua API key in **Impostazioni → Gemini**. La chiave viene salvata nel `localStorage` del dispositivo.

Questa configurazione è pensata per uso personale. Non inserire una chiave personale in una versione pubblica destinata ad altri utenti.

## Offline
Il Service Worker precarica gli asset principali e usa Cache Storage per consentire il caricamento dell'app senza rete; i dati di studio restano nel browser del dispositivo. Una PWA può combinare Service Worker/Cache Storage e IndexedDB per risorse e dati offline.

## GitHub Pages
Pubblica il contenuto della cartella del progetto su GitHub Pages. Il file `index.html` è l'ingresso dell'app.

## File
- `index.html` — app completa
- `manifest.webmanifest` — configurazione PWA
- `sw.js` — cache/offline V13
- `icons/` — icone PWA
- `data/oxford3000.js` — mazzo Oxford locale
- `.nojekyll` — pubblicazione GitHub Pages


## V13
- Interfaccia compatta pensata per smartphone Android.
- Navigazione principale ridotta a Home, Impara, Parla, Impostazioni.
- Tutor, pronuncia e Corso restano disponibili dalla Home.
- Gemini 3.6 Flash come modello principale, con verifica del modello e fallback esplicito a Gemini 3.5 Flash se la chiave API non accetta 3.6.
- Sessione giornaliera ridotta a 3 attività e completata dagli eventi reali di ripasso, pronuncia e conversazione.
