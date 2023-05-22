---
layout: page
description: "code"
---
#### [MyHome](https://meng-lanhome.github.io)
------------

- Add

```
Sub demo()
    Dim wb As Workbook, sht As Worksheet
    Dim arrName()
    With ThisWorkbook
        For i = 3 To .Sheets.Count
            ReDim Preserve arrName(i - 3)
            arrName(i - 3) = .Sheets(i).Name
        Next
        Set wb = Workbooks.Add
        If wb.Sheets.Count < .Sheets.Count - 2 Then
            wb.Worksheets.Add Count:=Abs(wb.Sheets.Count - .Sheets.Count + 2)
        End If
        wb.SaveAs ThisWorkbook.Path & "\demo1.xlsx"
        ff = ThisWorkbook.Path
        wb.Close 0
    End With
End Sub
```

- read line
```
Dim fso As Object
Dim ts As Object
Dim line As String

Set fso = CreateObject("Scripting.FileSystemObject")
Set ts = fso.OpenTextFile("C:\path\to\file.json", 1)

Do While Not ts.AtEndOfStream
    line = ts.ReadLine
    ' 处理每一行数据
Loop

ts.Close
```

- read paragraph
```
Sub ReadJsonFileInChunks(filePath As String, chunkSize As Long)
    Dim fso As Object
    Dim adoStream As Object
    Dim jsonText As String
    Dim bytesRead As Long
    
    Set fso = CreateObject("Scripting.FileSystemObject")
    Set adoStream = CreateObject("ADODB.Stream")
    
    With adoStream
        .Type = adTypeBinary
        .Open
        .LoadFromFile filePath
    End With
    
    Do While Not adoStream.EOS
        If adoStream.Size - adoStream.Position < chunkSize Then
            chunkSize = adoStream.Size - adoStream.Position
        End If
        
        With adoStream
            .Type = adTypeText
            .Charset = "utf-8"
            .Position = .Position + bytesRead
            bytesRead = 0
            .ReadText chunkSize, jsonText
        End With
        
        ' 处理 JSON 数据
        Debug.Print jsonText
    Loop
    
    With adoStream
        .Close
    End With
    
    Set adoStream = Nothing
    Set fso = Nothing
End Sub
```
