const builds=["1.20.1","1.20.4","1.20.6","1.21.1","1.21.4","1.21.5","1.21.8","1.21.11","26.1","26.2","26.3"];
const list=document.getElementById("downloadList"),search=document.getElementById("search");
function render(){const q=search.value.trim().toLowerCase();const found=builds.filter(v=>v.includes(q));list.innerHTML=found.length?found.map(v=>`<div class="download-item"><div><b>Mystique Shaders</b><small>Minecraft ${v} · Iris</small></div><a href="downloads/mystique-shaders_v${v}_iris.zip" download>Download ↓</a></div>`).join(""):'<div class="empty">No matching Minecraft versions found.</div>';}
search.addEventListener("input",render);render();
document.getElementById("menu").addEventListener("click",()=>document.getElementById("navlinks").classList.toggle("open"));
document.querySelectorAll("#navlinks a").forEach(a=>a.addEventListener("click",()=>document.getElementById("navlinks").classList.remove("open")));