define([
    'coreJS/adapt',
    './adapt-lightbox-view',
    './adapt-lightbox-inner-view'
], function(Adapt, lightboxView, lightboxInnerView) {

    var LightboxHandler = _.extend({

        initialize: function() {
            this.listenToOnce(Adapt, {
                "app:dataReady": this.onAppDataReady
            });
        },

        onAppDataReady: function() {
            this.lightboxes = {};
            this.setupRender();
        },

        setupRender: function() {
            Adapt.on('componentView:preRender', this.onPreRender);
            Adapt.on('pageView:postRender', this.onPostRender);
        },

        onPreRender: function(view) {
             if(view.model.get('_componentLightboxes')){
                var lbs = view.model.get("_componentLightboxes");
                for(var key in lbs){
                    LightboxHandler.lightboxes[lbs[key]._id] = new lightboxInnerView({
                        key : lbs[key]._id,
                        model: view.model
                    });
                }
                 view.$el.on('click', '.adapt-lightbox', LightboxHandler.lightboxOpen)
            }
        },

        onPostRender: function(view) {
            var lb = new lightboxView({});
            $('body').prepend(lb.$el);
        },

        lightboxOpen: function(e) {
            e.preventDefault();
            $('.lightbox-content-wrap').html(LightboxHandler.lightboxes[$(this).attr("id")].$el);
            $('.lightbox-wrapper').fadeIn('slow');
        }
       

    }, Backbone.Events);

    LightboxHandler.initialize();

    return LightboxHandler;
});


