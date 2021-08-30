jQuery(function($) {
  function showColumn(s) {
    $(s).show();
  } 


  // Mood Tracker  
  function showMoodImage(a,b) {
    if (a == 1) {
      $(b).attr('src', '/wp-content/uploads/2021/07/profile-gr-b.png').attr('srcset', '/wp-content/uploads/2021/07/profile-gr-b.png 1x, /wp-content/uploads/2021/07/profile-gr-b.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/07/profile-gr-b.png');
    } else if (a == 2) {
      $(b).attr('src', '/wp-content/uploads/2021/07/profile-gr-c.png').attr('srcset', '/wp-content/uploads/2021/07/profile-gr-c.png 1x, /wp-content/uploads/2021/07/profile-gr-c.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/07/profile-gr-c.png');
    } else if (a == 3) {
      $(b).attr('src', '/wp-content/uploads/2021/07/profile-gr-d.png').attr('srcset', '/wp-content/uploads/2021/07/profile-gr-d.png 1x, /wp-content/uploads/2021/07/profile-gr-d.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/07/profile-gr-d.png');
    } else if (a == 4) {
      $(b).attr('src', '/wp-content/uploads/2021/07/profile-gr-e.png').attr('srcset', '/wp-content/uploads/2021/07/profile-gr-e.png 1x, /wp-content/uploads/2021/07/profile-gr-e.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/07/profile-gr-e.png');
    } else if (a == 5) {
      $(b).attr('src', '/wp-content/uploads/2021/07/profile-a.png').attr('srcset', '/wp-content/uploads/2021/07/profile-a.png 1x, /wp-content/uploads/2021/07/profile-a.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/07/profile-a.png');
    } else if (a == 6) {
      $(b).attr('src', '/wp-content/uploads/2021/07/profile-b.png').attr('srcset', '/wp-content/uploads/2021/07/profile-b.png 1x, /wp-content/uploads/2021/07/profile-b.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/07/profile-b.png');
    } else if (a == 7) {
      $(b).attr('src', '/wp-content/uploads/2021/07/profile-c.png').attr('srcset', '/wp-content/uploads/2021/07/profile-c.png 1x, /wp-content/uploads/2021/07/profile-c.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/07/profile-c.png');
    };
  } 

  showMoodImage(phpData.thisDay, '.thisDay img');
  showMoodImage(phpData.thisWeek, '.thisWeek img');
  showMoodImage(phpData.totalAverage, '.totalAverage img');


  // Badges
  function showBadgesAndInfo(a,b,c) {
    if (a == 1){
      showColumn(b);
      showColumn(c);
    };

    showBadgesAndInfo(phpData.bcWeek1, ".bcBadgeWeek1", ".bcInfoWeek1");
    showBadgesAndInfo(phpData.donatingWeek1, ".donatingBadgeWeek1", ".donatingInfoWeek1");
    showBadgesAndInfo(phpData.mioWeek1, ".mioBadgeWeek1", ".mioInfoWeek1");
    showBadgesAndInfo(phpData.museumWeek1, ".museumBadgeWeek1", ".museumInfoWeek1");
    showBadgesAndInfo(phpData.nwWeek1, ".nwBadgeWeek1", ".nwInfoWeek1");
    showBadgesAndInfo(phpData.rbWeek1, ".rbBadgeWeek1", ".rbInfoWeek1");
    showBadgesAndInfo(phpData.twmWeek1, ".twmBadgeWeek1", ".twmInfoWeek1");
    showBadgesAndInfo(phpData.theatreWeek1, ".theatreBadgeWeek1", ".theatreInfoWeek1");
    showBadgesAndInfo(phpData.vcWeek1, ".vcBadgeWeek1", ".vcInfoWeek1");
    showBadgesAndInfo(phpData.volunteerWeek1, ".volunteerBadgeWeek1", ".volunteerInfoWeek1");
    showBadgesAndInfo(phpData.bcWeek2, ".bcBadgeWeek2", ".bcInfoWeek2");
    showBadgesAndInfo(phpData.donatingWeek2, ".donatingBadgeWeek2", ".donatingInfoWeek2");
    showBadgesAndInfo(phpData.mioWeek2, ".mioBadgeWeek2", ".mioInfoWeek2");
    showBadgesAndInfo(phpData.museumWeek2, ".museumBadgeWeek2", ".museumInfoWeek2");
    showBadgesAndInfo(phpData.nwWeek2, ".nwBadgeWeek2", ".nwInfoWeek2");
    showBadgesAndInfo(phpData.rbWeek2, ".rbBadgeWeek2", ".rbInfoWeek2");
    showBadgesAndInfo(phpData.twmWeek2, ".twmBadgeWeek2", ".twmInfoWeek2");
    showBadgesAndInfo(phpData.theatreWeek2, ".theatreBadgeWeek2", ".theatreInfoWeek2");
    showBadgesAndInfo(phpData.vcWeek2, ".vcBadgeWeek2", ".vcInfoWeek2");
    showBadgesAndInfo(phpData.volunteerWeek2, ".volunteerBadgeWeek2", ".volunteerInfoWeek2");
    showBadgesAndInfo(phpData.bcWeek3, ".bcBadgeWeek3", ".bcInfoWeek3");
    showBadgesAndInfo(phpData.donatingWeek3, ".donatingBadgeWeek3", ".donatingInfoWeek3");
    showBadgesAndInfo(phpData.mioWeek3, ".mioBadgeWeek3", ".mioInfoWeek3");
    showBadgesAndInfo(phpData.museumWeek3, ".museumBadgeWeek3", ".museumInfoWeek3");
    showBadgesAndInfo(phpData.nwWeek3, ".nwBadgeWeek3", ".nwInfoWeek3");
    showBadgesAndInfo(phpData.rbWeek3, ".rbBadgeWeek3", ".rbInfoWeek3");
    showBadgesAndInfo(phpData.twmWeek3, ".twmBadgeWeek3", ".twmInfoWeek3");
    showBadgesAndInfo(phpData.theatreWeek3, ".theatreBadgeWeek3", ".theatreInfoWeek3");
    showBadgesAndInfo(phpData.vcWeek3, ".vcBadgeWeek3", ".vcInfoWeek3");
    showBadgesAndInfo(phpData.volunteerWeek3, ".volunteerBadgeWeek3", ".volunteerInfoWeek3");
    showBadgesAndInfo(phpData.bcWeek4, ".bcBadgeWeek4", ".bcInfoWeek4");
    showBadgesAndInfo(phpData.donatingWeek4, ".donatingBadgeWeek4", ".donatingInfoWeek4");
    showBadgesAndInfo(phpData.mioWeek4, ".mioBadgeWeek4", ".mioInfoWeek4");
    showBadgesAndInfo(phpData.museumWeek4, ".museumBadgeWeek4", ".museumInfoWeek4");
    showBadgesAndInfo(phpData.nwWeek4, ".nwBadgeWeek4", ".nwInfoWeek4");
    showBadgesAndInfo(phpData.rbWeek4, ".rbBadgeWeek4", ".rbInfoWeek4");
    showBadgesAndInfo(phpData.twmWeek4, ".twmBadgeWeek4", ".twmInfoWeek4");
    showBadgesAndInfo(phpData.theatreWeek4, ".theatreBadgeWeek4", ".theatreInfoWeek4");
    showBadgesAndInfo(phpData.vcWeek4, ".vcBadgeWeek4", ".vcInfoWeek4");
    showBadgesAndInfo(phpData.volunteerWeek4, ".volunteerBadgeWeek4", ".volunteerInfoWeek4");
    showBadgesAndInfo(phpData.bcWeek5, ".bcBadgeWeek5", ".bcInfoWeek5");
    showBadgesAndInfo(phpData.donatingWeek5, ".donatingBadgeWeek5", ".donatingInfoWeek5");
    showBadgesAndInfo(phpData.mioWeek5, ".mioBadgeWeek5", ".mioInfoWeek5");
    showBadgesAndInfo(phpData.museumWeek5, ".museumBadgeWeek5", ".museumInfoWeek5");
    showBadgesAndInfo(phpData.nwWeek5, ".nwBadgeWeek5", ".nwInfoWeek5");
    showBadgesAndInfo(phpData.rbWeek5, ".rbBadgeWeek5", ".rbInfoWeek5");
    showBadgesAndInfo(phpData.twmWeek5, ".twmBadgeWeek5", ".twmInfoWeek5");
    showBadgesAndInfo(phpData.theatreWeek5, ".theatreBadgeWeek5", ".theatreInfoWeek5");
    showBadgesAndInfo(phpData.vcWeek5, ".vcBadgeWeek5", ".vcInfoWeek5");
    showBadgesAndInfo(phpData.volunteerWeek5, ".volunteerBadgeWeek5", ".volunteerInfoWeek5");
    showBadgesAndInfo(phpData.bcWeek6, ".bcBadgeWeek6", ".bcInfoWeek6");
    showBadgesAndInfo(phpData.donatingWeek6, ".donatingBadgeWeek6", ".donatingInfoWeek6");
    showBadgesAndInfo(phpData.mioWeek6, ".mioBadgeWeek6", ".mioInfoWeek6");
    showBadgesAndInfo(phpData.museumWeek6, ".museumBadgeWeek6", ".museumInfoWeek6");
    showBadgesAndInfo(phpData.nwWeek6, ".nwBadgeWeek6", ".nwInfoWeek6");
    showBadgesAndInfo(phpData.rbWeek6, ".rbBadgeWeek6", ".rbInfoWeek6");
    showBadgesAndInfo(phpData.twmWeek6, ".twmBadgeWeek6", ".twmInfoWeek6");
    showBadgesAndInfo(phpData.theatreWeek6, ".theatreBadgeWeek6", ".theatreInfoWeek6");
    showBadgesAndInfo(phpData.vcWeek6, ".vcBadgeWeek6", ".vcInfoWeek6");
    showBadgesAndInfo(phpData.volunteerWeek6, ".volunteerBadgeWeek6", ".volunteerInfoWeek6");
    showBadgesAndInfo(phpData.bcWeek7, ".bcBadgeWeek7", ".bcInfoWeek7");
    showBadgesAndInfo(phpData.donatingWeek7, ".donatingBadgeWeek7", ".donatingInfoWeek7");
    showBadgesAndInfo(phpData.mioWeek7, ".mioBadgeWeek7", ".mioInfoWeek7");
    showBadgesAndInfo(phpData.museumWeek7, ".museumBadgeWeek7", ".museumInfoWeek7");
    showBadgesAndInfo(phpData.nwWeek7, ".nwBadgeWeek7", ".nwInfoWeek7");
    showBadgesAndInfo(phpData.rbWeek7, ".rbBadgeWeek7", ".rbInfoWeek7");
    showBadgesAndInfo(phpData.twmWeek7, ".twmBadgeWeek7", ".twmInfoWeek7");
    showBadgesAndInfo(phpData.theatreWeek7, ".theatreBadgeWeek7", ".theatreInfoWeek7");
    showBadgesAndInfo(phpData.vcWeek7, ".vcBadgeWeek7", ".vcInfoWeek7");
    showBadgesAndInfo(phpData.volunteerWeek7, ".volunteerBadgeWeek7", ".volunteerInfoWeek7");
    showBadgesAndInfo(phpData.bcWeek8, ".bcBadgeWeek8", ".bcInfoWeek8");
    showBadgesAndInfo(phpData.donatingWeek8, ".donatingBadgeWeek8", ".donatingInfoWeek8");
    showBadgesAndInfo(phpData.mioWeek8, ".mioBadgeWeek8", ".mioInfoWeek8");
    showBadgesAndInfo(phpData.museumWeek8, ".museumBadgeWeek8", ".museumInfoWeek8");
    showBadgesAndInfo(phpData.nwWeek8, ".nwBadgeWeek8", ".nwInfoWeek8");
    showBadgesAndInfo(phpData.rbWeek8, ".rbBadgeWeek8", ".rbInfoWeek8");
    showBadgesAndInfo(phpData.twmWeek8, ".twmBadgeWeek8", ".twmInfoWeek8");
    showBadgesAndInfo(phpData.theatreWeek8, ".theatreBadgeWeek8", ".theatreInfoWeek8");
    showBadgesAndInfo(phpData.vcWeek8, ".vcBadgeWeek8", ".vcInfoWeek8");
    showBadgesAndInfo(phpData.volunteerWeek8, ".volunteerBadgeWeek8", ".volunteerInfoWeek8");
  }


  // Weekly and Special Tasks
  function showWeeklyAndSpecialTasks(a,b) {
    if (a == 1) {
      showColumn(b);
    }
  }

  showWeeklyAndSpecialTasks(phpData.wtValue1Week1, ".wt1stWeek1");
  showWeeklyAndSpecialTasks(phpData.wtValue2Week1, ".wt2ndWeek1");
  showWeeklyAndSpecialTasks(phpData.wtValue3Week1, ".wt3rdWeek1");
  showWeeklyAndSpecialTasks(phpData.wtValue1Week2, ".wt1stWeek2");
  showWeeklyAndSpecialTasks(phpData.wtValue2Week2, ".wt2ndWeek2");
  showWeeklyAndSpecialTasks(phpData.wtValue3Week2, ".wt3rdWeek2");
  showWeeklyAndSpecialTasks(phpData.wtValue1Week3, ".wt1stWeek3");
  showWeeklyAndSpecialTasks(phpData.wtValue1Week4, ".wt1stWeek4");
  showWeeklyAndSpecialTasks(phpData.wtValue1Week5, ".wt1stWeek5");
  showWeeklyAndSpecialTasks(phpData.wtValue2Week5, ".wt2ndWeek5");
  showWeeklyAndSpecialTasks(phpData.wtValue1Week6, ".wt1stWeek6");
  showWeeklyAndSpecialTasks(phpData.wtValue1Week7, ".wt1stWeek7");
  showWeeklyAndSpecialTasks(phpData.wtValue2Week7, ".wt2ndWeek7");
  showWeeklyAndSpecialTasks(phpData.wtValue3Week7, ".wt3rdWeek7");
  showWeeklyAndSpecialTasks(phpData.wtValue1Week8, ".wt1stWeek8");
  showWeeklyAndSpecialTasks(phpData.wtValue2Week8, ".wt2ndWeek8");
  showWeeklyAndSpecialTasks(phpData.wtValue3Week8, ".wt3rdWeek8");
  showWeeklyAndSpecialTasks(phpData.stValueWeek1, ".stWeek1");
  showWeeklyAndSpecialTasks(phpData.stValueWeek2, ".stWeek2");
  showWeeklyAndSpecialTasks(phpData.stValueWeek3, ".stWeek3");
  showWeeklyAndSpecialTasks(phpData.stValueWeek4, ".stWeek4");
  showWeeklyAndSpecialTasks(phpData.stValueWeek5, ".stWeek5");
  showWeeklyAndSpecialTasks(phpData.stValueWeek6, ".stWeek6");
  showWeeklyAndSpecialTasks(phpData.stValueWeek7, ".stWeek7");
  showWeeklyAndSpecialTasks(phpData.stValueWeek8, ".stWeek8");
});