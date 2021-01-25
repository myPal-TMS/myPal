const SQLite = require('react-native-sqlite-storage')

const okCallback = () => {
    console.log("database opened")
}

const errorCallback = (error) => {
    console.log(error)
}
const db = SQLite.openDatabase({name : "myPal.db", createFromLocation : 1}, okCallback, errorCallback);

  


export const allCategories = (callback) => {
    db.transaction(tx => {
        tx.executeSql('SELECT * FROM Categories;', [], (tx, results) => {
            let resultSet = []
            for(let i = 0; i < results.rows.length; i++)
            {
                resultSet.push(results.rows.item(i))
            }
            callback(resultSet)
            
            
        }, (error) => {console.log(error)})
    }, errorCallback) 
}

export const allSubcategories = (categoryID,callback) => {
    db.transaction((tx) => {

        tx.executeSql('SELECT * FROM SubCategories WHERE categoryID = ?',[categoryID], (tx, results) => {
            let resultSet = []
            for(let i = 0; i < results.rows.length; i++)
            {
                resultSet.push(results.rows.item(i))
            }
            callback(resultSet)
        },(error) => {console.log(error)} )
    })
}

export const allSentences = (subcatID,callback) => {
    db.transaction((tx) => {

        tx.executeSql('SELECT * FROM Sentences WHERE subcatID = ?',[subcatID], (tx, results) => {
            let resultSet = []
            for(let i = 0; i < results.rows.length; i++)
            {
                resultSet.push(results.rows.item(i))
            }
            callback(resultSet)
        },(error) => {console.log(error)} )
    })
}

export const insertSentence = (subcatID,sentence,callback) => {
    db.transaction((tx) => {
    console.log(sentence, subcatID)
        tx.executeSql('INSERT INTO Sentences(sentence, subcatID) VALUES(?,?)',[sentence, subcatID], (tx, results) => {
            tx.executeSql('SELECT * FROM SENTENCES WHERE SentenceID = ?', [results.insertId], (tx, results) =>{
                
                let resultSet = []
                for(let i = 0; i < results.rows.length; i++)
                {
                    resultSet.push(results.rows.item(i))
                }
                //console.log(resultSet)
                callback(...resultSet)
            })
        },(error) => {console.log(error)} )
    })
}

