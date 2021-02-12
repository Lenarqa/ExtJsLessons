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
// Ext.onReady(function() {
//     Ext.create('Ext.tab.Panel', {
//         renderTo: Ext.getBody(),
//         requires: ['Ext.layout.container.Card'],
//         xtype: 'layout-cardtabs',
//         width: '100%',
//         height: 200,
        
//         items: [
//             {
//                 title: 'Tab 1',
//                 html: 'html tab 1',
//             },
//             {
//                 title: 'Tab 2',
//                 html: 'html tab 2',
//             },
//             {
//                 title: 'Tab 3',
//                 html: 'html tab 3',
//             },
           
//         ]
//     });
// }); 

// layout card Перелистывание карточек, есть кнопки для пролистывания
// Ext.onReady(function() {
//     Ext.create('Ext.panel.Panel', {
//         renderTo: Ext.getBody(),
//         requires: ['Ext.layout.container.Card'],
//         layout: 'card',
//         width: "100%",
//         height: 200,
//         bodyPadding: 15,
        
//         defaults: {
//             border:false
//         },

//         defaultListenerScope: true,

//         bbar: ['->', //Convenience config. Short for 'Bottom Bar'.
//                {
//                   itemId: 'card-prev',
//                   text: '« Предыдущая карточка',
//                   handler: 'showPrevious',
//                   disabled: true
//                },{
//                   itemId: 'card-next',
//                   text: 'Следующая карточка »',
//                   handler: 'showNext'
//                }],
        
//         items: [
//             {
//                 id: 'card0',
//                 html: 'html карточка №1',
//             },
//             {
//                 id: 'card1',
//                 html: 'html карточка №2',
//             },
//             {
//                 id: 'card2',
//                 html: 'html карточка №3',
//             },
//         ],

//         //функции для кнопок
//         showNext: function () {
//             this.cardPanelNavigation(1);
//          },
      
//          showPrevious: function (btn) {
//             this.cardPanelNavigation(-1);
//          },

//          cardPanelNavigation: function (incr) {
//             var me = this;
//             var l = me.getLayout();
//             var i = l.activeItem.id.split('card')[1];
//             var next = parseInt(i, 10) + incr;
//             l.setActiveItem(next);
//             me.down('#card-prev').setDisabled(next===0);
//             me.down('#card-next').setDisabled(next===2);
//          }
//     });
// }); 

// layout column
// Ext.onReady(function() {
//     Ext.create('Ext.panel.Panel', {
//         renderTo: Ext.getBody(),
//         layout: 'column',
//         xtype: 'layout-column',
//         requires: ['Ext.layout.container.Column'],
//         width: '100vw',
//         border: false,

//         items: [
//             {
//                 title: 'Колонка 1',
//                 html: 'html Колонка №1',
//                 columnWidth: 0.2
//             },
//             {
//                 title: 'Колонка 2',
//                 html: 'html Колонка №2',
//                 columnWidth: 0.3
//             },
//             {
//                 title: 'Колонка 3',
//                 html: 'html Колонка №3',
//                 columnWidth: 0.5
//             },
//         ],
//     });
// }); 


// layout fit заполняет все свободное пространство
// Ext.onReady(function() {
//     Ext.create('Ext.container.Container', {
//         renderTo: Ext.getBody(),
//         layout: 'fit',
//         width: 500,
//         defaults: {
//             bodyPadding: 15
//         },

//         items: [
//             {
//                 title: 'Панель 1',
//                 html: 'html Панель №1',
//             },
//             {
//                 title: 'Панель 2',
//                 html: 'html Панель №2',
//             },
//             {
//                 title: 'Панель 3',
//                 html: 'html Панель №3',
//             },
//         ],
//     });
// }); 

// layout vbox макет позволяет размещать элементы вертикально.
// Ext.onReady(function() {
//     Ext.create('Ext.panel.Panel', {
//         renderTo: Ext.getBody(),
//         layout: {
//             type: 'vbox',
//             align: 'stretch'
//         },
//         requires: ['Ext.layout.container.VBox'],
//         xtype: 'layout-vertical-box',
//         width: '100%',
//         height: 400,
//         frame :true,

//         items: [
//             {
//                 title: 'Панель 1',
//                 html: 'html Панель №1',
//                 margin: '0 0 10 0',
//                 flex: 1,
//             },
//             {
//                 title: 'Панель 2',
//                 html: 'html Панель №2',
//                 margin: '0 0 10 0',
//                 flex: 2,
//             },
//             {
//                 title: 'Панель 3',
//                 html: 'html Панель №3',
//                 margin: '0 0 10 0',
//                 flex: 1,
//             },
//         ],
//     });
// }); 

// layout hBox размещает элементы горизонтально
Ext.onReady(function() {
    Ext.create('Ext.panel.Panel', {
        renderTo: Ext.getBody(),
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        requires: ['Ext.layout.container.HBox'],
        xtype: 'layout-horizontal-box',
        width: '100%',
        height: 400,
        // frame :true,

        items: [
            {
                title: 'Панель 1',
                html: 'html Панель №1',
                margin: '0 2 0 2',
                flex: 1,
            },
            {
                title: 'Панель 2',
                html: 'html Панель №2',
                margin: '0 2 0 2',
                flex: 2,
            },
            {
                title: 'Панель 3',
                html: 'html Панель №3',
                margin: '0 2 0 2',
                flex: 1,
            },
        ],
    });
}); 