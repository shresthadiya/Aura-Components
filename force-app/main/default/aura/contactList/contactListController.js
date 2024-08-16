({
	myAction : function(component, event, helper) {
		component.set("v.Columns", [
            {label: "First Name", fieldName: "FirstName", type: "text"},
            {label: "Last Name", fieldName: "LastName", type: "text"},
            {label: "Email", fieldName: "Email", type: "email"},
            {label: "Phone", fieldName: "Phone", type: "phone"}
        ]);
        
        var action = component.get("c.getContacts");
        action.setParams({
            recordId: component.get("v.recordId")
        });
        action.setCallback(this, function(data){
            component.set("v.Contacts", data.getReturnValue());
        });
        $A.enqueueAction(action);

        //action.setCallback(this, function(response){
            //var state = response.getState();
            //if(state === "SUCCESS"){
                //component.set("v.Contacts", response.getReturnValue());
            //}
        //});
        //$A.enqueueAction(action);
	}
})