import * as FileSystem from 'expo-file-system'
import * as SQLite from 'expo-sqlite'
import {Asset} from 'expo-asset';



const internalDbName = "myPal.db"; // Call whatever you want
const sqlDir = FileSystem.documentDirectory + "SQLite/";
if (!(FileSystem.getInfoAsync(sqlDir + internalDbName)).exists) {
    FileSystem.makeDirectoryAsync(sqlDir, {intermediates: true});
    const asset = Asset.fromModule(require("./assets/database/myPal.db"));
    FileSystem.downloadAsync(asset.uri, sqlDir + internalDbName);
}
const db = SQLite.openDatabase(internalDbName);

  


export const allCategories = (callback) => {
    db.transaction(tx => {
        tx.executeSql('SELECT * FROM Categories;', [], (tx, results) => {
            callback(results.rows._array)
        }, (error) => {console.log(error)})
    }) 
}

export const allSubcategories = (callback) => {
    db.transaction(tx => {
        tx.executeSql('SELECT * FROM SubCategories', [], (tx, results) => {
            callback(results.rows._array)
        },(error) => {console.log(error)} )
    })
}