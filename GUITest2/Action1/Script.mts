Browser("Privileged Account Management").Page("This site isn’t secure").Link("More information").Click @@ hightlight id_;_Browser("Privileged Account Management").Page("This site isn’t secure").Link("More information")_;_script infofile_;_ZIP::ssf17.xml_;_
Browser("Privileged Account Management").Page("This site isn’t secure").Link("Go on to the webpage (not").Click @@ hightlight id_;_Browser("Privileged Account Management").Page("This site isn’t secure").Link("Go on to the webpage (not")_;_script infofile_;_ZIP::ssf18.xml_;_
wait 2
Browser("Privileged Account Management").Page("Privileged Account Management").WebEdit("ctl00$MainContent$txtusername").Set DataTable("user", dtGlobalSheet) @@ hightlight id_;_Browser("Privileged Account Management").Page("Privileged Account Management").WebEdit("ctl00$MainContent$txtusername")_;_script infofile_;_ZIP::ssf19.xml_;_
Browser("Privileged Account Management").Page("Privileged Account Management").WebEdit("ctl00$MainContent$txtpassword").SetSecure DataTable("pwd", dtGlobalSheet)
Browser("Privileged Account Management").Page("Privileged Account Management").Image("ctl00$MainContent$imgbtnLogin").Click 17,16 @@ hightlight id_;_Browser("Privileged Account Management").Page("Privileged Account Management").Image("ctl00$MainContent$imgbtnLogin")_;_script infofile_;_ZIP::ssf20.xml_;_
If Browser("Privileged Account Management").Dialog("Message from webpage").Exist(3) Then
Browser("Privileged Account Management").Dialog("Message from webpage").WinButton("OK").Click	
Browser("Privileged Account Management").CloseAllTabs
ElseIf Browser("Privileged Account Management").Page("Privileged Account Management").WebButton("×").Exist(3) Then @@ hightlight id_;_Browser("Privileged Account Management").Page("Privileged Account Management").WebEdit("ctl00$MainContent$txtpassword")_;_script infofile_;_ZIP::ssf22.xml_;_

wait 2
Browser("Privileged Account Management").Page("Privileged Account Management").WebButton("×").Click	
wait 2
Browser("Privileged Account Management").CloseAllTabs
Else
 @@ hightlight id_;_Browser("Privileged Account Management").Page("Privileged Account Management").WebEdit("ctl00$MainContent$txtpassword")_;_script infofile_;_ZIP::ssf25.xml_;_
Browser("Privileged Account Management").Page("Privileged Account Management").Image("ctl00$MainContent$imgbtnLogin").Click 20,15 @@ hightlight id_;_Browser("Privileged Account Management").Page("Privileged Account Management").Image("ctl00$MainContent$imgbtnLogin")_;_script infofile_;_ZIP::ssf26.xml_;_
wait 1
Browser("Privileged Account Management").Page("Privileged Account Management_2").Link("Milind").Click @@ hightlight id_;_Browser("Privileged Account Management").Page("Privileged Account Management 2").Link("Milind")_;_script infofile_;_ZIP::ssf27.xml_;_
wait 1
Browser("Privileged Account Management").Page("Privileged Account Management_2").Link("Logout").Click @@ hightlight id_;_Browser("Privileged Account Management").Page("Privileged Account Management 2").Link("Logout")_;_script infofile_;_ZIP::ssf28.xml_;_
Browser("Privileged Account Management").Page("Privileged Account Management_3").Sync @@ hightlight id_;_920126_;_script infofile_;_ZIP::ssf30.xml_;_
End If

