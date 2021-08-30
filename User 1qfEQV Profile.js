  var connectionName = 'workout-for-happiness:us-west2:lime';
  var rootPwd = 'root';
  var user = 'beta-test';
  var userPwd = 'beta-test';
  var db = 'userProfile';
  
  var root = 'root';
  var instanceUrl = 'jdbc:google:mysql://' + connectionName;
  var dbUrl = instanceUrl + '/' + db;

  function createTableWeeklyTask() {
  var conn = Jdbc.getCloudSqlConnection(dbUrl, user, userPwd);
  conn.createStatement().execute('CREATE TABLE  weeklyTask1qfEQV'
      + '(week VARCHAR(255), wt1st VARCHAR(255), wtValue1 INT, wt2nd VARCHAR(255), wtValue2 INT, wt3rd VARCHAR(255), wtValue3 INT,'
      + ' PRIMARY KEY(week));');
}

  function createTableBadges() {
  var conn = Jdbc.getCloudSqlConnection(dbUrl, user, userPwd);
  conn.createStatement().execute('CREATE TABLE  badges1qfEQV'
      + '(week VARCHAR(255), bodyCare INT, donating INT, movingInOut INT, museum INT, natureWalk INT, readBooks INT, twMorrie INT, theatre INT, visitCity INT, volunteer INT, bcInfo VARCHAR(255), donatingInfo VARCHAR(255), mioInfo VARCHAR(255), museumInfo VARCHAR(255), nwInfo VARCHAR(255), rbInfo VARCHAR(255), twmInfo VARCHAR(255), theatreInfo VARCHAR(255), vcInfo VARCHAR(255), volunteerInfo VARCHAR(255), pc INT'
      + ', PRIMARY KEY(week));');
}

  function createTableMoodTracker() {
  var conn = Jdbc.getCloudSqlConnection(dbUrl, user, userPwd);
  conn.createStatement().execute('CREATE TABLE  moodTracker1qfEQV'
      + '(day VARCHAR(255), week1 VARCHAR(255), week2 VARCHAR(255), week3 VARCHAR(255), week4 VARCHAR(255), week5 VARCHAR(255), week6 VARCHAR(255), week7 VARCHAR(255), week8 VARCHAR(255)'
      + ', PRIMARY KEY(day));');
}

  function createTableSpecialTask() {
  var conn = Jdbc.getCloudSqlConnection(dbUrl, user, userPwd);
  conn.createStatement().execute('CREATE TABLE  specialTask1qfEQV'
      + '(week VARCHAR(255), specialTask VARCHAR(500), value INT'
      + ', PRIMARY KEY(week));');
}

  function createTableHoursMinutes() {
  var conn = Jdbc.getCloudSqlConnection(dbUrl, user, userPwd);
  conn.createStatement().execute('CREATE TABLE  hoursMinutes1qfEQV'
      + '(description VARCHAR(255), hours INT, minutes INT'
      + ', PRIMARY KEY(description));');
}

  function createTableWT7() {
  var conn = Jdbc.getCloudSqlConnection(dbUrl, user, userPwd);
  conn.createStatement().execute('CREATE TABLE  wtSeven1qfEQV'
      + '(week VARCHAR(255), plant INT, bike INT, walk INT, eat INT, watch INT, water INT, buy INT, workout INT, listen INT'
      + ', PRIMARY KEY(week));');
}

