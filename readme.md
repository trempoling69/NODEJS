# Rendu nodeJS partiel

## Réalisation

- Projet réalisé avec une bdd en mysql
- Utilisation de l'ORM sequelize avec son CLI
- Config de la bdd dans le dossier ./config
- models des bdd dans le dossier ./config
- ./models généré avec sequelize-cli
- Projet organisé en 3 dossiers distinct : 
```
Index.js avec express pour récupéré les routes principal
./routes qui dispatch les actions à réaliser
./controllers qui exécute les fonctions suite à l'appel des routes
```