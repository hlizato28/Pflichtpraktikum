<style type="text/css">
.showWTT { display: none}
</style>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script>
$(document).ready(function() {
  
function getWeekNumber(d) {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() - d.getUTCDay());
  	let yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    let weekNo = Math.ceil((( ( (d - yearStart) / 86400000) + 1)/7));
    return (weekNo);
};
  
let weekNum = getWeekNumber(new Date());
let hours = (new Date().getHours());
let dayNum = (new Date().getDay());
let weekMinOne = (weekNum - 1);

if ((weekNum >= 35 && dayNum > 0) || (weekNum > 35 && dayNum >= 0) ||(weekNum === 35 && dayNum === 0 && hours >= 18)) {
  showWTT();
};
  
function showWTT() {
  show(".showWTT");
}
  
function show(s) {
  console.log(s);
  $(".showWTT").hide();
  $(s).show();
}

if (dayNum === 0 && hours < 8) {
  window.onload=function(){
    location.href = "https://well-you.app/2M-W" + weekMinOne + "-WTT/";
  };
} else {
  window.onload=function(){
    location.href = "https://well-you.app/2M-W" + weekNum + "-WTT/";
  };
};
});
</script>
