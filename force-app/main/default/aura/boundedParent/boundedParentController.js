({
	updateParent : function(component, event, helper) {
		component.set("v.parentVar", "Updated Parent Value");
	},
    
    onParentVarChange : function(component, event, helper){
        console.log("Parent Value has changed");
        console.log("Old Value" + event.getParam("oldValue"));
        console.log("New Value" + event.getParam("value"));
    }
})