<style type="text/css">
.showNW { display: none}
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
let weekMinOne = (weekNum - 1);
let hours = (new Date().getHours());
let dayNum = (new Date().getDay());

if ((weekNum === 34 && dayNum >= 3) || weekNum > 34) {
  showNW();
};
  
function showNW() {
  show(".showNW");
}
  
function show(s) {
  $(s).show();
}

if (dayNum <= 2) {
  window.onload=function(){
    location.href = "https://well-you.app/2M-W" + weekMinOne + "-NW/";
  };
} else {
  window.onload=function(){
    location.href = "https://well-you.app/2M-W" + weekNum + "-NW/";
  };
};
});
</script>
