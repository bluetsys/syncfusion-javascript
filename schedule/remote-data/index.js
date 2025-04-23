ej.base.enableRipple(window.ripple)

    var dataManager = new ej.data.DataManager({
        url: 'http://localhost:62728/api/schedule',
        adaptor: new ej.data.WebApiAdaptor(),
        crossDomain: true
    });
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        currentView: 'Month',
        eventSettings: { dataSource: dataManager },
        readonly: true
    });
    scheduleObj.appendTo('#Schedule');

