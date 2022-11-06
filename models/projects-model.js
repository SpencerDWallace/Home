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
                    title:'Source code',
                    path:'https://github.com/SpencerDWallace/CSE4200/tree/master/project/project',
                },

            ]
        
        },
        {
            projectName: 'Ecommerce Project',
            imagePath: '../photos/ecommerce.png',
            description: 'This project was created as a practice project to implement a raycasting \
            engine in C++ for a course in computer graphics. In the C++ implementation I continued to create \
            a 3D snake game for the course project. The source code can be found with the link below',
            url: {
                path:'https://droppers-testing.web.app/store',
                target:'_blank'
            },
            externals:[
                {
                    title:'Souce code',
                    path:'https://github.com/SpencerDWallace/CSE4200/tree/master/project/project',
                }
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
                    title:'Souce code',
                    path:'https://github.com/SpencerDWallace/CSE4200/tree/master/project/project',
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
                    title:'Souce code',
                    path:'https://github.com/SpencerDWallace/CSE4200/tree/master/project/project',
                }
            ]
        },
    ];
 };
