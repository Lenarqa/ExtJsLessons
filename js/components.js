Ext.define('StudentDataModel', {
    extend: 'Ext.data.Model',
    fields: [
       {name: 'name', mapping : 'name'},
       {name: 'age', mapping : 'age'},
       {name: 'marks', mapping : 'marks'}
    ]
});

// gridPanel - таблица компонент для отображения данных, который представляет 
    // собой набор записей, хранящихся в Ext.data.Store в табличном формате.
// Ext.onReady(function() {
//     var myData = [
//         { name : "Asha", age : "16", marks : "90" },
//         { name : "Vinit", age : "18", marks : "95" },
//         { name : "Anand", age : "20", marks : "68" },
//         { name : "Niharika", age : "21", marks : "86" },
//         { name : "Manali", age : "22", marks : "57" }
//     ];

//     var gridStore = Ext.create('Ext.data.Store', {
//         model: 'StudentDataModel',
//         data: myData
//     });

//     Ext.create('Ext.grid.Panel', {
//         id: 'gridId',
//         store: gridStore,
//         stripeRows: true,
//         title: 'Таблица студентов',
//         // renderTo: Ext.getBody(),
//         renderTo: 'helloWorldPanel',
//         width: 600, 
//         collapsible: true,
//         enableColumnMove  :true,
//         enableColumnResize:true,
        
//         columns: [
//             {
//                 header:"Student name",
//                 dataIndex: 'name',
//                 id: 'name',
//                 flex: 1,
//                 sortable: true,
//                 hideable: true,
//             },
//             {
//                 header:"Age",
//                 dataIndex: 'age',
//                 flex: .5,
//                 sortable: true,
//                 hideable: false,
//             },
//             {
//                 header:"Marks",
//                 dataIndex: 'marks',
//                 flex: .5,
//                 sortable: true,

//                 // renderer :  function (value, metadata, record, rowIndex, colIndex, store) {
//                 //     if (value > 75) {
//                 //        return "Distinction";	  
//                 //     } else {
//                 //        return "Non Distinction";
//                 //     }
//                 // }
//             },
//         ]
//     })
    
// });


// Ext.Form.Field.Text. форма для получения данных от пользователя.
Ext.onReady(function() {
    
    Ext.create('Ext.panel.Panel', {
        renderTo: Ext.getBody(),
        items: [
            // textfield текстовое поле
            {
                xtype: "textfield",
                fieldLabel: 'Text field',
            },
            // textarea
            {
                xtype: "textarea",
                fieldLabel: 'Text Area',
            },
            // displayfield для отображения текстового поля.
            {
                xtype: 'displayfield',
                fieldLabel: 'Display Field',
            },
            // datefield для отображения и выбора даты.
            {
                xtype: 'datefield',
                fieldLabel: 'Date picker',
            },
            // button
            {
                xtype: 'button',
                text: 'button text'
            },
            // button
            {
                xtype: 'button',
                text: 'button text'
            },
            //radio button
            {
                xtype: 'fieldcontainer',
                layout: 'vbox',
                defaultType: 'radiofield',
                items: [
                    {
                        boxLabel: 'A',
                        inputValue: 'a',
                        id: 'radio1'
                    },
                    {
                        boxLabel: 'B',
                        inputValue: 'b',
                        id: 'radio2'
                    },
                    {
                        boxLabel: 'C',
                        inputValue: 'c',
                        id: 'radio3'
                    },
                ]
            },
            // checkBox
            {
                xtype: 'fieldcontainer',
                layout: 'vbox',
                defaultType: 'checkboxfield',
                items: [
                    {
                        boxLabel: 'Html',
                        inputValue: 'html',
                        id: 'checkBox1' 
                    },
                    {
                        boxLabel: 'Css',
                        inputValue: 'css',
                        id: 'checkBox2' 
                    },
                    {
                        boxLabel: 'JavaScript',
                        inputValue: 'javaScript',
                        id: 'checkBox3' 
                    },
                ]
            }

        ]
        
    })

});