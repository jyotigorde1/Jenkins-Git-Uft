Dim objUFT
Set objUFT=CreateObject("QuickTest.Application")
objUFT.Visible=True
objUFT.Launch
objUFT.Open "D:\jyoti\Hybrid_Automation\Driver\Driver_script"
objUFT.Test.Run
objUFT.Test.Close
objUFT.Quit
Set objUFT=Nothing