adb install com.mobilehackinglab.strings.apk
adb shell 'am start -n com.mobilehackinglab.challenge/.MainActivity'
frida -U -l com.mobilehackinglab.strings.js 'Strings'

