# Exercice 2 – Stratégie de Tests

## A. Pyramide des tests


La majorité des tests sont unitaires afin d’obtenir des retours rapides
et fiables. Les tests d’intégration et E2E sont limités aux parcours
critiques.

Répartition approximative : E2E (10 %), Intégration (20 %).

La répartition des tests suit le principe de la pyramide afin d’obtenir des retours rapides tout en limitant les coûts de maintenance. Les tests unitaires sont majoritaires car ils sont rapides, fiables et permettent de valider les règles métier de manière isolée. Les tests d’intégration et end-to-end sont volontairement limités aux parcours critiques, car ils sont plus coûteux et plus fragiles à maintenir.


---

## B. Plan de tests

| ID | Type | Fonctionnalité | Cas | Priorité |
|----|------|----------------|-----|----------|
| T01 | Unit | Emprunt | Cas nominal | Haute |
| T02 | Unit | Emprunt | Livre indisponible | Haute |
| T03 | Unit | Emprunt | Limite atteinte | Haute |
| T04 | Unit | Validation | Données invalides | Moyenne |
| T05 | Unit | Métier | Cohérence état | Haute |

Ces cas couvrent les règles métier critiques et les cas limites.

---

## C. Implémentation des tests

Framework utilisé : Jest

Après avoir comparé avec les autres framework, j'ai décidé d'utiliser Jest pour sa simplicité et son adéquation aux projets Node.js
