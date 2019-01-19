({
	setSearchTerm : function(component, event) {
        var searchTerm = component.find('searchBox').getElement().value;
        console.log(searchTerm);
		component.set("v.searchTerm",searchTerm);
         // create a one-time use instance of the search action
        // in the server-side controller
        var action = component.get("c.search");
        action.setParams({ searchstr :  searchTerm});
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.data",response.getReturnValue());
                console.log(response.getReturnValue());
            }
            else if (state === "INCOMPLETE") {
                // do something
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + 
                                 errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });

        // optionally set storable, abortable, background flag here

        // A client-side action could cause multiple events, 
        // which could trigger other events and 
        // other server-side action calls.
        // $A.enqueueAction adds the server-side action to the queue.
        $A.enqueueAction(action);
	}
})