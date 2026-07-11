setImmediate(function() {
  Java.perform(function() {
    const Base64 = Java.use("android.util.Base64");
    const Cipher = Java.use("javax.crypto.Cipher");
    const IvParameterSpec = Java.use("javax.crypto.spec.IvParameterSpec");
    const Key = Java.use("java.security.Key");
    const PBEKeySpec = Java.use("javax.crypto.spec.PBEKeySpec");
    const SecretKeyFactory = Java.use("javax.crypto.SecretKeyFactory");
    const SecretKeySpec = Java.use("javax.crypto.spec.SecretKeySpec");
    const String = Java.use("java.lang.String");

    const pinLength = 4, keyLength = 256, keyIterations = 10_000;
    const saltBytes = Base64.decode("m2UvPXkvte7fygEeMr0WUg==", 0);
    const keyFactory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA1");
    const ivBytes = Base64.decode("L15Je6YfY5owgIckR9R3DQ==", 0);
    let cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
    for (let pin = 0; pin < 10_000; pin++) {
      const pinString = pin.toString().padStart(pinLength, "0");
      const keySpec = PBEKeySpec.$new(Array.from(pinString), saltBytes, keyIterations, keyLength);
      const keyBytes = Java.cast(keyFactory.generateSecret(keySpec), Key).getEncoded();
      cipher.init(0b10, SecretKeySpec.$new(keyBytes, "AES"), IvParameterSpec.$new(ivBytes));
      try {
        const secret = String.$new(cipher.doFinal(Base64.decode("bTjBHijMAVQX+CoyFbDPJXRUSHcTyzGaie3OgVqvK5w=", 0)));
        console.log(`[+] pin: ${pinString}, secret: ${JSON.stringify(secret.toString())}`);
      } catch {}
    }
  });
});

