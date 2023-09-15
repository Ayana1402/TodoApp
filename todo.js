
    var message= document.getElementById("message")
    var checkbox = document.createElement('input');
    var label = document.createElement('label')
    const selectedElm = document.getElementById('selected');
    checkbox.type = 'checkbox';
    var xhttp = new XMLHttpRequest
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true)
    xhttp.send()
    xhttp.onreadystatechange = function(){
    let val =''
     if(this.readyState == 4 & this.status == 200)
     {
        let data = JSON.parse(this.responseText)
        for(let i = 0 ; i<data.length; i++)
        {
        
           val+= `<input type="checkbox" name="language"/>${data[i].title}<br>`
           message.innerHTML= val;
     
            
        }
        

        function showChecked(){
            selectedElm.innerHTML = document.querySelectorAll('input[name=language]:checked').length;
            var count = document.querySelectorAll('input[name=language]:checked').length;
            checkboxcount(count).then(disp1).catch(disp2)
          }
          
          document.querySelectorAll("input[name=language]").forEach(i=>{
           i.onclick = () => showChecked();
          });
       }
       

    }
   

 
function checkboxcount(total){
    return new Promise((resolve,reject)=>
    {
        if(total>4){
            resolve()
        }
        else
        {
            reject()
        }
    })
}

function disp1(){
    alert('Congrats. 5 Tasks have been Successfully Completed ')
}
function disp2(){
    console.log('Target not achivied!')
}
 