 // M+,M- ,power button inactive
 // To-Do : catch case of multiple symbols
 // catch case of wrong order

 $(document).ready(function() {
   var str = "";
   var calc = [];

   $(".btn-small").on("click", function(data) {
     switch (this.value) {
       case "CE":
         str = "";
         calc = [];
         $("#screen").html("");
         console.log("clear");
         break;

       case "+":
       case "-":
       case "/":
       case "*":
         calc.push(str);
         calc.push(this.value);
         str = "";

         console.log(calc);
         break;
       case "=":
         calc.push(str);
         var equ = calc.join();
         var x = equ.replace(/,/g, "");
         var nS = x.match(/[^0-9]/g);
         var nD = x.match(/\d+/g);
         console.log(calc.join());
         console.log("this is nD " + nD);
         console.log("this is nS " + nS);
         if (nS == null||nD == null || nS.length >= nD.length) {
           console.log("houston we have a problem ");
           $("#screen").html("ERROR");
          // console.log(sum);
         str = "";
         calc = [];
         } else {
         console.log("this is nD " + nD);
         console.log("this is nS " + nS);
         //console.log(x);
         var sum = eval(x);

         console.log(sum);
         $("#screen").html(sum);
         console.log(sum);
         str = "";
         calc = [];
         }
         break;

       default:
         str += this.value;
         $("#screen").html(str);
         console.log(str);
     }
     /* if (this.value=="CE") {
        str="";
       $("#screen").html("");  
        
      } else {
      
      str+=this.value;
      $("#screen").html(this.value);
     console.log(str);
      }*/
   });
   // 
 });