/* global db */
// MongoDB Playground
// Utilisez Ctrl+Space à l'intérieur d'un extrait de code ou d'une chaîne littérale pour déclencher les complétions.

const database = 'projet';
const collection = 'user';

// Utiliser la base de données spécifiée.
db = db.getSiblingDB(database);

// Créer une nouvelle collection.
db.createCollection(collection);

// Insérer les documents dans la collection users.
db.users.insertMany([
    {
        "user": "admin",
        "email": "admin@example.com",
        "pwd": "12345678",
        "roles": [{ "role": "root", "db": "admin" }]
    },
    {
        "user": "franck",
        "email": "franck@example.com",
        "pwd": "franckpass",
        "roles": [{ "role": "readWrite", "db": "mydatabase" }]
    },
    {
        "user": "lionel",
        "email": "lionel@example.com",
        "pwd": "lionelpass",
        "roles": [{ "role": "read", "db": "mydatabase" }]
    }
]);
