# Exercice 1 – Analyse de Code

## A. Identification des problèmes

| Problème identifié | Type | Gravité (1–5) | Justification |
|-------------------|------|---------------|---------------|
| Fonction trop longue | Maintenabilité | 3 | Difficulté de lecture |
| Logique métier imbriquée | Design | 4 | Non testable |
| Pas de validation d’entrée | Bug potentiel | 4 | Données incohérentes |
| Codes promo en dur | Maintenabilité | 3 | Évolution difficile |
| Accès direct aux propriétés | Robustesse | 2 | Risque d’erreur |
| Aucune gestion d’erreur | Fiabilité | 4 | Crash possible |
| Aucun test existant | Qualité | 5 | Forte régression possible |

---

## B. Refactoring effectué

Le refactoring vise à :
- séparer les responsabilités
- améliorer la lisibilité
- faciliter les tests unitaires
- sécuriser les entrées

---

## C. Justification

Les principes appliqués sont :
- Single Responsibility Principle
- DRY
- Lisibilité avant optimisation
- Testabilité

Le code refactoré est plus simple à comprendre et à maintenir dans un
contexte projet réaliste.
