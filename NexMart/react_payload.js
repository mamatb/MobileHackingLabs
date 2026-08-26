import {AppRegistry, Alert} from "react-native";
import RNFS from "react-native-fs";

AppRegistry.registerRunnable("NexMart", () => {
  RNFS.readFile(
    "/data/data/com.nexmart.shop/files/vault.txt",
    "utf8",
  ).then(Alert.alert);
});

