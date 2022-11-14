var internalModels;

if (internalModels === undefined) {
    internalModels = {};
}


internalModels.photoAlbumModel = function() {
    return [
        {
            name: 'summer 2020',
            path: "./summer20/",
            photos: [
                '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png',
                '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png',
                '21.png', '22.png', '23.png', '24.png', '25.png',
            ],
            thumbnail: '8.png',
            currentPhoto: 0,
        },
        {
            name: 'summer 2021',
            path: "./summer21/",
            photos: [
                '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg',
            ],
            thumbnail: '1.jpg',
            currentPhoto: 0,
        },
        {
            name: 'Ruby Wallace',
            path: "./ruby/",
            photos: [
                'IMG_1489.JPG', 'IMG_0278.jpg', 'IMG_1620.jpg', 'IMG_1649.jpg', 'IMG_1658.jpg', 
                'IMG_1884.JPG', 'IMG_1885.JPG', 'IMG_2086.JPG', 'IMG_2173.jpg', 'IMG_2277.JPG',
            ],
            thumbnail: 'IMG_1489.JPG',
            currentPhoto: 0,
        },
        
    ];
 };
