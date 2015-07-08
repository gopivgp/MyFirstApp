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
 
 
			
			function ApplyLeave() {
			//alert('test');
			var serviceUrl = 'http://192.168.1.19/HRWebApi/api/Leave';
					//var ClientID1 =  $("#ClientID").val();
					//var Uname1 = $("#Uname").val();
					//var Pwd1 = $("#Pwd").val();
					var InsertLeaveParam =
									{
									'id':'0',
									'employee_no':'A003',
									'from':'07/08/2015',
									'to':'07/08/2015',
									'requested_days':'1',
									'reason':'',
									'half_day':'No',
									'leave_type':'Casual Leave',
									'status':'New',
									'user':'sally',
									'client_id':'7821',
									'comments':'',
									'half_day_time':''
									};
									
								alert('InsertLeaveParam'+InsertLeaveParam);
					$.ajax({
						type: "POST",						
						url: serviceUrl,
						data: InsertLeaveParam ,						
						//data : ParamArr,
						contentType: "application/json; charset=utf-8",
						dataType: "",						
						success: function(data) {
								if(data == "SUCCESS")
								{
									alert("Login Success");
									window.open("Home.html");
								}
								else
								{
									alert('Login Failed');
								}								
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
				