function writeToTableWeeklyTask() {
  var connectionName = 'workout-for-happiness:us-west2:lime';
  var rootPwd = 'root';
  var user = 'beta-test';
  var userPwd = 'beta-test';
  var db = 'userProfile';
  
  var root = 'root';
  var instanceUrl = 'jdbc:google:mysql://' + connectionName;
  var dbUrl = instanceUrl + '/' + db;

  var ss = SpreadsheetApp.getActive();
  var sheetImportData = ss.getSheetByName('Weekly Task');


  Logger.log(dbUrl);
  var sql = 'SELECT * FROM weeklyTask1qfEQV' ;
  
  var data = getDataWeeklyTask()
  var headerString = data[1]
  data = data[0]
  try{
    var start = new Date();
    var conn = Jdbc.getCloudSqlConnection(dbUrl, user, userPwd);
    conn.setAutoCommit(false);
    
    var sql = 'INSERT INTO weeklyTask1qfEQV' + headerString + 'ON DUPLICATE KEY UPDATE week = VALUES(week), wt1st = VALUES(wt1st), wtValue1 = VALUES(wtValue1), wt2nd = VALUES(wt2nd), wtValue2 = VALUES(wtValue2), wt3rd = VALUES(wt3rd), wtValue3 = VALUES(wtValue3)';

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

function getDataWeeklyTask(){
  //(firstName, lastName, email, department) values (?, ?, ?,?)
  var ss = SpreadsheetApp.getActive();
  var sheetImportData = ss.getSheetByName('Weekly Task');
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

function writeToTableBadges() {
  var connectionName = 'workout-for-happiness:us-west2:lime';
  var rootPwd = 'root';
  var user = 'beta-test';
  var userPwd = 'beta-test';
  var db = 'userProfile';
  
  var root = 'root';
  var instanceUrl = 'jdbc:google:mysql://' + connectionName;
  var dbUrl = instanceUrl + '/' + db;

  var ss = SpreadsheetApp.getActive();
  var sheetImportData = ss.getSheetByName('Badges');


  Logger.log(dbUrl);
  var sql = 'SELECT * FROM badges1qfEQV' ;
  
  var data = getDataBadges()
  var headerString = data[1]
  data = data[0]
  try{
    var start = new Date();
    var conn = Jdbc.getCloudSqlConnection(dbUrl, user, userPwd);
    conn.setAutoCommit(false);
    
    var sql = 'INSERT INTO badges1qfEQV' + headerString + 'ON DUPLICATE KEY UPDATE week = VALUES(week), bodyCare = VALUES(bodyCare), donating = VALUES(donating), movingInOut = VALUES(movingInOut), museum = VALUES(museum), natureWalk = VALUES(natureWalk), readBooks = VALUES(readBooks), twMorrie = VALUES(twMorrie), theatre = VALUES(theatre), visitCity = VALUES(visitCity), volunteer = VALUES(volunteer), bcInfo = VALUES(bcInfo), donatingInfo = VALUES(donatingInfo), mioInfo = VALUES(mioInfo), museumInfo = VALUES(museumInfo), nwInfo = VALUES(nwInfo), rbInfo = VALUES(rbInfo), twmInfo = VALUES(twmInfo), theatreInfo = VALUES(theatreInfo), vcInfo = VALUES(vcInfo), volunteerInfo = VALUES(volunteerInfo), pc = VALUES(pc)';

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

function getDataBadges(){
  //(firstName, lastName, email, department) values (?, ?, ?,?)
  var ss = SpreadsheetApp.getActive();
  var sheetImportData = ss.getSheetByName('Badges');
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

function writeToTableMoodTracker() {
  var connectionName = 'workout-for-happiness:us-west2:lime';
  var rootPwd = 'root';
  var user = 'beta-test';
  var userPwd = 'beta-test';
  var db = 'userProfile';
  
  var root = 'root';
  var instanceUrl = 'jdbc:google:mysql://' + connectionName;
  var dbUrl = instanceUrl + '/' + db;

  var ss = SpreadsheetApp.getActive();
  var sheetImportData = ss.getSheetByName('Mood Tracker');


  Logger.log(dbUrl);
  var sql = 'SELECT * FROM moodTracker1qfEQV' ;
  
  var data = getDataMoodTracker()
  var headerString = data[1]
  data = data[0]
  try{
    var start = new Date();
    var conn = Jdbc.getCloudSqlConnection(dbUrl, user, userPwd);
    conn.setAutoCommit(false);
    
    var sql = 'INSERT INTO moodTracker1qfEQV' + headerString + 'ON DUPLICATE KEY UPDATE day = VALUES(day), week1 = VALUES(week1), week2 = VALUES(week2), week3 = VALUES(week3), week4 = VALUES(week4), week5 = VALUES(week5), week6 = VALUES(week6), week7 = VALUES(week7), week8 = VALUES(week8)';

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

function getDataMoodTracker(){
  //(firstName, lastName, email, department) values (?, ?, ?,?)
  var ss = SpreadsheetApp.getActive();
  var sheetImportData = ss.getSheetByName('Mood Tracker');
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

function writeToTableSpecialTask() {
  var connectionName = 'workout-for-happiness:us-west2:lime';
  var rootPwd = 'root';
  var user = 'beta-test';
  var userPwd = 'beta-test';
  var db = 'userProfile';
  
  var root = 'root';
  var instanceUrl = 'jdbc:google:mysql://' + connectionName;
  var dbUrl = instanceUrl + '/' + db;

  var ss = SpreadsheetApp.getActive();
  var sheetImportData = ss.getSheetByName('Special Task');


  Logger.log(dbUrl);
  var sql = 'SELECT * FROM specialTask1qfEQV' ;
  
  var data = getDataSpecialTask()
  var headerString = data[1]
  data = data[0]
  try{
    var start = new Date();
    var conn = Jdbc.getCloudSqlConnection(dbUrl, user, userPwd);
    conn.setAutoCommit(false);
    
    var sql = 'INSERT INTO specialTask1qfEQV' + headerString + 'ON DUPLICATE KEY UPDATE week = VALUES(week), specialTask = VALUES(specialTask), value = VALUES(value)';

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

function getDataSpecialTask(){
  //(firstName, lastName, email, department) values (?, ?, ?,?)
  var ss = SpreadsheetApp.getActive();
  var sheetImportData = ss.getSheetByName('Special Task');
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

function writeToTableHoursMinutes() {
  var connectionName = 'workout-for-happiness:us-west2:lime';
  var rootPwd = 'root';
  var user = 'beta-test';
  var userPwd = 'beta-test';
  var db = 'userProfile';
  
  var root = 'root';
  var instanceUrl = 'jdbc:google:mysql://' + connectionName;
  var dbUrl = instanceUrl + '/' + db;

  var ss = SpreadsheetApp.getActive();
  var sheetImportData = ss.getSheetByName('Hours Minutes');


  Logger.log(dbUrl);
  var sql = 'SELECT * FROM hoursMinutes1qfEQV' ;
  
  var data = getDataHoursMinutes()
  var headerString = data[1]
  data = data[0]
  try{
    var start = new Date();
    var conn = Jdbc.getCloudSqlConnection(dbUrl, user, userPwd);
    conn.setAutoCommit(false);
    
    var sql = 'INSERT INTO hoursMinutes1qfEQV' + headerString + 'ON DUPLICATE KEY UPDATE description = VALUES(description), hours = VALUES(hours), minutes = VALUES(minutes)';

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

function getDataHoursMinutes(){
  //(firstName, lastName, email, department) values (?, ?, ?,?)
  var ss = SpreadsheetApp.getActive();
  var sheetImportData = ss.getSheetByName('Hours Minutes');
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

function writeToTableWT7() {
  var connectionName = 'workout-for-happiness:us-west2:lime';
  var rootPwd = 'root';
  var user = 'beta-test';
  var userPwd = 'beta-test';
  var db = 'userProfile';
  
  var root = 'root';
  var instanceUrl = 'jdbc:google:mysql://' + connectionName;
  var dbUrl = instanceUrl + '/' + db;

  var ss = SpreadsheetApp.getActive();
  var sheetImportData = ss.getSheetByName('WT7');


  Logger.log(dbUrl);
  var sql = 'SELECT * FROM wtSeven1qfEQV' ;
  
  var data = getDataWT7()
  var headerString = data[1]
  data = data[0]
  try{
    var start = new Date();
    var conn = Jdbc.getCloudSqlConnection(dbUrl, user, userPwd);
    conn.setAutoCommit(false);
    
    var sql = 'INSERT INTO wtSeven1qfEQV' + headerString + 'ON DUPLICATE KEY UPDATE week = VALUES(week), plant = VALUES(plant), bike = VALUES(bike), walk = VALUES(walk), eat = VALUES(eat), watch= VALUES(watch), water = VALUES(water), buy = VALUES(buy), workout = VALUES(workout), listen = VALUES(listen)';

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

function getDataWT7(){
  //(firstName, lastName, email, department) values (?, ?, ?,?)
  var ss = SpreadsheetApp.getActive();
  var sheetImportData = ss.getSheetByName('WT7');
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