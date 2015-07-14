/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/



function AuthendicateUser() {
    //alert('test');

    var serviceUrl = "http://192.168.1.19/HRWebApi/api/Login/Auth";
    var ClientID1 = $("#ClientID").val();
    var Uname1 = $("#Uname").val();
    var Pwd1 = $.sha1($("#Pwd").val());
    //var Pwd1 = $("#Pwd").val();
    //alert('Encrpted value'+Pwd1);
    //var ParamArr = new Array();
    //var ParamArr = [{"'un': '"+ Uname1 +"' , 'pw':'"+ Pwd1 +"', 'client':'"+ ClientID1 +"' , 'macaddress':'1'"}];
    //var ParamArr = ["'"+ Uname1 +"' , '"+ Pwd1 +"', '"+ ClientID1 +"' ,'1'"];
    $.ajax({
        type: "POST",
        url: serviceUrl,
        data: "{ 'un': '" + Uname1 + "' , 'pw':'" + Pwd1 + "', 'client':'" + ClientID1 + "' , 'macaddress':'1'}",
        //data: { "un":""+ Uname1 + "" , "pw":"" + Pwd1 + "", "client":"" + ClientID1 + "" , "macaddress":"1"},						
        //data: { "un": "sally", "pw": "sally", "client" : "paytest1", "macaddress": "1" },						
        contentType: "application/json; charset=utf-8",
        dataType: "JSON",
        success: function (data) {
            //alert('data-'+data);
            if (JSON.parse(data) == "SUCCESS") {
                //alert("Login Success");
                window.open("Home.html");
            }
            else {
                alert('Login Failed');
            }
            //jQuery code will go here...
        },
        error: function (xhr) {
            alert("readyState: " + xhr.readyState);
            alert("status: " + xhr.status);
            alert("responseText: " + xhr.responseText);
        }
    });
}

function OnGetAllMembersSuccess(data) {
    alert(JSON.parse(data));
    alert('Success');
    //jQuery code will go here...
}

function OnGetAllMembersError(request, status, error) {
    alert('Fail');

    //jQuery code will go here...
}

//var app = {
//    initialize: function () {
//        this.bind();
//    },
//    bind: function () {
//        document.addEventListener('deviceready', this.deviceready, false);
//    },
//    deviceready: function () {
//        // This is an event handler function, which means the scope is the event.
//        // So, we must explicitly called `app.report()` instead of `this.report()`.
//        app.report('deviceready');
//    },
//    report: function (id) {
//        // Report the event in the console
//        console.log("Report: " + id);

//        // Toggle the state from "pending" to "complete" for the reported ID.
//        // Accomplished by adding .hide to the pending element and removing
//        // .hide from the complete element.
//        document.querySelector('#' + id + ' .pending').className += ' hide';
//        var completeElem = document.querySelector('#' + id + ' .complete');
//        completeElem.className = completeElem.className.split('hide').join('');
//    }
//};
