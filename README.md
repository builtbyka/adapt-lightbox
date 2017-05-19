# adapt-lightbox 

##Installation

Download and include in the extensions folder of the adapt framework. 

Example JSON - place inside component.json

"_componentLightboxes": {
    "lightbox1": {
        "_id" : "lightbox1",
        "title" : "Lightbox Title",
        "content" : "Here is the content. Its a nice example of a lightbox."
    },
    "lightbox2": {
        "_id" : "lightbox2",
        "title" : "Lightbox 2 title",
        "content" : "another lightbox"
    }
}

The button / link should have the class 'adapt-lightbox' and an id which matches the reference in the component.json.