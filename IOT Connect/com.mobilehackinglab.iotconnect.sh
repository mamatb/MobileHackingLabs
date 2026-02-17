adb install com.mobilehackinglab.iotconnect.apk
adb shell 'am start com.mobilehackinglab.iotconnect/.LoginActivity'
frida -U -l com.mobilehackinglab.iotconnect.js 'IOT Connect'

