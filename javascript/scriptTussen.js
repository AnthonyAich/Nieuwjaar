        function intervalStarten() {
            myVar = setInterval(myTimer, 1);
        }
        j = 365;

        function myTimer() {
            document.getElementById("buttonStart").style.display = "none";
            document.getElementById("dag").innerHTML = j;
            j--;
            document.getElementById("dagBegin").style.visibility = "hidden";
            document.getElementById("dag").style.display = "block";


            if (j == 0) {
                myStopFunction();
            }
            if (j == 364) {
                document.getElementById("maand").innerHTML = "December";
                document.getElementById("tekstBallonetjeP").style.opacity = "0.7";
                document.getElementById("dag").style.opacity = "1";
                document.getElementById("dag").style.fontSize = "20px";
                document.getElementById("dag").style.left = "55.8vw";
                document.getElementById("maand").style.top = "35vh";
                document.getElementById("bounce").style.animation = "non";
                document.getElementById("bounce").style.opacity = "0.5";



            }
            if (j == 343) {
                document.getElementById("maand").innerHTML = "November";
                document.getElementById("tekstBallonetjeP").style.opacity = "0.6";
                document.getElementById("dag").style.opacity = "1";
                document.getElementById("dag").style.fontSize = "25px";
                document.getElementById("dag").style.left = "53.8vw";
                document.getElementById("maand").style.top = "34.5vh";
            }
            if (j == 304) {
                document.getElementById("maand").innerHTML = "Oktober";
                document.getElementById("tekstBallonetjeP").style.opacity = "0.5";
                document.getElementById("dag").style.opacity = "1";
                document.getElementById("dag").style.fontSize = "27px";
                document.getElementById("dag").style.left = "52.8vw";
                document.getElementById("maand").style.top = "34vh";

            }
            if (j == 273) {
                document.getElementById("maand").innerHTML = "September";
                document.getElementById("tekstBallonetjeP").style.opacity = "0.4";
                document.getElementById("dag").style.opacity = "1";
                document.getElementById("dag").style.fontSize = "30px";
                document.getElementById("dag").style.left = "51.8vw";
                document.getElementById("maand").style.top = "33.5vh";
            }
            if (j == 243) {
                document.getElementById("maand").innerHTML = "Augustus";
                document.getElementById("tekstBallonetjeP").style.opacity = "0.4";
                document.getElementById("dag").style.opacity = "1";
                document.getElementById("dag").style.fontSize = "35px";
                document.getElementById("dag").style.left = "50.8vw";
                document.getElementById("maand").style.top = "33vh";
            }
            if (j == 213) {
                document.getElementById("maand").innerHTML = "Juli";
                document.getElementById("tekstBallonetjeP").style.opacity = "0.4";
                document.getElementById("dag").style.opacity = "1";
                document.getElementById("dag").style.fontSize = "37px";
                document.getElementById("dag").style.left = "50vw";
                document.getElementById("maand").style.top = "32.5vh";
                document.getElementById("bounce").style.opacity = "0.25";

            }
            if (j == 182) {
                document.getElementById("maand").innerHTML = "Juni";
                document.getElementById("tekstBallonetjeP").style.opacity = "0.3";
                document.getElementById("dag").style.opacity = "1";
                document.getElementById("dag").style.fontSize = "40px";
                document.getElementById("dag").style.left = "48vw";
                document.getElementById("maand").style.top = "32vh";

            }
            if (j == 151) {
                document.getElementById("maand").innerHTML = "Mei";
                document.getElementById("tekstBallonetjeP").style.opacity = "0.3";
                document.getElementById("dag").style.opacity = "1";
                document.getElementById("dag").style.fontSize = "43px";
                document.getElementById("dag").style.left = "47vw";
                document.getElementById("maand").style.top = "31.5vh";

            }
            if (j == 120) {
                document.getElementById("maand").innerHTML = "April";
                document.getElementById("tekstBallonetjeP").style.opacity = "0.2";
                document.getElementById("dag").style.opacity = "1";
                document.getElementById("dag").style.fontSize = "45px";
                document.getElementById("dag").style.left = "46vw";
                
                document.getElementById("maand").style.top = "31vh";

            }
            if (j == 91) {
                document.getElementById("maand").innerHTML = "Maart";
                document.getElementById("tekstBallonetjeP").style.opacity = "0.2";
                document.getElementById("dag").style.opacity = "1";
                document.getElementById("dag").style.fontSize = "50px";
                document.getElementById("dag").style.left = "45vw";
                document.getElementById("maand").style.top = "30.5vh";

            }
            if (j == 60) {
                document.getElementById("maand").innerHTML = "Februari";
                document.getElementById("tekstBallonetjeP").style.opacity = "0.1";
                document.getElementById("dag").style.opacity = "1";
                document.getElementById("dag").style.fontSize = "53px";
                document.getElementById("dag").style.left = "44vw";
                document.getElementById("maand").style.top = "30vh";
                document.getElementById("bounce").style.opacity = "0.0";
                document.getElementById("zon").style.opacity = "0.0";



            }
            if (j == 31) {
                document.getElementById("maand").innerHTML = "Januari";
                document.getElementById("tekstBallonetjeP").style.display = "none";
                document.getElementById("dag").style.display = "block";
                document.getElementById("dag").style.opacity = "1";
                document.getElementById("dag").style.fontSize = "55px";                                               
            }


        }

        function myStopFunction() {
            clearInterval(myVar);
            setTimeout(function () {
            overNaarDia2();
        }, 1000);
        }

        function tekstjes() {

        setTimeout(function () {
                document.getElementById("dia3").style.display= "none";
                document.getElementById("dia4").style.display= "block";
        }, 500);
        }

        function naarFoto2() {
                document.getElementById("dior").style.display= "none";
                document.getElementById("plant").style.display= "block";
        }

        function naarFoto3() {
                document.getElementById("bril").style.display= "none";
                document.getElementById("dior").style.display= "block";
        }
