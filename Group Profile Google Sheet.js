  var connectionName = 'workout-for-happiness:us-west2:lime';
  var rootPwd = 'root';
  var user = 'beta-test';
  var userPwd = 'beta-test';
  var db = 'groupProfile';
  
  var root = 'root';
  var instanceUrl = 'jdbc:google:mysql://' + connectionName;
  var dbUrl = instanceUrl + '/' + db;

  function createTableGroupShootingStar() {
  var conn = Jdbc.getCloudSqlConnection(dbUrl, user, userPwd);
  conn.createStatement().execute('CREATE TABLE  groupShootingStar'
      + '(description VARCHAR(255), times VARCHAR(255), hours VARCHAR(255), minutes VARCHAR(255), '
      + ' PRIMARY KEY(description));');
}

function writeToTableGroupShootingStar() {
  var connectionName = 'workout-for-happiness:us-west2:lime';
  var rootPwd = 'root';
  var user = 'beta-test';
  var userPwd = 'beta-test';
  var db = 'groupProfile';
  
  var root = 'root';
  var instanceUrl = 'jdbc:google:mysql://' + connectionName;
  var dbUrl = instanceUrl + '/' + db;

  var ss = SpreadsheetApp.getActive();
  var sheetImportData = ss.getSheetByName('Group Times');


  Logger.log(dbUrl);
  var sql = 'SELECT * FROM groupShootingStar' ;
  
  var data = getDataGroupShootingStar()
  var headerString = data[1]
  data = data[0]
  try{
    var start = new Date();
    var conn = Jdbc.getCloudSqlConnection(dbUrl, user, userPwd);
    conn.setAutoCommit(false);
    
    var sql = 'INSERT INTO groupShootingStar' + headerString + 'ON DUPLICATE KEY UPDATE description = VALUES(description), times = VALUES(times), hours = VALUES(hours), minutes = VALUES(minutes)';

    Logger.log(sql);
    var stmt = conn.prepareStatement(sql);
       
    var dateColumns = []; // Add the index to this array for date type column
    for (var r in data) {
      Logger.log(data[r]);
      for (var c in data[r]){
        if (dateColumns.indexOf(parseInt(c) + 1) >= 0){ 
          var date = Utilities.formatDate(data[r][c], Session.getScriptTimeZone(),  "yyyy-MM-dd HH:mm:ss");
          stmt.setObject(parseInt(c) + 1, date)
        }else{
          stmt.setString(parseInt(c) + 1, data[r][c]);
        }
      }
      stmt.addBatch();
    }

    var batch = stmt.executeBatch();
    conn.commit();
    conn.close();

    var end = new Date();
    Logger.log('Time elapsed: %sms for %s rows.', end - start, batch.length);
    SpreadsheetApp.getActive().toast('Time elapsed: %sms for %s rows.', end - start, batch.length);
  }catch(err){
    SpreadsheetApp.getActive().toast(err.message);
    Logger.log(err.message);
  } 
}

function getDataGroupShootingStar(){
  //(firstName, lastName, email, department) values (?, ?, ?,?)
  var ss = SpreadsheetApp.getActive();
  var sheetImportData = ss.getSheetByName('Group Times');
  var data = sheetImportData.getDataRange().getValues();
  var header = data[0];
  var headerString = header.join(',')
  
  headerString = '(' + headerString + ') values ('
  
  var questions = Array(header.length + 1).join('?').split('')
  
  headerString = headerString + questions.join(',') + ')'
  Logger.log(headerString)
  Logger.log(data.slice(1))
  return [data.slice(1), headerString]
}