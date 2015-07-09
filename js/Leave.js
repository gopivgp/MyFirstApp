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
					/*var InsertLeaveParam =
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
									'client_id':'paytest1',
									'comments':'',
									'half_day_time':''
									};*/
									
								
					$.ajax({
						type: "POST",						
						url: serviceUrl,
						//data: InsertLeaveParam ,						
						data: "{'id':'0','employee_no':'A003','from':'07/08/2015','to':'07/08/2015','requested_days':'1','reason':'','half_day':'No','leave_type':'Casual Leave','status':'New','user':'sally','client_id':'paytest1','comments':'','half_day_time':''}" ,
						contentType: "application/json; charset=utf-8",
						dataType: "",						
						success: function(data) {
								if(data == "SUCCESS")
								{
									alert("Leave Applied Successfully.");									
									window.open("Home.html");
								}
								else
								{
									alert('Failed');
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
				
				function GetLeaveApprovalListForGrid() {
			//alert('test');
			
					var ClientID1 =  localStorage.getItem("lsClientID");
					var Uname1 = localStorage.getItem("lsUname");					
			
					var serviceUrl = 'http://192.168.1.19/HRWebApi/api/Leave/GetLeaveApprovalListForGrid/1/1000/'+ Uname1 + "/" + ClientID1;
					
					var a = " <thead><tr><th>Action</th><th>EmployeeNo</th><th>EmployeeName</th><th>From</th><th>To</th><th>Days</th><th>LeaveType</th></tr></thead> <tbody >";
					
					$.ajax({
						type: "GET",						
						url: serviceUrl,
						//data: InsertLeaveParam ,						
						//data: "{'id':'0','employee_no':'A003','from':'07/08/2015','to':'07/08/2015','requested_days':'1','reason':'','half_day':'No','leave_type':'Casual Leave','status':'New','user':'sally','client_id':'paytest1','comments':'','half_day_time':''}" ,
						//contentType: "application/json; charset=utf-8",
						dataType: "JSON",						
						success: function (b) {
								/*var jsonDOC = $.parseJSON(b.d);
								var jsonDS = $(jsonDOC);
								var Table = jsonDS.find("Table");
								var Table2 = jsonDS.find("Table1");
								//HideAllMainDivs();
								//clear_form_elements("#dvLeaveApproval")
								if (Table.length > 0) {
									$.each(Table, function (idx, item) {
										var Item = $(item);
										a += '<tr><td><a href=# onclick=javascript:LoadLeaveApprovalById("' + Item.find('ID').text() + '") class="btn-small-edit"><i class="btn-icon-only fa fa-pencil"></a></td><td>' + Item.find('Employee_No').text() + "</td><td>" + Item.find('Employee_Name').text() + "</td><td>" + Item.find('From').text() + "</td><td>" + Item.find('To').text() + "</td><td>" + Item.find('Requested_Days').text() + "</td><td>" + Item.find('Display_Name').text() + "</td></tr>"
									});
								}*/
								/*if (Table2.length > 0) {
									$.each(Table2, function (idx, item) {
										var Item = $(item);
										if (Item.find('Count').text() != "0") {
											var b = GetTotalPage(Item.find('Count').text());
											$("input[id$=hf_TotalPages]").val(b);
											$("#lblLeaveApprovalCurrentPage").html() != null && $("#lblLeaveApprovalCurrentPage").html($("input[id$=hf_Page_No]").val() + "/" + $("input[id$=hf_TotalPages]").val());
											FillPagingddl("ddlLeaveApproval_PageNo");
											$("#dvLeaveApproval_Paging").show();
										}
										else {
											$("#dvLeaveApproval_Paging").hide();
										}
									});
								}
								else {
									$("#dvLeaveApproval_Paging").hide();
								}*/

					            //FillLeaveApprovalGridRecCount();
					            $.each($.parseJSON(b.d), function (c, b) {
					                a += '<tr><td><a href=# onclick=javascript:LoadLeaveApprovalById("' + b.ID + '") class="btn-small-edit"><i class="btn-icon-only fa fa-pencil"></a></td><td>' + b.Employee_No + "</td><td>" + b.Employee_Name + "</td><td>" + b.From + "</td><td>" + b.To + "</td><td>" + b.Requested_Days + "</td></tr>"
					            });
								a += " </tbody>";
								$("#tbl_LeaveApprovalList").html(a);
								//$("#dvLeaveApproval").show();
								//$("#tbl_LeaveApprovalList").show();
								//clear_form_elements("#dvLeaveApproval")
								alert(a);
							},
							error: function () {
								alert("Data not loaded properly");
							}
					});
				}
				
