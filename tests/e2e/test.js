const { borrowBook } = require('../../services/borrow.service');

// On simule un parcours utilisateur complet
describe('Parcours utilisateur – emprunt de livre (E2E)', () => {

  test('un utilisateur emprunte un livre disponible avec succès', () => {
    const user = { borrowedBooks: [] };
    const book = { available: true };

    // L’utilisateur effectue l’emprunt
    borrowBook(user, book);

    // Résultat attendu 
    expect(book.available).toBe(false);
    expect(user.borrowedBooks.length).toBe(1);
  });

});
