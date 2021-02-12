Ext.onReady(function(){

    // Ext.create('Ext.Panel', {
    //     renderTo: 'helloWorldPanel',
    //     height: 100,
    //     width: "100%",
    //     title: 'Hello Ext js 6',
    //     html: 'My first Ext js app',
    // });

    // Контейнер с компонентами
    // var component1 = Ext.create('Ext.Component', {
    //     html: 'Component1'
    // });
    
    // var component2 = Ext.create('Ext.Component', {
    //     html: 'Component2'
    // });
    
    // var component3 = Ext.create('Ext.Component', {
    //     html: 'Component3'
    // });
    
    // Ext.create('Ext.container.Container', {
    //     renderTo: Ext.getBody(),
    //     title: 'Container',
    //     border: 1,
    //     width: '50%',
    //     style: {borderStyle: 'solid', borderWidth: '2px'},
    //     items: [component1, component2, component3]
    // });
    
    // Контейнер с контейнером
    // var container1 = Ext.create('Ext.container.Container', {
    //     items: [component1, component2, component3]
    // });
    
    // Ext.create('Ext.container.Container', {
    //     renderTo: Ext.getBody(),
    //     items: container1,
    // });

    // Panel with panels
    // var childPanel1 = Ext.create('Ext.Panel', {
    //     html: 'child Panel 1'
    // });

    // var childPanel2 = Ext.create('Ext.Panel', {
    //     html: 'child Panel 1'
    // });

    // Ext.create('Ext.panel.Panel', {
    //     renderTo: Ext.getBody(),
    //     width: 100,
    //     height: 100,
    //     border: true,    
    //     frame: true,
    //     items: [childPanel1, childPanel2]
    // });

    // form.Panel with panels
    // var textPanel1 = Ext.create('Ext.Panel', {
    //     html: 'text Panel 1'
    // });

    // var textPanel2 = Ext.create('Ext.Panel', {
    //     html: 'text Panel 2'
    // });

    // Ext.create('Ext.form.Panel', {
    //     renderTo: Ext.getBody(),
    //     width: 100,
    //     height : 100,
    //     border : true,
    //     frame : true,
    //     layout : 'auto', 
    //     items: [textPanel1, textPanel2]
    // });

    // tap.Panel with panels
    // Ext.create('Ext.tab.Panel', {
    //     renderTo: Ext.getBody(),
    //     height: 100,
    //     width: "100%",

    //     items: [
    //         {
    //             xtype: 'panel',
    //             title: 'panel1',
    //             html: 'panel №1',
    //             listeners: {
    //                 render: function() {
    //                     Ext.MessageBox.alert("Tab panel one!", 'Click panel 1');
    //                 }
    //             }
    //         },
    //         {
    //             title: 'panel2',
    //             html: 'panel №2',
    //             listeners: {
    //                 render: function() {
    //                     Ext.MessageBox.alert("Tab panel two!",  'Click panel 2');
    //                 }
    //             }
    //         },
    //     ]
    // });

    // viewport with panels
    var panel1 = Ext.create('Ext.panel.Panel', {
        html: 'panel №1'
    });

    var panel2 = Ext.create('Ext.panel.Panel', {
        html: 'panel №2'
    });

    Ext.create("Ext.container.Viewport", {
        renderTo: Ext.getBody(),
        items: [panel1, panel2]
    });

}); //Ext.onReady

