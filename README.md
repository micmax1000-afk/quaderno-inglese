# Quaderno d'Inglese — Personal V9.1

Versione personale, statica e PWA. Non richiede Node.js, Express o un backend.

## Funzioni
- Corso A1 e percorso personalizzato
- test iniziale del livello
- conversazione con Gemini
- AI Tutor
- pronuncia, riconoscimento vocale e sintesi vocale
- vocabolario e ripasso SM-2
- progressi, errori e backup locale
- tema e impostazioni
- installazione PWA su Android

## Gemini personale
Inserisci la tua API key in **Impostazioni → Gemini**. La chiave viene salvata nel `localStorage` del dispositivo.

Il modello predefinito è `gemini-3.6-flash`. La richiesta non usa `temperature`, `top_p` o `top_k`, parametri deprecati per Gemini 3.6.

**Questa configurazione è adatta al tuo uso personale. Non usare una chiave personale incorporata in una versione pubblica destinata ad altri utenti.**

## Mazzo Oxford
La V9.1 non scarica più un mazzo da GitHub. Il pulsante **Importa mazzo Oxford dal dispositivo** accetta un file `.json`, `.js`, `.csv` o `.txt` già in tuo possesso.

Per il mazzo Oxford completo, usa il file del tuo progetto Flashcards/il file che hai diritto di utilizzare e importalo dall'app. L'app non copia automaticamente il contenuto del sito Oxford.

Oxford Learner's Dictionaries descrive Oxford 3000 come una lista di 3.000 parole core allineate al CEFR A1-B2.

## GitHub Pages
Pubblica il contenuto della cartella del progetto su GitHub Pages. Il file `index.html` è l'ingresso dell'app.

## Installazione Android
Apri la pagina HTTPS di GitHub Pages da Chrome → menu → **Installa app** / **Aggiungi alla schermata Home**.

## File
- `index.html` — app completa
- `manifest.webmanifest` — configurazione PWA
- `sw.js` — cache/offline
- `icons/` — icone PWA
- `.nojekyll` — pubblicazione GitHub Pages
