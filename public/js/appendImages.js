
// updating to get url(s) array but still thinking abt using the older script

  const linkArray = ['https://pbs.twimg.com/media/FAJQO4ZUUAQLBvO?format=jpg&name=small']
  
console.log(linkArray.length);

try {
  
  var column1 = document.getElementById("column1");
  var column2 = document.getElementById("column2");
  
// for some reason the last position returns undefined O.o
  
for(var i = 0; i <= linkArray.length - 1; i++){
  
  if(i < linkArray.length/2){
    var img = document.createElement("img");
    img.src = linkArray[i]
    column1.appendChild(img)
  } else { 
   var img2 = document.createElement("img");
   img2.src = linkArray[i]
    column2.appendChild(img2);
  }
  
}
  
} catch(e){
  
  alert(`There was an Error, I'm sorry! :(\nPlease report this: ${e}`)
  throw new Error(e)
}

// append images from folder /img
/*var folder = "/public/img/";

$.ajax({
  method: "GET",
  url: folder,
  success: function(data) {
    
    var arrayImgs = []
    
    $(data)
      .find("a")
      .attr("href", async function(i, val) {
        if (val.match(/\.(jpe?g|png|gif)$/)) {
          
          var valueToAppend = '<img src="'+val+'"/>';

          arrayImgs.push(`(${i}) ${val}`)
          
          if (i <= 12) {
            
            await $("#column1").append(valueToAppend);
            
          } else {
            
            await $("#column2").append(valueToAppend);         
          }
        }
      });
    
    console.log(`Images Loaded (${arrayImgs.length}) : ${arrayImgs.join(' | ')}`)
    
  },
fail: function(xhr, textStatus, errorThrown){
  alert(`There was an Error, I'm sorry! :(\nPlease report this: ${errorThrown.message}`)
  throw new Error(errorThrown)
    }
});
*/
 
