# Le Labo des Sons — Grade 2 French phonics arcade

A separate React/Vite + Firebase classroom website with four games: Chasse aux sons, Train des syllabes, Écoute et trouve, and Mission Décodage. Teacher controls active sounds and the shared word bank. No student login required.

## Before publishing

1. Create a **new GitHub repository** and upload the contents of this folder, not the ZIP itself.
2. Create a **new Netlify site** from that repository; build command `npm run build`, publish directory `dist`.
3. Add the same four `VITE_FIREBASE_*` environment variables used by Aspirateur de Mots (see `.env.example`). Do not paste secrets into the source. Netlify may need `SECRETS_SCAN_OMIT_KEYS=VITE_FIREBASE_API_KEY` for its public Firebase web key.
4. In Firebase > Firestore > Rules, **add the `match /phonicsArcades/default` block inside your existing `match /databases/{database}/documents` block**. Do not overwrite your existing Aspirateur de Mots rule. Replace the placeholder teacher UID with your actual UID from Firebase Authentication. Publish.
5. Open the new site with `?teacher=1`, sign in with your existing Firebase teacher account, and save the first word. Confirm `phonicsArcades/default` appears in Firestore.
6. Open the normal student link in a private window and test all four games.

The two websites share the Firebase project but **use different Firestore document paths**, so their word banks are independent.

## Important instructional notes

- The default word bank is a **demo**, not a verified phonics sequence. Review and edit before student use.
- `sound` identifies the instructional target, while `syllables` should be entered as the teacher wants students to blend them. Ensure the chosen target is actually represented in the word.
- Browser text-to-speech varies across Chromebooks. Verify French voices and pronunciation before using Écoute et trouve; consider recorded audio for consistent pronunciation.
- Picture choices use emoji; some emoji may be ambiguous or render differently across devices. Replace with vetted images in a later version.
- For a classroom release, test the interactions, accessibility, and mobile layout on actual student devices.
