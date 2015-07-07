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
			var serviceUrl = 'http://192.168.1.19/HRWebApi/api/login/';
					//$("#MemberList").html('');
					//$("#MemberList").addClass("loading");
					$.ajax({
						type: "POST",
						url: serviceUrl + '/' + $("#Uname").text() +  '/' + $("#Pwd").text() + '/' + $("#client").text() + '/' + $("#macaddress").text() ,
						//url: serviceUrl,
						//data: "{ 'un': '"+ $("#Uname").text() +"' , 'pw':'"+ $("#Pwd").text() +"', 'client':'"+ $("#ClientID").text() +"' , 'macaddress':'1'}" ,
						data: "",
						contentType: "application/json; charset=utf-8",
						dataType: "",						
						success: function(data) {
								//alert(data);
								alert('Success');
								//jQuery code will go here...
							},
						error: function(xhr) {
							alert("readyState: "+xhr.readyState);
							alert("status: "+xhr.status);
							alert("responseText: "+xhr.responseText);
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
				
var app = {
    initialize: function() {
        this.bind();
    },
    bind: function() {
        document.addEventListener('deviceready', this.deviceready, false);
    },
    deviceready: function() {
        // This is an event handler function, which means the scope is the event.
        // So, we must explicitly called `app.report()` instead of `this.report()`.
        app.report('deviceready');
    },
    report: function(id) {
        // Report the event in the console
        console.log("Report: " + id);

        // Toggle the state from "pending" to "complete" for the reported ID.
        // Accomplished by adding .hide to the pending element and removing
        // .hide from the complete element.
        document.querySelector('#' + id + ' .pending').className += ' hide';
        var completeElem = document.querySelector('#' + id + ' .complete');
        completeElem.className = completeElem.className.split('hide').join('');
    }
};
