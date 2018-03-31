var ini_time = [['0'],['0'],['0'],['0'],['0'],['0'],['0']];
var fin_time = [[],[],[],[],[],[],[]];
var description = [[],[],[],[],[],[],[]];
var i;
var j;
var init = [0,0,0,0,0,0,0];
var active = [1,0,0,0,0,0,0];
var current  = 0;
// console.log(csrf);
var title ;
var cs = ['d0','d1','d2','d3','d4','d5','d6'];
var day = ['Monday' , 'Tuesday' , 'Wednesday' , 'Thrusday' , 'Friday' , 'Saturday' , 'Sunday'];

function move_1(c1)
{
    console.log("fdssdsf");
    if(c1 == 1)
    {
        if(current == 0)
        {   
            title = document.getElementById("tit").value;
            if(!title)
            {
                $(".err").show();
            }
            else
            {
                $(".First").hide();
                $(".Second").show();
                current = 1;
            }

        }
        else
        {
            if(current == 1)
            {
                $(".Second").hide();
                $(".Third").show();
                current = 2;
            }
        }
    }
    else
    {
        if(current == 1)
        {
            $(".Second").hide();
            $(".First").show();
            current = 0;
        }
        if(current == 2)
        {
            $(".Third").hide();
            $(".Second").show();
            current = 1;
        }
    }
}


function givei(z , s)
{       
     for(var k = 0;k < 7;k++)
     {
        $("." +cs[k]).hide();
        active[k] = 0;
     }
     $("." + s).show();
     active[z] = 1;
     console.log(active[z]);
     console.log(csrf);
}


function add_()
{
    var a = document.getElementById("ini").value;
    var b = document.getElementById("fin").value;
    var c = document.getElementById("des").value;
    console.log("sss");
    if(!a || (!b || !c))
    {
        console.log("err");
    }
    for(var k = 0;k < 7;k++)
    {
        if(active[k] == 1)
        {  
            if(ini_time[k][0] == '0')
            {
                ini_time[k][0] = a;
                fin_time[k][0] = b;
                description[k][0] = c;
                console.log(ini_time[k][0]);
                var cd = "." + c[k];
                console.log(cd);
          //      $("." + cs[k]  ).append('<div class=\"card\" id=\"mujhe\"">'+'<p>' + a + '---'+ b + '</p>'+'<p>' + c + '</p>'+'</div>');
             //   $("." + cs[k] + "> #jnab").append('<p>' + b + '</p>');
              //  $("." + cs[k] ).append(+'<p>' + c + '</p>');
              //  $("." + cs[k] + "> #jnab").append('<p><span class="glyphicon glyphicon-ti-close"></span></p>');
            //  $("." + cs[k]).append('<div class=\"row\"><div class=\"col-md-4\"><div class=\"card\"><h2>' +a +'-' +b +'</h2></div></div><div class=\"col-md-5\"><div class=\"card\"><h2>'+ c + '</h2></div></div><div class=\"col-md-3\"><button class=\"btn btn-info btn-fill btn-wd\" type=\"submit\" onclick=\"clos('+ init[k] +')\">close</button</div></div>');
            /*       $("." + cs[k]).append('<button type=\"submit\">close</button');*/
                                            $("." + cs[k]).append('<div id=\"d['+k +']['+ init[k] +']\" class=\"row\"><div class=\"col-md-4\"><div class=\"card\"><h2>' +a +'-' +b +'</h2></div></div><div class=\"col-md-5\"><div class=\"card\"><h2>'+ c + '</h2></div></div><div class=\"col-md-3\"><button id=\"japanese\" type=\"submit\" onclick=\"clos('+ init[k]+',' + k +')\">X</button</div></div>');
                                                            init[k] = 1;

                break;
            }
            else
            {
                ini_time[k][init[k]] = a;
                fin_time[k][init[k]] = b;
                description[k][init[k]] = c;
                console.log(ini_time[k][0]);
                var cd = "." + c[k];
                console.log(cd);
               /*  $("." + cs[k] ).append('<h2>' + a + '</h2>');
                $("." + cs[k] ).append('<h2>' + b + '</h2>');
                $("." + cs[k] ).append('<h2>' + c + '</h2>');*/
                //$("." + cs[k]  ).append('<div class=\"card\" id=\"mujhe\"">'+'<p>' + a + '---'+ b + '</p>'+'<p>' + c + '</p>'+'</div>');
                console.log("chutiyapppp");
               // $("." + cs[k]).append('<div class=\"row\"><div class=\"col-md-4\"><div class=\"card\"><h2>' +a +'-' +b +'</h2></div></div><div class=\"col-md-8\"><div class=\"card\"><h2>'+ c + '</h2></div></div></div>');
               // $("." + cs[k]).append('<span class="glyphicon glyphicon-ti-close"></span>');
                          //  $("." + cs[k]).append('<div class=\"row\"><div class=\"col-md-4\"><div class=\"card\"><h2>' +a +'-' +b +'</h2></div></div><div class=\"col-md-5\"><div class=\"card\"><h2>'+ c + '</h2></div></div><div class=\"col-md-3\"><button id=\"japanese\" type=\"submit\" onclick=\"clos('+ init[k]+',' + k +')\">X</button</div></div>');
                                            $("." + cs[k]).append('<div class=\"row\"><div class=\"col-md-4\"><div class=\"card\"><h2 id=\"d['+k +']['+ init[k] +']\">' +a +'-' +b +'</h2></div></div><div class=\"col-md-5\"><div class=\"card\"><h2>'+ c + '</h2></div></div><div class=\"col-md-3\"><button id=\"japanese\" type=\"submit\" onclick=\"clos('+ init[k]+',' + k +')\">X</button</div></div>');

               init[k] = init[k]+1;
                break;
            }




        }
    }  

   


}


function request_()
{
    for(var x = 0 ;x < 7; x++)
    {

        for(var z = 0 ; z < init[x];z++)
        {   
             var csrf = document.getElementById("csrf").innerHTML;
                if(ini_time[x][k] != '0')
            $.post("",
                  {
                    csrfmiddlewaretoken: csrf,
                    title : title,
                    day : day[x],
                    starttime : ini_time[x][z],
                    endtime : fin_time[x][z],
                    Descrptn : description[x][z],
                   },
                function(data, status){
                    console.log("Data: " + data + "\nStatus: " + status);
                 });
            console.log(csrf);
        }
    }    
}


function clos(x,k)
{
    console.log("#d[" + k + "]["+x +"]");
    ini_time[k][x]='0';
    $("#d[" + k + "]["+x +"]" ).css('display','none');
  //  document.getElementById("#d[" + k + "]["+x +"]" ).remove();
}