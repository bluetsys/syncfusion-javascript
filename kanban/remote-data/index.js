ej.base.enableRipple(window.ripple)
var dataManger = new ej.data.DataManager({
    url: 'http://localhost:62728/api/Kanban',
    crossDomain: true
});

    var kanbanObj = new ej.kanban.Kanban({
        dataSource: dataManger,
        keyField: 'Status',
        allowDragAndDrop: false,
        columns: [
            { headerText: 'To Do', keyField: 'Open' },
            { headerText: 'In Progress', keyField: 'InProgress' },
            { headerText: 'Testing', keyField: 'Testing' },
            { headerText: 'Done', keyField: 'Close' }
        ],
        cardSettings: {
            contentField: 'Summary',
            headerField: 'Id'
        },
        dialogOpen: dialogOpen
    });
    kanbanObj.appendTo('#Kanban');
    function dialogOpen(args) {
        args.cancel = true;
    }

