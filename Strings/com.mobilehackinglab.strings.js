Java.perform(function() {
  const ActivityThread = Java.use("android.app.ActivityThread");
  const Base64 = Java.use("android.util.Base64");
  const Cipher = Java.use("javax.crypto.Cipher");
  const Intent = Java.use("android.content.Intent");
  const IvParameterSpec = Java.use("javax.crypto.spec.IvParameterSpec");
  const SecretKeySpec = Java.use("javax.crypto.spec.SecretKeySpec");
  const String = Java.use("java.lang.String");
  const Uri = Java.use("android.net.Uri");

  Java.choose("com.mobilehackinglab.challenge.MainActivity", {
    onMatch: function(instance) {
      instance.KLOW();
      console.log("[+] shared preferences set");
    },
    onComplete: function() {},
  });

  const secretKeySpec = SecretKeySpec.$new(
    String.$new("your_secret_key_1234567890123456").getBytes(), "AES");
  const ivParameterSpec = IvParameterSpec.$new(
    String.$new("1234567890123456").getBytes());
  let cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
  cipher.init(0b10, secretKeySpec, ivParameterSpec);
  const path = Base64.encodeToString(
    cipher.doFinal(Base64.decode("bqGrDKdQ8zo26HflRsGvVA==", 0)), 0);
  console.log("[+] path decrypted");

  let intent = Intent.$new();
  intent.setClassName("com.mobilehackinglab.challenge",
    "com.mobilehackinglab.challenge.Activity2");
  intent.setAction("android.intent.action.VIEW");
  intent.setData(Uri.parse("mhl://labs/" + path));
  intent.addFlags(0x10000000);
  console.log("[+] intent created");

  ActivityThread.currentApplication().getApplicationContext().startActivity(intent);
  console.log("[+] activity started");

  setTimeout(function() {
    const module = Process.getModuleByName("libflag.so"), pattern = "MHL{";
    let patternHex = [];
    for (let i = 0; i < pattern.length; i++) {
      patternHex.push(pattern.charCodeAt(i).toString(0x10));
    }
    Memory.scan(module.base, module.size, patternHex.join(" "), {
      onMatch: function(address, size) {
        console.log("[+] flag found");
        console.log(hexdump(address, {length: 0x20}));
      },
      onComplete: function() {},
    });
  }, 2000);

});

