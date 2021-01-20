exports.seed = function (knex) {
  // Inserts seed entries
  return knex('stores').insert([
    {
      id: '00ulthapbErVUwVJy4x6-SuperStore_Rug_Emporium',
      name: 'SuperStore Rug Emporium',
      description: 'Rugs, Rugs, Rugs! Discount Rugs, Fine Rugs, Bathroom Rugs!',
      address: '100 Davidson Street, Maine',
      phone_number: '(555) 444-3333',
      merchant_id: '00ulthapbErVUwVJy4x6',
    },
  ]);
};
