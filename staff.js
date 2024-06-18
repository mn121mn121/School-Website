document.getElementById("login-button").addEventListener("click", func);

function func(){

    const info=[
        {
            name:"Mrs. Nita Banerjee",
            class: "2A",
            link: "attendance2a.html"
        },
        {
            name:"Mr. Amal Kumar Tripathy",
            class: "11Sc",
            link: "attendance11sc.html"
        }
    ];

    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    const len=info.length;
    if(username=="principal"&&password=="pass")
    {
        document.getElementById("box").innerHTML=``;
        for(let i=0;i<len;i++)
        {
            document.getElementById("box").innerHTML+=`

            <h1 style="text-align: center; padding-top: 15px;"><u>Staff${i+1}</u></h1>
            <p style="padding: 25px; padding-left:40px; font-size: 25px;">
                Name: ${info[i].name}<br>
                Classroom teacher of <b>${info[i].class}</b>.<br>
                Attendace Sheet of ${info[i].class}: <a href="${info[i].link}" style="text-decoration: none; font-size: 23px;">click here</a>
            </p><hr>

            `;
        }
    }
    else if(username=="staff1"&&password=="a1")
    document.getElementById("box").innerHTML=` 
        <h1 style="text-align: center; padding-top: 15px;"><u>Staff1</u></h1>
        <p style="padding: 25px; padding-left:40px; font-size: 25px;">
            Name: ${info[0].name}<br>
            Classroom teacher of <b>${info[0].class}</b>.<br>
            Attendace Sheet of ${info[0].class}: <a href="${info[0].link}" style="text-decoration: none; font-size: 23px;">click here</a>
        </p><hr>
    
    `;
    else if(username=="staff2"&&password=="a2")
    document.getElementById("box").innerHTML=` 
        <h1 style="text-align: center; padding-top: 15px;"><u>Staff2</u></h1>
        <p style="padding: 25px; padding-left:40px; font-size: 25px;">
            Name: ${info[1].name}<br>
            Classroom teacher of <b>${info[1].class}</b>.<br>
            Attendace Sheet of ${info[1].class}: <a href="${info[1].link}" style="text-decoration: none; font-size: 23px;">click here</a>
        </p><hr>
    
    `;
    else
    alert("Invalid Credintials");
}