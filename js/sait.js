Ext.onReady(function(){

    // Ext.create('Ext.Panel', {
    //     renderTo: 'helloWorldPanel',
    //     height: 100,
    //     width: "100%",
    //     title: 'Hello Ext js 6',
    //     html: 'My first Ext js app',
    // });

    // Контейнер с компонентами
    var component1 = Ext.create('Ext.Component', {
        html: 'Component1'
    });
    
    var component2 = Ext.create('Ext.Component', {
        html: 'Component2'
    });
    
    var component3 = Ext.create('Ext.Component', {
        html: 'Component3'
    });
    
    // Ext.create('Ext.container.Container', {
    //     renderTo: Ext.getBody(),
    //     title: 'Container',
    //     border: 1,
    //     width: '50%',
    //     style: {borderStyle: 'solid', borderWidth: '2px'},
    //     items: [component1, component2, component3]
    // });
    
    // Контейнер с контейнером
    var container1 = Ext.create('Ext.container.Container', {
        items: [component1, component2, component3]
    });
    
    Ext.create('Ext.container.Container', {
        renderTo: Ext.getBody(),
        items: container1,
    });

}); //Ext.onReady

