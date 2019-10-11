export const getFlowers = new Promise((resolve, reject) => {
    const flowers = [
        {id:1, title: "Roses", price: 70, imageUrl: require('./images/roses.png') },
        {id:2, title: "Sunflower", price: 40, imageUrl: require('./images/sunflowers.png')},
        {id:3, title: "Dahlia", price: 50, imageUrl: require('./images/dahlia.png')},
        {id:4, title: "Tulips", price: 80, imageUrl: require('./images/tulips.png')},
        {id:5, title: "Orchids", price: 120, imageUrl: require('./images/orchids.png')},
        {id:6, title: "Lavander", price: 95, imageUrl: require('./images/lavander.png')}
    ];

    resolve(flowers);
});