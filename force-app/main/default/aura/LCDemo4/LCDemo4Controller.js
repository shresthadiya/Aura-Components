({
	doInit : function(component, event, helper) {
		component.set("v.Var4", "Value from LCDemo4 Controller JavaScript file")
        var data = {'name' : 'Test Name',
                'email' : 'test@test.com'};
        
        component.set("v.jsObject", data)
        
        component.set("v.userData", {
            'myString1' : 'String Value',
            'myInteger1' : 2024
        })
	}
})