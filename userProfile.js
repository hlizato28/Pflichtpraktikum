jQuery(function($) {
  function showColumn(s) {
    $(s).show();
  } 


  // Mood Tracker  
  function showMoodImage(a,b) {
    if (a == 1) {
      $(b).attr('src', '/wp-content/uploads/2021/08/smileys-–-1.png').attr('srcset', '/wp-content/uploads/2021/08/smileys-–-1.png 1x, /wp-content/uploads/2021/08/smileys-–-1.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/08/smileys-–-1.png');
    } else if (a == 2) {
      $(b).attr('src', '/wp-content/uploads/2021/08/smileys-–-2.png').attr('srcset', '/wp-content/uploads/2021/08/smileys-–-2.png 1x, /wp-content/uploads/2021/08/smileys-–-2.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/08/smileys-–-2.png');
    } else if (a == 3) {
      $(b).attr('src', '/wp-content/uploads/2021/08/smileys-3.png').attr('srcset', '/wp-content/uploads/2021/08/smileys-3.png 1x, /wp-content/uploads/2021/08/smileys-3.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/08/smileys-3.png');
    } else if (a == 4) {
      $(b).attr('src', '/wp-content/uploads/2021/08/smileys-4.png').attr('srcset', '/wp-content/uploads/2021/08/smileys-4.png 1x, /wp-content/uploads/2021/08/smileys-4.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/08/smileys-4.png');
    } else if (a == 5) {
      $(b).attr('src', '/wp-content/uploads/2021/08/smileys-–-5.png').attr('srcset', '/wp-content/uploads/2021/08/smileys-–-5.png 1x, /wp-content/uploads/2021/08/smileys-–-5.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/08/smileys-–-5.png');
    } else if (a == 6) {
      $(b).attr('src', '/wp-content/uploads/2021/08/smileys-6.png').attr('srcset', '/wp-content/uploads/2021/08/smileys-6.png 1x, /wp-content/uploads/2021/08/smileys-6.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/08/smileys-6.png');
    } else if (a == 7) {
      $(b).attr('src', '/wp-content/uploads/2021/08/smileys-7.png').attr('srcset', '/wp-content/uploads/2021/08/smileys-7.png 1x, /wp-content/uploads/2021/08/smileys-7.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/08/smileys-7.png');
    };
  } 

  showMoodImage(phpData.thisDay, '.thisDay img');
  showMoodImage(phpData.thisWeek, '.thisWeek img');
  showMoodImage(phpData.totalAverage, '.totalAverage img');


  // Badges + Nature Week
  function showBadgesAndInfo(a,b,c) {
    if (a == 1){
      showColumn(b);
      showColumn(c);
    };
  }

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
    showBadgesAndInfo(phpData.pcWeek1, ".pcBadgeWeek1");
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
    showBadgesAndInfo(phpData.pcWeek2, ".pcBadgeWeek2");
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
    showBadgesAndInfo(phpData.pcWeek3, ".pcBadgeWeek3");
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
    showBadgesAndInfo(phpData.pcWeek4, ".pcBadgeWeek4");
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
    showBadgesAndInfo(phpData.pcWeek5, ".pcBadgeWeek5");
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
    showBadgesAndInfo(phpData.pcWeek6, ".pcBadgeWeek6");
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
    showBadgesAndInfo(phpData.pcWeek7, ".pcBadgeWeek7");
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
    showBadgesAndInfo(phpData.pcWeek8, ".pcBadgeWeek8");
    showBadgesAndInfo(phpData.wtSevenPlant, ".wtSevenPlant");
    showBadgesAndInfo(phpData.wtSevenBike, ".wtSevenBike");
    showBadgesAndInfo(phpData.wtSevenWalk, ".wtSevenWalk");
    showBadgesAndInfo(phpData.wtSevenEat, ".wtSevenEat");
    showBadgesAndInfo(phpData.wtSevenWatch, ".wtSevenWatch");
    showBadgesAndInfo(phpData.wtSevenWater, ".wtSevenWater");
    showBadgesAndInfo(phpData.wtSevenBuy, ".wtSevenBuy");
    showBadgesAndInfo(phpData.wtSevenWorkout, ".wtSevenWorkout");
    showBadgesAndInfo(phpData.wtSevenListen, ".wtSevenListen");


  // Weekly and Special Tasks (-WT Week 2)
  function showWeeklyAndSpecialTasks(a,b) {
    if (a == 1) {
      showColumn(b);
    }
  }

  showWeeklyAndSpecialTasks(phpData.wtValue1Week1, ".wt1stWeek1");
  showWeeklyAndSpecialTasks(phpData.wtValue2Week1, ".wt2ndWeek1");
  showWeeklyAndSpecialTasks(phpData.wtValue3Week1, ".wt3rdWeek1");
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
  showWeeklyAndSpecialTasks(phpData.stValueWeek2, ".stWeek21st");
  showWeeklyAndSpecialTasks(phpData.stValueWeek22nd, ".stWeek22nd");
  showWeeklyAndSpecialTasks(phpData.stValueWeek23rd, ".stWeek23rd");
  showWeeklyAndSpecialTasks(phpData.stValueWeek24th, ".stWeek24th");
  showWeeklyAndSpecialTasks(phpData.stValueWeek25th, ".stWeek25th");
  showWeeklyAndSpecialTasks(phpData.stValueWeek3, ".stWeek3");
  showWeeklyAndSpecialTasks(phpData.stValueWeek4, ".stWeek4");
  showWeeklyAndSpecialTasks(phpData.stValueWeek5, ".stWeek5");
  showWeeklyAndSpecialTasks(phpData.stValueWeek6, ".stWeek6");
  showWeeklyAndSpecialTasks(phpData.stValueWeek7, ".stWeek7");
  showWeeklyAndSpecialTasks(phpData.stValueWeek8, ".stWeek8");


  // Weekly Task Week 2
  function showWeeklyTaskWeek2(a,b,c,d,e) {
    if (c == 1) {
      if (a == "Appreciation of Beauty & Excellence") {
        $(b).attr('src', '/wp-content/uploads/2021/08/Appreciation-of-Beauty-Excellence.png').attr('srcset', '/wp-content/uploads/2021/08/Appreciation-of-Beauty-Excellence.png 1x, /wp-content/uploads/2021/08/Appreciation-of-Beauty-Excellence.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/08/Appreciation-of-Beauty-Excellence.png');
        showColumn(d);
        showColumn(e);
      } else if (a == "Bravery") {
        $(b).attr('src', '/wp-content/uploads/2021/08/Bravery.png').attr('srcset', '/wp-content/uploads/2021/08/Bravery.png 1x, /wp-content/uploads/2021/08/Bravery.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/08/Bravery.png');
        showColumn(d);
        showColumn(e);
      } else if (a == "Creativity") {
        $(b).attr('src', '/wp-content/uploads/2021/08/Creativity.png').attr('srcset', '/wp-content/uploads/2021/08/Creativity.png 1x, /wp-content/uploads/2021/08/Creativity.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/08/Creativity.png');
        showColumn(d);
        showColumn(e);
      } else if (a == "Curiosity") {
        $(b).attr('src', '/wp-content/uploads/2021/08/Curiosity.png').attr('srcset', '/wp-content/uploads/2021/08/Curiosity.png 1x, /wp-content/uploads/2021/08/Curiosity.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/08/Curiosity.png');
        showColumn(d);
        showColumn(e);
      } else if (a == "Fairness") {
        $(b).attr('src', '/wp-content/uploads/2021/08/Fairness.png').attr('srcset', '/wp-content/uploads/2021/08/Fairness.png 1x, /wp-content/uploads/2021/08/Fairness.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/08/Fairness.png');
        showColumn(d);
        showColumn(e);
      } else if (a == "Forgiveness") {
        $(b).attr('src', '/wp-content/uploads/2021/08/Forgiveness.png').attr('srcset', '/wp-content/uploads/2021/08/Forgiveness.png 1x, /wp-content/uploads/2021/08/Forgiveness.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/08/Forgiveness.png');
        showColumn(d);
        showColumn(e);
      } else if (a == "Gratitude") {
        $(b).attr('src', '/wp-content/uploads/2021/08/Gratitude.png').attr('srcset', '/wp-content/uploads/2021/08/Gratitude.png 1x, /wp-content/uploads/2021/08/Gratitude.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/08/Gratitude.png');
        showColumn(d);
        showColumn(e);
      } else if (a == "Honesty") {
        $(b).attr('src', '/wp-content/uploads/2021/08/Honeesty.png').attr('srcset', '/wp-content/uploads/2021/08/Honeesty.png 1x, /wp-content/uploads/2021/08/Honeesty.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/08/Honeesty.png');
        showColumn(d);
        showColumn(e);
      } else if (a == "Hope") {
        $(b).attr('src', '/wp-content/uploads/2021/08/Hope.png').attr('srcset', '/wp-content/uploads/2021/08/Hope.png 1x, /wp-content/uploads/2021/08/Hope.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/08/Hope.png');
        showColumn(d);
        showColumn(e);
      } else if (a == "Humility") {
        $(b).attr('src', '/wp-content/uploads/2021/08/Humility.png').attr('srcset', '/wp-content/uploads/2021/08/Humility.png 1x, /wp-content/uploads/2021/08/Humility.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/08/Humility.png');
        showColumn(d);
        showColumn(e);
      } else if (a == "Humor") {
        $(b).attr('src', '/wp-content/uploads/2021/08/Humour.png').attr('srcset', '/wp-content/uploads/2021/08/Humour.png 1x, /wp-content/uploads/2021/08/Humour.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/08/Humour.png');
        showColumn(d);
        showColumn(e);
      } else if (a == "Judgment") {
        $(b).attr('src', '/wp-content/uploads/2021/08/Judgement.png').attr('srcset', '/wp-content/uploads/2021/08/Judgement.png 1x, /wp-content/uploads/2021/08/Judgement.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/08/Judgement.png');
        showColumn(d);
        showColumn(e);
      } else if (a == "Kindness") {
        $(b).attr('src', '/wp-content/uploads/2021/08/Kindness.png').attr('srcset', '/wp-content/uploads/2021/08/Kindness.png 1x, /wp-content/uploads/2021/08/Kindness.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/08/Kindness.png');
        showColumn(d);
        showColumn(e);
      } else if (a == "Leadership") {
        $(b).attr('src', '/wp-content/uploads/2021/08/Leadership.png').attr('srcset', '/wp-content/uploads/2021/08/Leadership.png 1x, /wp-content/uploads/2021/08/Leadership.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/08/Leadership.png');
        showColumn(d);
        showColumn(e);
      } else if (a == "Love") {
        $(b).attr('src', '/wp-content/uploads/2021/08/Love.png').attr('srcset', '/wp-content/uploads/2021/08/Love.png 1x, /wp-content/uploads/2021/08/Love.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/08/Love.png');
        showColumn(d);
        showColumn(e);
      } else if (a == "Love of Learning") {
        $(b).attr('src', '/wp-content/uploads/2021/08/Love-of-learning.png').attr('srcset', '/wp-content/uploads/2021/08/Love-of-learning.png 1x, /wp-content/uploads/2021/08/Love-of-learning.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/08/Love-of-learning.png');
        showColumn(d);
        showColumn(e);
      } else if (a == "Perseverance") {
        $(b).attr('src', '/wp-content/uploads/2021/08/Perseverance.png').attr('srcset', '/wp-content/uploads/2021/08/Perseverance.png 1x, /wp-content/uploads/2021/08/Perseverance.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/08/Perseverance.png');
        showColumn(d);
        showColumn(e);
      } else if (a == "Perspective") {
        $(b).attr('src', '/wp-content/uploads/2021/08/Perspective.png').attr('srcset', '/wp-content/uploads/2021/08/Perspective.png 1x, /wp-content/uploads/2021/08/Perspective.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/08/Perspective.png');
        showColumn(d);
        showColumn(e);
      } else if (a == "Prudence") {
        $(b).attr('src', '/wp-content/uploads/2021/08/Prudence.png').attr('srcset', '/wp-content/uploads/2021/08/Prudence.png 1x, /wp-content/uploads/2021/08/Prudence.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/08/Prudence.png');
        showColumn(d);
        showColumn(e);
      } else if (a == "Self-Regulation") {
        $(b).attr('src', '/wp-content/uploads/2021/08/Self-regulation.png').attr('srcset', '/wp-content/uploads/2021/08/Self-regulation.png 1x, /wp-content/uploads/2021/08/Self-regulation.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/08/Self-regulation.png');
        showColumn(d);
        showColumn(e);
      } else if (a == "Social Intelligence") {
        $(b).attr('src', '/wp-content/uploads/2021/08/Social-inteligence.png').attr('srcset', '/wp-content/uploads/2021/08/Social-inteligence.png 1x, /wp-content/uploads/2021/08/Social-inteligence.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/08/Social-inteligence.png');
        showColumn(d);
        showColumn(e);
      } else if (a == "Spirituality") {
        $(b).attr('src', '/wp-content/uploads/2021/08/Spirituality.png').attr('srcset', '/wp-content/uploads/2021/08/Spirituality.png 1x, /wp-content/uploads/2021/08/Spirituality.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/08/Spirituality.png');
        showColumn(d);
        showColumn(e);
      } else if (a == "Teamwork") {
        $(b).attr('src', '/wp-content/uploads/2021/08/Teamwork.png').attr('srcset', '/wp-content/uploads/2021/08/Teamwork.png 1x, /wp-content/uploads/2021/08/Teamwork.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/08/Teamwork.png');
        showColumn(d);
        showColumn(e);
      } else if (a == "Zest") {
        $(b).attr('src', '/wp-content/uploads/2021/08/Zest.png').attr('srcset', '/wp-content/uploads/2021/08/Zest.png 1x, /wp-content/uploads/2021/08/Zest.png 2x').attr('retina_logo_url', '/wp-content/uploads/2021/08/Zest.png');
        showColumn(d);
        showColumn(e);
      };
    };
  } 

  showWeeklyTaskWeek2(phpData.wt1stWeek2, '.wt1stWeek2Img img', phpData.wtValue1Week2, ".wt1stWeek2", ".wt1stWeek2Img");
  showWeeklyTaskWeek2(phpData.wt2ndWeek2, '.wt2ndWeek2Img img', phpData.wtValue2Week2, ".wt2ndWeek2", ".wt2ndWeek2Img");
  showWeeklyTaskWeek2(phpData.wt3rdWeek2, '.wt3rdWeek2Img img', phpData.wtValue3Week2, ".wt3rdWeek2", ".wt3rdWeek2Img");


  // Show Column Badges
  function showColumnBadges(a,b,c,d,e,f,g,h,i,j,k,l) {
    if (b == 1 || c == 1 || k == 1 || d == 1 || e == 1 || f == 1 || g == 1 || h == 1 || i == 1 || j == 1 || l == 1) {
      showColumn(a);
    };
  }  

  showColumnBadges(".badges", phpData.bcWeek1, phpData.donatingWeek1, phpData.mioWeek1, phpData.museumWeek1, phpData.nwWeek1, phpData.rbWeek1, phpData.twmWeek1, phpData.theatreWeek1, phpData.vcWeek1, phpData.volunteerWeek1, phpData.pcWeek1);
  showColumnBadges(".badges", phpData.bcWeek2, phpData.donatingWeek2, phpData.mioWeek2, phpData.museumWeek2, phpData.nwWeek2, phpData.rbWeek2, phpData.twmWeek2, phpData.theatreWeek2, phpData.vcWeek2, phpData.volunteerWeek2, phpData.pcWeek2);
  showColumnBadges(".badges", phpData.bcWeek3, phpData.donatingWeek3, phpData.mioWeek3, phpData.museumWeek3, phpData.nwWeek3, phpData.rbWeek3, phpData.twmWeek3, phpData.theatreWeek3, phpData.vcWeek3, phpData.volunteerWeek3, phpData.pcWeek3);
  showColumnBadges(".badges", phpData.bcWeek4, phpData.donatingWeek4, phpData.mioWeek4, phpData.museumWeek4, phpData.nwWeek4, phpData.rbWeek4, phpData.twmWeek4, phpData.theatreWeek4, phpData.vcWeek4, phpData.volunteerWeek4, phpData.pcWeek4);
  showColumnBadges(".badges", phpData.bcWeek5, phpData.donatingWeek5, phpData.mioWeek5, phpData.museumWeek5, phpData.nwWeek5, phpData.rbWeek5, phpData.twmWeek5, phpData.theatreWeek5, phpData.vcWeek5, phpData.volunteerWeek5, phpData.pcWeek5);
  showColumnBadges(".badges", phpData.bcWeek6, phpData.donatingWeek6, phpData.mioWeek6, phpData.museumWeek6, phpData.nwWeek6, phpData.rbWeek6, phpData.twmWeek6, phpData.theatreWeek6, phpData.vcWeek6, phpData.volunteerWeek6, phpData.pcWeek6);
  showColumnBadges(".badges", phpData.bcWeek7, phpData.donatingWeek7, phpData.mioWeek7, phpData.museumWeek7, phpData.nwWeek7, phpData.rbWeek7, phpData.twmWeek7, phpData.theatreWeek7, phpData.vcWeek7, phpData.volunteerWeek7, phpData.pcWeek7);
  showColumnBadges(".badges", phpData.bcWeek8, phpData.donatingWeek8, phpData.mioWeek8, phpData.museumWeek8, phpData.nwWeek8, phpData.rbWeek8, phpData.twmWeek8, phpData.theatreWeek8, phpData.vcWeek8, phpData.volunteerWeek8, phpData.pcWeek8);
  showColumnBadges(".wtSeven", phpData.wtSevenPlant, phpData.wtSevenBike, phpData.wtSevenWalk, phpData.wtSevenEat, phpData.wtSevenWatch, phpData.wtSevenWater, phpData.wtSevenBuy, phpData.wtSevenWorkout, phpData.wtSevenListen);


  // Show All Column
  function showAllColumn (a,b,c,d,e,f) {
    if (b == 1 || c == 1 || d == 1 || e == 1 || f == 1) {
      showColumn(a);
    };
  }

  showAllColumn(".wtWeek1", phpData.wtValue1Week1, phpData.wtValue2Week1, phpData.wtValue2Week1);
  showAllColumn(".wtWeek2", phpData.wtValue1Week2, phpData.wtValue2Week2, phpData.wtValue2Week2);
  showAllColumn(".wtWeek5", phpData.wtValue1Week5, phpData.wtValue2Week5);
  showAllColumn(".wtWeek7", phpData.wtValue1Week7, phpData.wtValue2Week7, phpData.wtValue2Week7);
  showAllColumn(".wtWeek8", phpData.wtValue1Week8, phpData.wtValue2Week8, phpData.wtValue2Week8);
  showAllColumn(".stWeek2", phpData.stValueWeek2, phpData.stValueWeek22nd, phpData.stValueWeek23rd, phpData.stValueWeek24th, phpData.stValueWeek25th);


  let bcWeek1 = phpData.bcWeek1;
});