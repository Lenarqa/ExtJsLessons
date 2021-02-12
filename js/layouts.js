// layout: absolute 
// Ext.onReady(function() {
//     Ext.create('Ext.container.Container', {
//         renderTo: Ext.getBody(),
//         layout: 'absolute', //позволяет размещать элементы в контейнере с помощью координат XY.
        
//         items: [
//             {
//                 title: 'panel1',
//                 x: 50,
//                 y: 50,
//                 html: 'position x: 50, y: 50',
//                 width: 500,
//                 height: 100,
//             },
//             {
//                 title: 'panel2',
//                 x: 100,
//                 y: 95,
//                 html: 'position x: 100, y: 95',
//                 width: 500,
//                 height: 100,
//             },
//         ]
//     });
// });

// layout: accordion
// Ext.onReady(function() {
//     Ext.create('Ext.container.Container', {
//         renderTo: Ext.getBody(),
//         layout: 'accordion',
        
//         items: [
//             {
//                 title: 'panel1',
//                 html: 'panel 1 html text',
//             },
//             {
//                 title: 'panel2',
//                 html: 'panel 2 html text',
//             },
//             {
//                 title: 'panel3',
//                 html: 'panel 3 html text',
//             },
//             {
//                 title: 'panel4',
//                 html: 'panel 4 html text',
//             },
//         ]
//     });
// }); 

// layout: anchor (привязка) Этот макет дает пользователю право определять размер каждого элемента относительно размера контейнера.
Ext.onReady(function() {
    Ext.create('Ext.container.Container', {
        renderTo: Ext.getBody(),
        layout: 'anchor',
        
        items: [
            {
                title: 'panel1',
                html: 'panel 1 html text',
                height: 100,
                anchor: '50%'
            },
            {
                title: 'panel2',
                html: 'panel 2 html text',
                height: 100,
                anchor: '100%'
            },
            {
                title: 'panel3',
                html: 'panel 3 html text',
                height: 100,
                anchor: '-100'
            },
            {
                title: 'panel4',
                html: 'panel 4 html text',
                height: 100,
                anchor: '-50, 500'
            },
        ]
    });
}); 