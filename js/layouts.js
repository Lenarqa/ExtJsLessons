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
// Ext.onReady(function() {
//     Ext.create('Ext.container.Container', {
//         renderTo: Ext.getBody(),
//         layout: 'anchor',
        
//         items: [
//             {
//                 title: 'panel1',
//                 html: 'panel 1 html text',
//                 height: 100,
//                 anchor: '50%'
//             },
//             {
//                 title: 'panel2',
//                 html: 'panel 2 html text',
//                 height: 100,
//                 anchor: '100%'
//             },
//             {
//                 title: 'panel3',
//                 html: 'panel 3 html text',
//                 height: 100,
//                 anchor: '-100'
//             },
//             {
//                 title: 'panel4',
//                 html: 'panel 4 html text',
//                 height: 100,
//                 anchor: '-50, 500'
//             },
//         ]
//     });
// }); 

// layout: border (гриница) В этом макете различные панели вложены и разделены границами. работает с панелями
// Ext.onReady(function() {
//     Ext.create('Ext.panel.Panel', {
//         renderTo: Ext.getBody(),
//         height: "100vh",
//         width: "100vw",
//         layout: 'border',

//         defaults: {
//             collapsible: true, //складывание
//             split: true, //разделяет понели между собой
//             bodyStyle: 'padding:15px'
//         },

        
//         items: [
//             {
//                 title: 'panel1',
//                 html: 'panel 1 west ',
//                 region: 'west'
//             },
//             {
//                 title: 'panel2',
//                 html: 'panel 2 center',
//                 region: 'center'
//             },
//             {
//                 title: 'panel3',
//                 html: 'panel 3 south',
//                 region: 'south'
//             },
//             {
//                 title: 'panel4',
//                 html: 'panel 4 east',
//                 region: 'east'
//             },
//             {
//                 title: 'panel5',
//                 html: 'panel 5 north',
//                 region: 'north'
//             },
           
//         ]
//     });
// }); 

// layout auto Это макет который определяет расположение элементов в зависимости от количества элементов.
// Ext.onReady(function() {
//     Ext.create('Ext.container.Container', {
//         renderTo: Ext.getBody(),
//         width: '100%',
//         layout: 'auto',
        
//         items: [
//             {
//                 title: 'panel1',
//                 html: 'panel 1',
//             },
//             {
//                 title: 'panel2',
//                 html: 'panel 2',
//             },
//             {
//                 title: 'panel3',
//                 html: 'panel 3',
//             },
//             {
//                 title: 'panel4',
//                 html: 'panel 4',
//             },
//         ]
//     });
// }); 

// layout tab-panel этот макет позволяет позиционировать элементы, используя координаты XY в контейнере.
Ext.onReady(function() {
    Ext.create('Ext.tab.Panel', {
        renderTo: Ext.getBody(),
        requires: ['Ext.layout.container.Card'],
        xtype: 'layout-cardtabs',
        width: '100%',
        height: 200,
        
        items: [
            {
                title: 'Tab 1',
                html: 'html tab 1',
            },
            {
                title: 'Tab 2',
                html: 'html tab 2',
            },
            {
                title: 'Tab 3',
                html: 'html tab 3',
            },
           
        ]
    });
}); 