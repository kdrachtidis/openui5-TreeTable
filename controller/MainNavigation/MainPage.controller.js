sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel'
], function (Controller, JSONModel) {
    "use strict";

    var Controller = Controller.extend("DemoUXapp.controller.MainNavigation.MainPage", {
        onInit: function() {
			var oModel = new JSONModel("localservice/mockdata/clothing.json");
			this.getView().setModel(oModel);
		}
    });

    return Controller;
});