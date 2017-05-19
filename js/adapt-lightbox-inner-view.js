define([
    'coreJS/adapt'
], function(Adapt) {

    var LightboxInnerView = Backbone.View.extend({

        initialize: function(key) {
            var lb = this.model.toJSON()._componentLightboxes[key.key];
            lbEl = Handlebars.templates['lightbox-inner'](lb);
            $(this.el).html(lbEl);
        }
        
    });
    
    return LightboxInnerView;
});
