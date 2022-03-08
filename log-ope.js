let userName = prompt ("Who's there?");

if (userName === "rosatuongvy" || "bradg") {
    let password = prompt ("Password?");

    if (password === "TheDreamer" || "Cowboy")
    { alert ("Welcome!") ; }
    else if (password === "Cancel" || password === null)
    { alert ("Cancelled") ; }
    else { alert ("Wrong password") ; }
}

else if (userName === "Cancel" || userName === null)
    { alert ("Cancelled") ; }
 
else { alert ("I don’t know you") ;}