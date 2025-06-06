ej.base.enableRipple(window.ripple)
/**
 * Multiselect Object Value Binding Sample
 */

// define the array of data
var records = [];
for (var i = 1; i <= 150; i++) {
    var multiObjectItem = {};
    multiObjectItem.id = 'id' + i;
    multiObjectItem.text = "Item ".concat(i);
    var randomAutoGroup = Math.floor(Math.random() * 4) + 1;
    switch (randomAutoGroup) {
        case 1:
            multiObjectItem.group = 'Group D';
            break;
        case 2:
            multiObjectItem.group = 'Group C';
            break;
        case 3:
            multiObjectItem.group = 'Group B';
            break;
        case 4:
            multiObjectItem.group = 'Group A';
            break;
        default:
            break;
    }
    records.push(multiObjectItem);
}



    // Initialize DropDownList component
    var listObj = new ej.dropdowns.MultiSelect({
        //set the local data to dataSource property
        dataSource: records,
        // set the placeholder to DropDownList input element
        placeholder: 'Select a Item',
        allowObjectBinding: true,
        fields: { text: 'text', value: 'id' },
        mode: 'Default',
        // set the height of the popup element
        popupHeight: '200px',
        // bind the change event
        change: function (args) {
            var inputValue = document.getElementById('value');
            inputValue.value = "Selected value : " + JSON.stringify(listObj.value);
            console.log(args.value);
        },
    });
    listObj.appendTo('#object');
