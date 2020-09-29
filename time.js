let launchDate = new Date("December 18, 2020 12:00:00").getTime();
let timer = setInterval(tick, 1000);
function tick ()
{

  let now = new Date().getTime();
  let t = launchDate - now;


  if (t > 0)
  {


    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (hours < 10) { hours = "0" + hours; }
    let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    if (mins < 10) { mins = "0" + mins; }
    let secs = Math.floor((t % (1000 * 60)) / 1000);
    if (secs < 10) { secs = "0" + secs} ;

    document.querySelector('.countdown').innerText = hours+" hrs :"+mins+" min :"+secs+" secs";

  }
  document.getElementById("sale").style.backgroundImage = "url('back.png')";

}
function check()
{
  if(document.getElementById("password").value == "GabruSardaar")
      {

        location.href="home.html";

      }
  else
      document.getElementById('error').innerHTML=("username or password incorrect");
      return false;
}
