// Importation du module mariadb
const mariadb = require('mariadb');

// Configuration de la base de données
const dbConfig = {
    host: '127.0.0.1',       // Hôte de la base de données
    port: 8888,             // Port de la base de données
    user: 'root',           // Utilisateur de la base de données
    password: 'root',   // Mot de passe de la base de données
    database: 'TP-Service-Cloud'  // Nom de la base de données
};


// Création d'un pool de connexions à la base de données
const pool = mariadb.createPool(dbConfig);

// Fonction pour exécuter une requête SQL
async function executeQuery(query) {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query(query);
        return rows;
    } catch (err) {
        console.error('Erreur lors de l\'exécution de la requête :', err);
    } finally {
        if (conn) conn.release();
    }
}

// Fonction principale asynchrone pour tester la connexion
async function main() {
    let rows = await executeQuery('SELECT * FROM user');

    if (rows) {
        console.log('Résultats de la requête :', rows);
    }
}

// Exécution de la fonction principale
main()
    .then(() => {
        console.log('Connexion à la base de données réussie');
        pool.end();  // Fermeture du pool de connexions
    })
    .catch(err => {
        console.error('Erreur de connexion à la base de données :', err);
        pool.end();  // Fermeture du pool de connexions en cas d'erreur
    });

