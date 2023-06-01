---
layout: page
description: "code"
---
#### [MyHome](https://meng-lanhome.github.io)
------------

- Text

```
Sub demo()
    Dim FilePath As String, lineArray As Variant, FileContent As String, wordArray As Variant, splitLab As String
    Dim objFSO As Scripting.FileSystemObject, objTS As Scripting.TextStream
    FilePath = ThisWorkbook.Path & "\data.txt"
    splitLab = " "
    Set objFSO = New Scripting.FileSystemObject
    Set objTS = objFSO.OpenTextFile(FilePath, ForReading, False)
    FileContent = objTS.ReadAll
    lineArray = Split(FileContent, vbCrLf)
    Delimiter = Mid(lineArray(1), 1, 1)
    cc = Asc(Delimiter)
    For Each i In lineArray
        n = n + 1
        wordArray = Split(i, Chr(9))
        Cells(n, 1).Resize(1, 12) = wordArray
    Next
    objTS.Close
    Set objTS = Nothing
    Set objFSO = Nothing
End Sub
```

