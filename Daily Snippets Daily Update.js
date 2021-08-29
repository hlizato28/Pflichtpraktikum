<script type="text/javascript">

function getWeekNumber(d) {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    let yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    let weekNo = Math.ceil((( ( (d - yearStart) / 86400000) + 1)/7)-28);
    return (weekNo);
};

let weekNum = getWeekNumber(new Date());
let hours = (new Date().getHours());
let dayNum = (new Date().getDay());
let dayNow = dayNum + (dayNum == 0 ? 7 : 0);

window.onload=function(){
   location.href = "https://well-you.app/DS-2M-W" + weekNum + "-D" + dayNow + "/";
    };
</script>
