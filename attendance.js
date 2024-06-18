function func(){
    
    let table=document.getElementById("table");
    let rows=table.getElementsByTagName("tr");
    var cell=rows[0].insertCell();
    cell.innerHTML=`<b>${prompt("Enter date in the format DD/MM :","26/04")}</b>`;

    for( var i=1;i<rows.length;i++)
    {
        var cell=rows[i].insertCell();
        cell.innerHTML=prompt("Is "+rows[i].cells[1].innerHTML +" present? 'P' or 'A'","A");
    }

}