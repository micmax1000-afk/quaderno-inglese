# Quaderno d'Inglese — V14 Compact Final

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


## V14 Compact Final

Interfaccia mobile compatta ispirata al mockup approvato: Home, Impara, Parla e Impostazioni. La logica V13 viene mantenuta e collegata alla nuova navigazione. La verifica Gemini interroga anche `models.list` per controllare che il modello scelto sia realmente disponibile per la chiave API.


V14 Final2: tema chiaro/scuro ad alto contrasto, icona bandiera UK, gestione leggibile degli errori Gemini e retry con backoff per errori temporanei 429/503.


## V14 Compact FINAL3
- Selettore modello Gemini a tendina.
- Modello preferito seguito da fallback automatici.
- Retry automatico fino a 3 tentativi per modello con exponential backoff.
- Fallback su errori 429/500/502/503/504, modello non disponibile (404/400) ed errori di rete.
- 401/403 e blocchi safety vengono mostrati senza martellare altri modelli.
- Indicazione del modello che ha effettivamente risposto.
- Messaggi Gemini ad alta richiesta tradotti in italiano.


## V15 Semplificata
- Navigazione principale ridotta a Home / Impara / Parla / Impostazioni.
- Corso A1, Ripasso e Oxford 3000 raccolti in Impara.
- Conversazione, Pronuncia e AI Tutor raccolti in Parla.
- Progressi dettagliati raggiungibili da Home.
- Schermate interne mantenute per non perdere le funzioni esistenti, con pulsante di ritorno alla sezione principale.

## V15 Theme FIX
Tema chiaro/scuro completamente sovrascritto con una palette coerente ad alto contrasto per sfondo, schede, testo, input, pulsanti, navigazione, conversazione, corso, Oxford, tutor, pronuncia, progressi, impostazioni e messaggi Gemini. Il colore della barra del browser segue il tema.


## V15.1 Mobile + Oxford FIX
- Oxford prepara automaticamente traduzione ed esempio quando apri una parola, con pulsante manuale di riprova.
- Traduzioni ed esempi generati da Gemini e salvati in localStorage; il dataset Oxford contiene parola/POS/CEFR, non traduzioni.
- Layout mobile-first rafforzato per Home, Impara, Oxford, Corso, Parla, Conversazione, Pronuncia, AI Tutor, Progressi e Impostazioni.
- Service Worker aggiornato per forzare il nuovo pacchetto.


## V15.3 FIX
- Gemini reads the key from localStorage or directly from the Settings field, with legacy-key migration.
- Oxford card layout fixed for mobile/light/dark readability.
- Vocabulary/review cards are restored when entering Ripasso; they are hidden only in Oxford focus.
