const insert=document.getElementById("insert")
window.addEventListener('keydown',(e)=>{
    insert.innerHTML=`<div>
        <table>
<tr>
<th>key</th>
<th>keycode</th>
<th>code</th>
</tr>
<tr>
<td>${e.key}</td>
<td>${e.keyCode}</td>
<td>${e.code}</td>
</tr>
</div>`
})
