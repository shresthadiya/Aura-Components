({
    doInit : function(component, event, helper){
        //component.set("v.Message1", "Button1 Initialized")
        //component.set("v.Message2", "Button2 Initialized")
    },
    
	handleClick : function(component, event, helper) {
        //component.set("v.Message1", "Button Clicked")
        var btn = event.getSource();
        var msg = btn.get("v.label");
        if(msg == "Click Me"){
            component.set("v.Message1", "Button 1 Clicked");
        }else{
            component.set("v.Message1", "Button 2 Clicked");
        }
	},
    
    anotherhandleClick : function(component, event, helper){
        //component.set("v.Message2", "Another Button Clicked")
        component.set("v.Message2", event.getSource().get("v.label"));
    }
})