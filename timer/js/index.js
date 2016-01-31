 $(document).ready(function() {
   var screen = $("#scrn").html();
   var brek = $("#brk").html();
   var done=false;
   // event listeners for session length
   $("button").on("click", function() {

     var bt = $(this).attr('id');
     console.log(bt);

     switch (bt) {
       case 'plusS':
         screen++;
         $("#scrn").html(screen);
         $("#time").html(screen);
         break;
       case 'plusB':
         brek++;
         $("#brk").html(brek);
         break;
       case 'minusS':
         if (screen > 1) {
           screen--;
         }
         $("#scrn").html(screen);
         $("#time").html(screen);
         break;

       case 'minusB':
         if (brek > 0) {
           brek--;
         }
         $("#brk").html(brek);
         break;
     }

   });

   $("#start").on("click", function() {
     $("button").attr("disabled", "disabled");
     $("#rst").prop('disabled', false);
     var rest = brek;
     var minutes = screen;
     var sec = Math.floor(minutes * 60);
     
     function setTime() {
       console.log("done:" +done);
       if (sec > 0) {

         console.log(sec);
         sec--;
         $("#time").html(minutes - 1 + ":" + sec % 60);
         if (sec % 60 < 10) {

           $("#time").html(minutes - 1 + ":0" + sec % 60);
         }
         if (sec % 60 == 0) {
           minutes--;

         } if (minutes==0 && !done) {
           
           console.log("restart");
           minutes=rest;
           sec = Math.floor(minutes * 60);
           done=true;
         } else if (minutes==0) { 
         minutes=screen;
           sec = Math.floor(minutes * 60);       
           done=false;
         }
       }

     }
     function hello () {
       //console.log("breaktime");
      // setInterval(setTime,brek* 1000);
     }
     setInterval(setTime, 1000);
     setInterval(setTime, screen*60*1000);
   });

   $("#rst").click(function() {
     window.location = self.location;

   });

 });