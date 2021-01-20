exports.seed = function (knex) {
    // Inserts seed entries
    return knex('stores_reviews').insert([
        {
            id: 1,
            rating: 5,
            comment: 'This is a test rating and comment for a store.',
            store_id: '00ulthapbErVUwVJy4x6-SuperStore_Rug_Emporium',
            posted_by: '00ulthapbErVUwVJy4x6'
        },
    ]);
};