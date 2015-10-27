define(['text!./template.txt'],function(template){
    return {

        bar : function(msg){
            msg = msg || '';
            console.log(template + ' foo.bar() ... ', msg);
        }
    };
});
