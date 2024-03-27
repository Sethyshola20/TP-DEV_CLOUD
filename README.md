Rapport TP Service Cloud

EISI C3
Endy Mehraein 
Sethy Laleye

Sommaire : 
Conteneurisation & BDD
API
Déploiement 
Récupération des données par l’utilisateur 
Système de pagination 
Outils Monitoring




















Conteneurisation & BDD

Avant de commencer le développement de l’application nous avons réfléchi aux technologies utilisées afin de compléter la majeure partie du sujet, nous nous sommes donc mis d’accord pour élaborer une API en Nodejs, ce choix se justifie par la différence de nos système d’exploitation barrière pour de nombreux langage, la base de donnée est une simple base mariadb hébergé en locale.

La conteneurisation se fait par Docker ou l’on créer un fichier docker-compose, dans ce fichier réside tous les images que nous voulons intégrer à l’application, dans notre cas nous avons pour commencer besoin de mettre en place la base de donnée,  il nous à donc fallu récupérer via le docker hub les documentations et les images mariadb et phpmyadmin comme gestionnaire de base de donnée









API

L’api Contient plusieurs routes permettant chacune une action.

Une route permettant de pousser un json




Déploiement
Pour ce qui est du déploiement, nous avons crée plusieurs fichiers yaml, pour notre base de données mariadb, phpmyadmin et nos outils de monitoring.
Ensuite nous avons utilisé minikube pour déployer ces pods localement.

Outils de Monitoring
Pour nos outils de monitoring nous avons choisi prometheus, grafana et falco.
Ces outils nous permettent de monitorer notre pour détecter le moindre dysfonctionnement le plus rapidement possible. 
