$(document).ready(function() {
		  $('.nav-toggle').click(function(){
			//get collapse content selector
			var collapse_content_selector = $(this).attr('href');					
					
			//make the collapse content to be shown or hide
			var toggle_switch = $(this);
			$(collapse_content_selector).toggle(function(){
			  if($(this).css('display')=='none'){
                                //change the button label to be 'Show'
				toggle_switch.html('Show');
			  }else{
                                //change the button label to be 'Hide'
				toggle_switch.html('Hide');
          
        // generate random quote here
        var message = getMessage();
        $(collapse_content_selector).html("<blockquote><p>" + message + "</p></blockquote>");
          
			  }
			});
		  });
				
		});	

function getMessage() {
  // create array of murphy laws
  var ar = new Array(20);
  ar[0] = "Nothing is as easy as it looks.";
  ar[1] = "Everything takes longer than you think.";
  ar[2] = "Anything that can go wrong will go wrong.";
  ar[3] = "If there is a possibility of several things going wrong, the one that will cause the most damage will be the one to go wrong.";
  ar[4] = "If there is a worse time for something to go wrong, it will happen then.";
  ar[5] = "If anything simply cannot go wrong, it will anyway.";
  ar[6] = "If you perceive that there are four possible ways in which a procedure can go wrong, and circumvent these, then a fifth way, unprepared for, will promptly develop.";
  ar[7] = "Left to themselves, things tend to go from bad to worse.";
  ar[8] = "If everything seems to be going well, you have obviously overlooked something.";
  ar[9] = "Nature always sides with the hidden flaw.";
  ar[10] = "Mother nature is a bitch.";
  ar[11] = "It is impossible to make anything foolproof because fools are so ingenious.";
  ar[12] = "Whenever you set out to do something, something else must be done first.";
  ar[13] = "Every solution breeds new problems.";
  ar[14] = "Trust everybody ... then cut the cards.";
  ar[15] = "Two wrongs are only the beginning.";
  ar[16] = "If at first you don't succeed, destroy all evidence that you tried.";
  ar[17] = "To succeed in politics, it is often necessary to rise above your principles.";
  ar[18] = "Exceptions prove the rule ... and wreck the budget.";
  ar[19] = "Success always occurs in private, and failure in full view.";

  var now = new Date();
  var sec = now.getSeconds();
  return ar[sec % 20];
}