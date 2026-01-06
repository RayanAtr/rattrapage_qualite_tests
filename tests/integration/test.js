const { borrowBook } = require('../../services/borrow.service');

// On vérifie l’interaction entre l’utilisateur et le livre
describe('Borrow service – test d’intégration', () => {

  test('met à jour l’état du livre et de l’utilisateur après emprunt', () => {
    const user = { borrowedBooks: [] };
    const book = { available: true };

    // Action métier
    borrowBook(user, book);

    // Vérification des effets de bord
    expect(book.available).toBe(false);
    expect(user.borrowedBooks.length).toBe(1);
  });

});
