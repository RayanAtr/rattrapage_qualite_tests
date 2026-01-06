const { borrowBook } = require('../../services/borrow.service');

// On vérifie chaque règle métier
describe('Borrow service – tests unitaires', () => {

  // Un livre disponible peut être emprunté
  test('autorise l’emprunt si le livre est disponible', () => {
    const user = { borrowedBooks: [] };
    const book = { available: true };

    const result = borrowBook(user, book);

    expect(result).toBe(true);
  });

  // Un livre indisponible ne peut pas être emprunté
  test('refuse l’emprunt si le livre est indisponible', () => {
    const user = { borrowedBooks: [] };
    const book = { available: false };

    expect(() => borrowBook(user, book)).toThrow();
  });

  // Un utilisateur ne peut pas dépasser la limite autorisée
  test('refuse l’emprunt si la limite de livres est atteinte', () => {
    const user = { borrowedBooks: [1, 2, 3, 4, 5] };
    const book = { available: true };

    expect(() => borrowBook(user, book)).toThrow();
  });

});
