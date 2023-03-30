var password = "Only hard work makes people rich".toUpperCase();
var hidden_password = "";
var mis_shot = 0;
var yes = new Audio("sound/yes.wav");
var no = new Audio("sound/no.wav");

for(i=0; i<password.length; i++) {
    if(password.charAt(i)==" ") {
        hidden_password += " ";
    } else {
        hidden_password += "-";
    }
}

function type_password() {
    document.getElementById("password").innerHTML = hidden_password;
}

var letters = new Array(26);
letters[0] = "A";
letters[1] = "B";
letters[2] = "C";
letters[3] = "D";
letters[4] = "E";
letters[5] = "F";
letters[6] = "G";
letters[7] = "H";
letters[8] = "I";
letters[9] = "J";
letters[10] = "K";
letters[11] = "L";
letters[12] = "M";
letters[13] = "N";
letters[14] = "O";
letters[15] = "P";
letters[16] = "Q";
letters[17] = "R";
letters[18] = "S";
letters[19] = "T";
letters[20] = "U";
letters[21] = "V";
letters[22] = "W";
letters[23] = "X";
letters[24] = "Y";
letters[25] = "Z";

function showButtons() {
    var div_text = "";

    for(i=0; i<=25; i++) {
        var element = "let" + i;
        div_text += '<div class="letter" onclick="check(' + i + ')" id="' + element + '">' + letters[i] + '</div>';
        if((i+1)%13==0) {
            div_text+='<div style="clear: both;"></div>';
        }
    }

    document.getElementById("alphabet").innerHTML = "" + div_text;

    type_password();
}

String.prototype.setChar = function(place, sign) {
    if(place > this.length-1) {
        return this.toString();
    } else {
        return this.substring(0, place) + sign + this.substring(place + 1);
    }
}

function check(nr) {
    var shot = false;

    for(i=0; i<password.length; i++) {
        if(password.charAt(i) == letters[nr]) {
            hidden_password = hidden_password.setChar(i, letters[nr]);
            shot = true;
        }
    }

    if(shot) {
        yes.play();
        var element = "let" + nr;

        document.getElementById(element).style.background="#003300";
        document.getElementById(element).style.color="#00C000";
        document.getElementById(element).style.border="3px solid #00C000";
        document.getElementById(element).style.cursor="default";

        type_password();
    } else {
        no.play();
        var element = "let" + nr;

        document.getElementById(element).style.background="#330000";
        document.getElementById(element).style.color="#C00000";
        document.getElementById(element).style.border="3px solid #C00000";
        document.getElementById(element).style.cursor="default";
        document.getElementById(element).setAttribute("onclick", ";");

        mis_shot++;
        var gallows_img = "img/gallows" + mis_shot + ".jpg";
        document.getElementById("gallows").innerHTML = '<img src="' + gallows_img + '"alt=""/>';
    }

    if(password == hidden_password) {
        document.getElementById("alphabet").style.fontSize="40px";
        document.getElementById("alphabet").style.fontWeight="700";
        document.getElementById("alphabet").style.color="#00a100";
        document.getElementById("alphabet").style.background="#003300";
        document.getElementById("alphabet").style.border="3px solid #00C000";
        document.getElementById("alphabet").innerHTML = 'YOU WIN!<br/><input type="button" value="TRY AGAIN?" onclick="location.reload()"></input>';
    }

    if(mis_shot>=9) {
        document.getElementById("alphabet").style.fontSize="40px";
        document.getElementById("alphabet").style.fontWeight="700";
        document.getElementById("alphabet").style.color="#a10000";
        document.getElementById("alphabet").style.background="#330000";
        document.getElementById("alphabet").style.border="3px solid #C00000";
        document.getElementById("alphabet").innerHTML = 'YOU LOSE!<br/><input type="button" value="TRY AGAIN?" onclick="location.reload()"></input>';
    }
}