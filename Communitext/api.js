import * as FileSystem from 'expo-file-system'
import * as SQLite from 'expo-sqlite'
import {Asset} from 'expo-asset';
import { sub } from 'react-native-reanimated';



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

export const allSubcategories = (categoryID,callback) => {
    db.transaction((tx) => {

        tx.executeSql('SELECT * FROM SubCategories WHERE categoryID = ?',[categoryID], (tx, results) => {
            callback(results.rows._array)
        },(error) => {console.log(error)} )
    })
}

export const allSentences = (subcatID,callback) => {
    db.transaction((tx) => {

        tx.executeSql('SELECT * FROM Sentences WHERE subcatID = ?',[subcatID], (tx, results) => {
            callback(results.rows._array)
        },(error) => {console.log(error)} )
    })
}

export const insertSentence = (subcatID,sentence,callback) => {
    db.transaction((tx) => {
    console.log(sentence, subcatID)
        tx.executeSql('INSERT INTO Sentences(sentence, subcatID) VALUES(?,?)',[sentence, subcatID], (tx, results) => {
            tx.executeSql('SELECT * FROM SENTENCES WHERE SentenceID = ?', [results.insertId], (tx, results) =>{
                
                callback(...results.rows._array)
            })
        },(error) => {console.log(error)} )
    })
}

