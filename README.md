# Kit de démarrage - TechCorp RH (HTML / CSS)

Point de départ commun pour le module HTML / CSS professionnel.

## Arborescence

```
starter/
  page-modele.html      modèle de page (head complet : SEO, accessibilité)
  donnees-fictives.md   noms, soldes, statuts à utiliser dans les maquettes
  assets/               favicon et logo
  js/app.js             menu mobile et boîtes de dialogue (fourni, ne pas modifier)
  css/
    main.css            point d'entrée unique, importe tout le reste
    reset.css           fourni
    tokens.css          fourni : design system commun, NE PAS MODIFIER
    theme.css           votre identité visuelle (surcharge des tokens)
    base.css            à compléter (jour 1)
    layout.css          à compléter (jour 2)
    components.css      à compléter (jours 1 à 3)
    utilities.css       fourni, à enrichir si besoin
```

## Règles

1. Copiez le dossier `starter/` dans votre dépôt du projet fil rouge, sous `maquettes/` par exemple.
2. Ne modifiez jamais `tokens.css` : personnalisez dans `theme.css`.
3. Les composants n'utilisent que des variables (`var(--...)`), jamais de valeur en dur.
4. Une page = un fichier HTML, créé à partir de `page-modele.html`.
5. Commit à la fin de chaque étape.

## Lancer les pages

Ouvrez les fichiers dans le navigateur, ou utilisez l'extension Live Server de VS Code.
