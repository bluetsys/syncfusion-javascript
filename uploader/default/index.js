ej.base.enableRipple(window.ripple)

    var dropElement = document.getElementsByClassName('control-fluid')[0];
    // Initialize the uploader component
    var uploadObj = new ej.inputs.Uploader({
        asyncSettings: {
            saveUrl: 'http://localhost:62728/api/FileUploader/Save',
            removeUrl: 'http://localhost:62728/api/FileUploader/Remove'
        },
        removing: onFileRemove,
        dropArea: dropElement
    });
    uploadObj.appendTo('#fileupload');

    function onFileRemove(args) {
        args.postRawFile = false;
    }
    // initialize check box component
    var checkBoxObj = new ej.buttons.CheckBox({
        checked: true,
        label: 'Auto Upload',
        change: function (args) {
            uploadObj.autoUpload = args.checked;           
            uploadObj.clearAll();
        }
    });
    checkBoxObj.appendTo('#checkAutoUpload');

    var checkBoxObj1 = new ej.buttons.CheckBox({
        checked: false,
        label: 'Sequential Upload',
        change: function (args) {
            uploadObj.sequentialUpload = args.checked;           
            uploadObj.clearAll();
        }
    });
    checkBoxObj1.appendTo('#sequentialUpload');

