systemutil.Run "C:\Program Files (x86)\Micro Focus\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"

WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set DataTable("name", dtGlobalSheet) @@ hightlight id_;_2058502280_;_script infofile_;_ZIP::ssf2.xml_;_

WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure DataTable("pwd", dtGlobalSheet) @@ hightlight id_;_1919438032_;_script infofile_;_ZIP::ssf6.xml_;_
but_ok = WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").GetROProperty("enabled")
If but_ok=true Then
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_1886094320_;_script infofile_;_ZIP::ssf7.xml_;_
If WpfWindow("Micro Focus MyFlight Sample").Dialog("Login Failed").Exist(2) Then
	WpfWindow("Micro Focus MyFlight Sample").Dialog("Login Failed").WinButton("OK").Click
	MsgBox "Something Error"
	WpfWindow("Micro Focus MyFlight Sample").Close
	ElseIf WpfWindow("Micro Focus MyFlight Sample").WpfObject("Hello").Exist(4) Then
	MsgBox "Login Sucessfull"
	WpfWindow("Micro Focus MyFlight Sample").Close
	
End If
'confirm_check = WpfWindow("Micro Focus MyFlight Sample").WpfObject("Hello").GetROProperty("text")
Else
   WpfWindow("Micro Focus MyFlight Sample").Close
   MsgBox "Password/Agent Name is missing"	
End If

