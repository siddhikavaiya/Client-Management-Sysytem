"use strict";
$(function () {
  $("select").formSelect();

  //Dropzone
  Dropzone.options.frmFileUpload = {
    paramName: "file",
    maxFilesize: 10,
  };

  flatpickr("#date1", {
    allowInput: true,
    dateFormat: "d-m-Y",
    onOpen: function (selectedDates, dateStr, instance) {
      instance.setDate(instance.input.value, false);
    },
  });
  flatpickr("#date2", {
    allowInput: true,
    dateFormat: "d-m-Y",
    onOpen: function (selectedDates, dateStr, instance) {
      instance.setDate(instance.input.value, false);
    },
  });
});
