define([
    'coreJS/adapt'
], function(Adapt) {

    var LightboxView = Backbone.View.extend({

         el: function() {
            return Handlebars.templates['lightbox']();
        },

        events: {
            'click': 'closeLightbox'
        },

        closeLightbox: function(e) {
            if ($(e.target).hasClass('lightbox-wrapper') || $(e.target).hasClass('button')) {
                $('.lightbox-wrapper').fadeOut('slow');          
            }        
        }
        
    });

    return LightboxView;
});
