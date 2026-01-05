/**
 * Calcule le total d'un panier en appliquant
 * des règles métier simples (quantité, statut utilisateur, promotion).
 */
function calculateTotal(items = [], user = {}, promoCode = null) {

  // Vérification des entrées
  if (!Array.isArray(items)) {
    throw new Error("Items must be an array");
  }

  // Calcul du total brut à partir des items
  let total = items.reduce((sum, item) => {

    // Ignore les items invalides
    if (!item.price || !item.quantity) {
      return sum;
    }

    let subtotal = item.price * item.quantity;

    // Remise automatique pour les grosses quantités
    if (item.quantity > 10) {
      subtotal *= 0.95;
    }

    return sum + subtotal;
  }, 0);

  // Application de la remise utilisateur premium
  total = applyUserDiscount(total, user);

  // Application d’un code promotionnel
  total = applyPromoCode(total, promoCode);

  // Verifier que le total n'est pas égal à 0
  return Math.max(total, 0);
}

/**
 * Applique une remise si l'utilisateur est premium
 */
function applyUserDiscount(total, user) {
  return user.isPremium ? total * 0.9 : total;
}

/**
 * Applique une promotion en fonction du code fourni
 */
function applyPromoCode(total, code) {

  // Dictionnaire simple des promotions disponibles
  const promos = {
    WELCOME10: t => t - 10,
    SAVE20: t => t * 0.8
  };

  // Si le code n'existe pas, le total reste inchangé
  return promos[code] ? promos[code](total) : total;
}

module.exports = calculateTotal;
