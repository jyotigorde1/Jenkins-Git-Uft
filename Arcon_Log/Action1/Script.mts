Dim LRowCount,i
datatable.AddSheet "Sheet1"
datatable.ImportSheet "C:\Users\Jyoti.Gorde.EXTRA-PC-71\Desktop\arcon_login_data.xls",1 ,3

LRowCount = datatable.GetSheet("Sheet1").GetRowCount
'MsgBox LRowCount
 For i = 1 To LRowCount Step 1
 datatable.SetCurrentRow(i)
 wait 3 
 Set oIE = CreateObject("InternetExplorer.Application")
oIE.Navigate "https://125.99.38.202:48531/"
oIE.Visible = True
Browser("This site isn’t secure").Page("This site isn’t secure").Link("More information").Click @@ hightlight id_;_Browser("This site isn’t secure").Page("This site isn’t secure").Link("More information")_;_script infofile_;_ZIP::ssf39.xml_;_
Browser("This site isn’t secure").Page("This site isn’t secure").Link("Go on to the webpage (not").Click @@ hightlight id_;_Browser("This site isn’t secure").Page("This site isn’t secure").Link("Go on to the webpage (not")_;_script infofile_;_ZIP::ssf40.xml_;_
wait 3
Browser("This site isn’t secure").Page("Privileged Account Management").WebEdit("ctl00$MainContent$txtusername").Set datatable(1,3)
Browser("This site isn’t secure").Page("Privileged Account Management").WebEdit("ctl00$MainContent$txtpassword").SetSecure datatable(2,3)
Browser("This site isn’t secure").Page("Privileged Account Management").Image("ctl00$MainContent$imgbtnLogin").Click 17,13 @@ hightlight id_;_Browser("This site isn’t secure").Page("Privileged Account Management").Image("ctl00$MainContent$imgbtnLogin")_;_script infofile_;_ZIP::ssf41.xml_;_
If Browser("This site isn’t secure").Dialog("Message from webpage").WinButton("OK").Exist(2) Then
	Browser("This site isn’t secure").Dialog("Message from webpage").WinButton("OK").Click
	MsgBox "Please enter username/password"
	Browser("This site isn’t secure").CloseAllTabs
	ElseIf Browser("This site isn’t secure").Page("Privileged Account Management").WebButton("×").Exist(2) Then 
	wait 1
	Browser("This site isn’t secure").Page("Privileged Account Management").WebButton("×").Click
	MsgBox "Please enter valid username/password"
	Browser("This site isn’t secure").CloseAllTabs
	else
	wait 2
	Browser("This site isn’t secure").Page("Privileged Account Management_2").Link("Milind").Click
	wait 1
Browser("This site isn’t secure").Page("Privileged Account Management_2").Link("Logout").Click @@ hightlight id_;_Browser("This site isn’t secure").Page("Privileged Account Management 2").Link("Logout")_;_script infofile_;_ZIP::ssf53.xml_;_
'Browser("This site isn’t secure").Page("Privileged Account Management_3").Sync @@ hightlight id_;_Browser("This site isn’t secure").Page("Privileged Account Management_3")_;_script infofile_;_ZIP::ssf54.xml_;_
MsgBox "Login Sucessful"
Browser("This site isn’t secure").CloseAllTabs
End If
'Browser("This site isn’t secure").Page("This site isn’t secure").Sync @@ hightlight id_;_Browser("This site isn’t secure").Page("This site isn’t secure")_;_script infofile_;_ZIP::ssf56.xml_;_
'Browser("This site isn’t secure").CloseAllTabs @@ hightlight id_;_1377498_;_script infofile_;_ZIP::ssf57.xml_;_
Next
 
 
 
 @@ hightlight id_;_2689712_;_script infofile_;_ZIP::ssf24.xml_;_
