var internalModels;

if (internalModels === undefined) {
    internalModels = {};
}



internalModels.projectsModel = function() {
    return [
        {
            projectName: 'Raycasting JS',
            imagePath: '../photos/raycast.png',
            description: 'This project was created as a practice project to implement a raycasting \
            engine in C++ for a course in computer graphics. In the C++ implementation I continued to create \
            a 3D snake game for the course project. The source code can be found with the link below',
            url: {
                path:'/raycast/raycast.html',
                target:'_blank'
            },
            externals:[
                {
                    title:'Source code (Javascript)',
                    path:'https://github.com/SpencerDWallace/Home/tree/master/raycast',
                    target:'_blank'
                },
                {
                    title:'Source code (C++ Project)',
                    path:'https://github.com/SpencerDWallace/CSE4200/tree/master/project/project',
                    target:'_blank'
                },
            ]
        
        },
        {
            projectName: 'Ecommerce Project',
            imagePath: '../photos/ecommerce.png',
            description: 'This was created for a semester project in a software engineering course. \
            Serveral frameworks and APIs were used such as Node.js, Express.js, React.js, MongoDB, Mongoose, Commerce.js, and Axios.\
            Multiple databases were developed - the storefront database using Commerce.js and a user database with MongoDB \
            along with an internally-built API suing Node.js, Express.js, and Mongoose.',
            url: {
                path:'https://droppers-testing.web.app/store',
                target:'_blank'
            },
            externals:[
                {
                    title:'Source code (Frontend)',
                    path:'https://github.com/SpencerDWallace/DropSite-CSE4550',
                    target:'_blank'
                },
                {
                    title:'Source code (Backend)',
                    path:'https://github.com/SpencerDWallace/DropSiteBackend',
                    target:'_blank'
                },
            ]
        },
        {
            projectName: 'Sorting Algorithms',
            imagePath: '../photos/sort.png',
            description: 'This project was created as a practice project to implement a raycasting \
            engine in C++ for a course in computer graphics. In the C++ implementation I continued to create \
            a 3D snake game for the course project. The source code can be found with the link below',
            url: {
                path:'//sort/index.html',
                target:''
            },
            externals:[
                {
                    title:'Source code',
                    path:'https://github.com/SpencerDWallace/Home/tree/master/sort',
                    target:'_blank'
                }
            ]
        },
        {
            projectName: 'Unity Game',
            imagePath: '../photos/unity-sg.png',
            description: 'This project was created as a practice project to implement a raycasting \
            engine in C++ for a course in computer graphics. In the C++ implementation I continued to create \
            a 3D snake game for the course project. The source code can be found with the link below',
            url: {
                path:'/https://spencerdwallace.github.io/UnitySpaceGame/',
                target:'_blank'
            },
            externals:[
                {
                    title:'Source code',
                    path:'https://github.com/SpencerDWallace/CSE-4500-Spring-21/tree/main/Update_8',
                    target:'_blank'
                }
            ]
        },
    ];
 };
