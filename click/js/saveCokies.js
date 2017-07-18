function setCookie( cvalue) {
    document.cookie = "clicks=" + cvalue + "; expires=Thu, 18 Dec 2024 12:00:00 UTC; path=/";
}

function getCookie() {
    var name = "clicks=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

$("#btncookies").click(function() {
    var clicks=getCookie();
    var new_val = parseInt(clicks)+1
    setCookie(new_val);
});
