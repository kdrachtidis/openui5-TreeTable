sap.ui.define([
  'jquery.sap.global',
  'sap/ui/core/mvc/Controller',
  'sap/ui/model/json/JSONModel',
  'sap/m/Popover',
  'sap/m/Button'
], function (jQuery, Controller, JSONModel, ResponsivePopover, Button) {
  "use strict";

  var Controller = Controller.extend("DemoUXapp.controller.init", {
    model: new sap.ui.model.json.JSONModel(),
    data: {
      navigation: [{
        title: 'Home',
        icon: 'sap-icon://home',
        key: 'MainPage'
      }], fixedNavigation: [{
        title: 'Utility item',
        icon: 'sap-icon://grid',
        key: 'FixedPage1'
      }, {
        title: 'Utility item',
        icon: 'sap-icon://grid',
        key: 'FixedPage2'
      }]
    },

    onInit: function () {
      this.model.setData(this.data);
      this.getView().setModel(this.model);
      this._setToggleButtonTooltip(!sap.ui.Device.system.desktop);
    },

    /**
     * Convenience method for accessing the router.
     * @public
     * @returns {sap.ui.core.routing.Router} the router for this component
     */
    getRouter: function () {
      return sap.ui.core.UIComponent.getRouterFor(this);
    },

    onItemSelect: function (oEvent) {
      var oItem = oEvent.getParameter('item');
      var sKey = oItem.getKey();
      // console.log(sKey);
      this.getRouter().navTo(sKey);
    },

    // EXPERIMENT
    onPress: function (oEvent) {
      var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      oRouter.navTo("Root1");
      console.log(this);
    },

    onSideNavButtonPress: function () {
      var sViewId = this.getView().getId();
      var oToolPage = sap.ui.getCore().byId(sViewId + "--rootApp");
      var bSideExpanded = oToolPage.getSideExpanded();
      this._setToggleButtonTooltip(bSideExpanded);
      oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
    },

    _setToggleButtonTooltip: function (bLarge) {
      var oToggleButton = this.getView().byId('sideNavigationToggleButton');
      if (bLarge) {
        oToggleButton.setTooltip('Large Size Navigation');
      } else {
        oToggleButton.setTooltip('Small Size Navigation');
      }
    }
  });
  return Controller;
});
