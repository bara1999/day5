const getData=async()=>{
    try{
        const list=document.getElementById("characterList");
        let response = await fetch("https://rickandmortyapi.com/api/character");
        let body = await response.json();
        let array=body.results.filter(e=> e.status==='Alive');
        if(array.length>50){
          array=array.slice(0,50); 
        }
        // const result = 
        array.forEach(e=>{
            const li=document.createElement('li')
            const div=document.createElement('div')
            const img=document.createElement('img')
            img.src = e.image
            li.innerText=e.name+"\n"+ e.location + " "+ e.species + " "+ e.gender;
            div.appendChild(img)
            li.appendChild(div)
            // div.appendChild()
            list.appendChild(li);
            // return li
        })
        console.log(array);

    }catch(e){
        console.log("error", e)
    }
}
getData()