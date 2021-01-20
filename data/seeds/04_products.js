exports.seed = function (knex) {
    // Inserts seed entries
    return knex('products').insert([
        {
            id: 1,
            store_id: '00ulthapbErVUwVJy4x6-SuperStore_Rug_Emporium',
            name: 'Persian rug',
            stock: 3,
            price: 34000.00,
            description:
                'Fancy rug! Great pattern! Perfect for living room, wall or sauna!',
            published: true,
        },

        {
            id: 2,
            store_id: '00ulthapbErVUwVJy4x6-SuperStore_Rug_Emporium',
            name: 'Bathroom rug!',
            stock: 40,
            price: 5.00,
            description:
                'Bathroom rug! Keep your feet from touching cold tile. Complete garbage!',
            published: true,
        },

        {
            id: 3,
            store_id: '00ulthapbErVUwVJy4x6-SuperStore_Rug_Emporium',
            name: 'Office carpet!',
            stock: 7000,
            price: 50.00,
            description:
                'Colorless office carpeting! Stain resistant and optically offensive!',
            published: true,
        },

        {
            id: 4,
            store_id: '00ulthapbErVUwVJy4x6-SuperStore_Rug_Emporium',
            name: 'Another Persian rug!',
            stock: 5,
            price: 44000.00,
            description:
                'Fancy rug! Great pattern! Perfect for living room, wall or sauna!',
            published: true,
        },

        {
            id: 5,
            store_id: '00ulthapbErVUwVJy4x6-SuperStore_Rug_Emporium',
            name: 'Persian rug, but better!',
            stock: 5,
            price: 44000.00,
            description:
                'Fancy rug! Great pattern! Perfect for living room, wall or sauna!',
            published: true,
        },

        {
            id: 6,
            store_id: '00ulthapbErVUwVJy4x6-SuperStore_Rug_Emporium',
            name: 'Persian rug, again',
            stock: 5,
            price: 44000.00,
            description:
                'Fancy rug! Great pattern! Perfect for living room, wall or sauna!',
            published: true,
        },

        {
            id: 7,
            store_id: '00ulthapbErVUwVJy4x6-SuperStore_Rug_Emporium',
            name: 'Persian Rug',
            stock: 5,
            price: 44000.00,
            description: 'Are we serious with all of these persion rugs? Yes we are!',
            published: true,
        },

        {
            id: 8,
            store_id: '00ulthapbErVUwVJy4x6-SuperStore_Rug_Emporium',
            name: 'Final Persian Rug',
            stock: 5,
            price: 44000.00,
            description: 'Are we serious with all of these persion rugs? Yes we are!',
            published: true,
        },

        {
            id: 9,
            store_id: '00ulthapbErVUwVJy4x6-SuperStore_Rug_Emporium',
            name: 'Hawaiian shirt',
            stock: 1,
            price: 200.00,
            description: 'Casual but stylish. Excellent for unwanted office jobs.',
            published: true,
        },

        {
            id: 10,
            store_id: '00ulthapbErVUwVJy4x6-SuperStore_Rug_Emporium',
            name: 'Champagne gold, 1997 Toyota Camry',
            stock: 1,
            price: 0.00,
            description:
                'Just take it off my hands. Totally reliable and unblievably unsightly.',
            published: true,
        },

        {
            id: 11,
            store_id: '00ulthapbErVUwVJy4x6-SuperStore_Rug_Emporium',
            name: 'Mixed ammunition',
            stock: 90000,
            price: 1.00,
            description:
                'Loads of the stuff! Buy in boxes, buckets, pallets! Prepare for the Apocalypse.',
            published: true,
        },

        {
            id: 12,
            store_id: '00ulthapbErVUwVJy4x6-SuperStore_Rug_Emporium',
            name: 'Book',
            stock: 1,
            price: 10.00,
            description: 'Paperback. Like new. Subject unknown.',
            published: false,
        },

        {
            id: 13,
            store_id: '00ulthapbErVUwVJy4x6-SuperStore_Rug_Emporium',
            name: 'Rocket',
            stock: 3,
            price: 9999999.99,
            description: "Cool, but it doesn't go as high as Elon's.",
            published: true,
        },

        {
            id: 14,
            store_id: '00ulthapbErVUwVJy4x6-SuperStore_Rug_Emporium',
            name: 'Washington Post',
            stock: 1,
            price: 2500000.00,
            description:
                'Gold plate your reputation and legacy! Gain political capital! Slander your enemies!',
            published: true,
        },
    ]);
};
