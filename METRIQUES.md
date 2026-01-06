# EXERCICE 3 : MÉTRIQUES DE QUALITÉ (30 points)

## Scénario

Le projet analysé présente les métriques SonarQube suivantes :

- Code Coverage : 45 %
- Code Smells : 234
- Bugs : 12
- Vulnerabilities : 5
- Technical Debt : 87 jours
- Duplicated Lines : 18,5 %
- Cyclomatic Complexity : moyenne 15, max 87
- Maintainability Rating : C

---

## A. Analyse Critique 

### Code Coverage 
1. Cette métrique mesure la proportion de code exécutée par les tests automatisés.
2. Un taux de 45 % est problématique car une grande partie du code n’est pas protégée contre les régressions.
3. La cible raisonnable serait un minimum de 70 %, en priorisant les règles métier critiques.

---

### Code Smells 
1. Les code smells indiquent des problèmes de conception ou de lisibilité du code.
2. Un nombre élevé suggère un manque de refactoring et un risque accru de dette technique.
3. L’objectif serait de réduire progressivement ce nombre, idéalement sous la barre des 100.

---

### Bugs 
1. Cette métrique représente des défauts fonctionnels détectés par l’analyse statique.
2. La présence de bugs est problématique, surtout s’ils concernent des parcours critiques.
3. La cible doit être 0 bug bloquant ou majeur.

---

### Vulnerabilities 
1. Cette métrique identifie des failles de sécurité potentielles.
2. Toute vulnérabilité est critique, en particulier dans un contexte applicatif exposé.
3. La cible acceptable est 0 vulnérabilité.

---

### Technical Debt 
1. La dette technique estime le temps nécessaire pour corriger les problèmes identifiés.
2. Une dette de 87 jours est élevée et impacte la capacité d’évolution du projet.
3. L’objectif est de réduire progressivement cette dette à moins de 30 jours.

---

### Duplicated Lines 
1. Cette métrique mesure la duplication de code.
2. Un taux supérieur à 10 % est problématique car il complique la maintenance.
3. La cible recommandée est inférieure à 5 %.

---

### Cyclomatic Complexity 
1. Elle mesure la complexité logique du code.
2. Une complexité maximale de 87 est critique et rend le code difficile à tester et maintenir.
3. La cible est une complexité maximale inférieure à 10 par méthode.

---

### Maintainability Rating 
1. Cette note synthétise plusieurs métriques de maintenabilité.
2. Un rating C indique un code difficile à maintenir à moyen terme.
3. L’objectif est d’atteindre un rating A ou B.

---

## B. Plan d’Action Priorisé 

### SPRINT 1 – Urgent / Critique
-  Action  : Correction des vulnérabilités et des bugs bloquants
-  Métrique impactée  : Vulnerabilities, Bugs
-  Objectif chiffré  : 0 vulnérabilité, 0 bug critique
-  Effort estimé  : 13 points
-  Impact attendu  : Sécurisation immédiate de l’application et réduction des risques métier

---

### SPRINT 2 – Important
-  Action  : Refactoring des méthodes à forte complexité et réduction de la duplication
-  Métrique impactée : Cyclomatic Complexity, Duplicated Lines, Code Smells
-  Objectif chiffré  : Complexité max < 15, duplication < 10 %
-  Effort estimé  : 20 points
-  Impact attendu  : Amélioration significative de la lisibilité et de la maintenabilité

---

### SPRINT 3 – Amélioration continue
-  Action  : Renforcement de la couverture de tests
-  Métrique impactée  : Code Coverage, Technical Debt
-  Objectif chiffré  : Coverage ≥ 70 %, dette < 30 jours
-  Effort estimé  : 8 points
-  Impact attendu  : Réduction des régressions et meilleure confiance dans les évolutions

---

## C. Mise en Place d’une CI/CD Qualité 

La pipeline CI/CD qualité comprend les étapes suivantes :

1. Installation et build
   - Installation des dépendances
   - Build du projet

2. Tests automatisés
   - Exécution des tests unitaires, d’intégration et E2E
   - Génération du rapport de couverture

3. Analyse SonarQube
   - Analyse statique du code
   - Calcul des métriques de qualité

4. Quality Gates 
   - 0 vulnérabilité
   - 0 bug critique
   - Coverage ≥ 70 %
   - Maintainability Rating A ou B

5. Décision
   - Blocage du pipeline si un quality gate échoue
   - Autorisation du déploiement uniquement si la qualité est conforme

Les métriques suivies sont la couverture de code, la dette technique, les bugs, les vulnérabilités et la maintenabilité globale.

---

