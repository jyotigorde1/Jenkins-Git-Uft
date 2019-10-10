Dim Mrowcnt,Moduleex,ModuleId,TCRowcnt,TestCaseExe,TestCaseId,TSRowcnt,TestCaseId2,Keywords,IProwcnt
 @@ hightlight id_;_396478_;_script infofile_;_ZIP::ssf1.xml_;_
'Add Sheetes to runtime data table & import in Organizer
DataTable.AddSheet "Module"
DataTable.AddSheet "TestCase"
DataTable.AddSheet "TestStep"
DataTable.AddSheet "Test_Data"
'Import data from external organizer folder
DataTable.ImportSheet "D:\jyoti\Hybrid_Automation\Organizer\Organizer.xls",1,3
DataTable.ImportSheet "D:\jyoti\Hybrid_Automation\Organizer\Organizer.xls",2,4
DataTable.ImportSheet "D:\jyoti\Hybrid_Automation\Organizer\Organizer.xls",3,5
DataTable.ImportSheet "D:\jyoti\Hybrid_Automation\TestData\Test_Data.xls",1,6

'Read Executable module id from module sheet
Mrowcnt=DataTable.GetSheet("Module").GetRowCount
For i=1 to Mrowcnt Step 1
	DataTable.SetCurrentRow(i)
	Moduleex=DataTable(3,3)
	If Ucase(Moduleex="Y") Then
		ModuleId=DataTable(1,3)
		'MsgBox ModuleId
		
		'Read Executable TestCase Id under 
		TCRowcnt=DataTable.GetSheet(4).GetRowCount
		For j = 1 To TCRowcnt Step 1
			DataTable.SetCurrentRow(j)
			ModuleId2=DataTable(4,"TestCase")
			TestCaseExe=DataTable(3,4)
			If Ucase(TestCaseExe)="Y" And ModuleId=ModuleId2 Then
				TestCaseId=DataTable(1,4)
				'MsgBox TestCaseId
				'Read Keyword for all executables step from teststep sheet
				TSRowcnt=DataTable.GetSheet(5).GetRowCount
				For k = 1 To TSRowcnt Step 1
					DataTable.SetCurrentRow(k)
					TestCaseId2=DataTable(5,5)
					If TestCaseId=TestCaseId2 Then
						Keywords=DataTable(4,5)
						'MsgBox Keywords
						Select Case Keywords
							Case "IN"
							DataTable(7,5)=login("john","HP")
							Case "LN"
							DataTable(7,5)=login("john","HP")
							Case "CA"
							DataTable(7,5)=close_application()
							Case "OO"
							DataTable(7,5)=open_order("pooja")
							Case "UO"
							DataTable(7,5)=update_order(7,"Economy")
							Case "DO"
							DataTable(7,5)=delete_order()
							Case "LND"
							IProwcnt=DataTable.GetSheet(6).GetRowCount
							'MsgBox IProwcnt
							For l = 1 To IProwcnt Step 1
								DataTable.SetCurrentRow(l)
								DataTable(3,6)=login(DataTable(1,6),DataTable(2,6))
								close_application()
							Next
							
						End Select
					End If
				Next
			End If
			
		Next
	End If
Next

