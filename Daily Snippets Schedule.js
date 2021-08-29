<style type="text/css">
.showAtMorning, .showAtAfternoon, .showAtEvening { display: none}
</style>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script>
$(document).ready(function() { 

function getWeekNumber(d) {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    let yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    let weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    return (weekNo);
};
  
let weekNum = getWeekNumber(new Date());
let hours = (new Date().getHours());
let dayNum = (new Date().getDay());
let dayNow = dayNum + (dayNum == 0 ? 7 : 0);

if (weekNum === 34 && dayNow === 7) {
  if (hours < 6) {
  showMorning();
  enableMorning();
  } else if (hours < 14) {
  showAfternoon();
  enableMorning();
  enableAfternoon();
  } else {
  showEvening();
  enableMorning();
  enableAfternoon();
  enableEvening();
  }
} else if ((weekNum === 34 && dayNow > 7) || weekNum > 34) {
  showMorning();
  enableEvening();
  enableMorning();
  enableAfternoon();
} else {
  $(".showAtMorning" ).hide();
  $(".showAtAfternoon" ).hide();
  $(".showAtEvening" ).hide();
}

  
function enableLabel(id) {
  $(id).css('color', '#74aee4');
}

function disableLabel(id) {
  $(id).css('color', '#333');
}

  
function enableMorningIcon() {
  $('.morning img').attr('src', '/wp-content/uploads/2021/07/motivation-blue.png').attr('srcset', '/wp-content/uploads/2021/07/motivation-blue.png 1x, /wp-content/uploads/2021/07/motivation-blue.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/07/motivation-blue.png');
}
function enableAfternoonIcon() {
  $('.afternoon img').attr('src', '/wp-content/uploads/2021/07/morning-blue.png').attr('srcset', '/wp-content/uploads/2021/07/morning-blue.png 1x, /wp-content/uploads/2021/07/morning-blue.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/07/morning-blue.png');
}
function enableEveningIcon() {
  $('.evening img').attr('src', '/wp-content/uploads/2021/07/afternoon-blue.png').attr('srcset', '/wp-content/uploads/2021/07/afternoon-blue.png 1x, /wp-content/uploads/2021/07/afternoon-blue.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/07/afternoon-blue.png');
}
  

function disableMorningIcon() {
  $('.morning img').attr('src', '/wp-content/uploads/2021/07/motivation-grey.png').attr('srcset', '/wp-content/uploads/2021/07/motivation-grey.png 1x, /wp-content/uploads/2021/07/motivation-grey.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/07/motivation-grey.png');
}
function disableAfternoonIcon() {
  if ((weekNum === 34 && dayNow === 7 && hours >= 6) || (weekNum === 34 && dayNow > 7) || weekNum > 34) {
    $('.afternoon img').attr('src', '/wp-content/uploads/2021/07/morning-grey.png').attr('srcset', '/wp-content/uploads/2021/07/morning-grey.png 1x, /wp-content/uploads/2021/07/morning-grey.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/07/morning-grey.png');
  }
}
function disableEveningIcon() {
  if ((weekNum === 34 && dayNow === 7 && hours >= 14) || (weekNum === 34 && dayNow > 7) || weekNum > 34) {
    $('.evening img').attr('src', '/wp-content/uploads/2021/07/afternoon-grey.png').attr('srcset', '/wp-content/uploads/2021/07/afternoon-grey.png 1x, /wp-content/uploads/2021/07/afternoon-grey.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/07/afternoon-grey.png');
  }
}  
  
  
function showMorning() {
  show(".showAtMorning");
  enableMorningIcon();
  enableLabel('#morningLabel');
  disableLabel('#afternoonLabel');
  disableLabel('#eveningLabel');
  disableEveningIcon();
  disableAfternoonIcon();
}
function showAfternoon() {
  show('.showAtAfternoon');
  enableAfternoonIcon();
  enableLabel('#afternoonLabel');
  disableLabel('#eveningLabel');
  disableLabel('#morningLabel');
  disableEveningIcon();
  disableMorningIcon();
}
function showEvening() {
  show('.showAtEvening');
  enableEveningIcon();
  enableLabel('#eveningLabel');
  disableLabel('#morningLabel');
  disableLabel('#afternoonLabel');
  disableMorningIcon();
  disableAfternoonIcon();
}


function show(s) {
  console.log(s);
  $(".showAtMorning" ).hide();
  $(".showAtAfternoon" ).hide();
  $(".showAtEvening" ).hide();
  $(s).show();
}

  
function enableMorning() {
  $(".morning").click(showMorning);
}
function enableAfternoon() {
  $(".afternoon").click(showAfternoon);
}
function enableEvening() {
  $(".evening").click(showEvening);
} 

});
</script>
