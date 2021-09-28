
// updating to get url(s) array but still thinking abt using the older script

const linkArray = ['https://pbs.twimg.com/media/FAJQO4ZUUAQLBvO?format=jpg&name=small', 'https://pbs.twimg.com/media/E_Kq_N4WQAQ2lI3?format=jpg&name=4096x4096', 'https://pbs.twimg.com/media/E_KxUm9WEAM_9VT?format=png&name=360x360', 'https://pbs.twimg.com/media/E_Kq_N_X0AABNH_?format=jpg&name=4096x4096', 'https://pbs.twimg.com/media/E_Kq_N_WUAALMsy?format=jpg&name=4096x4096', 'https://pbs.twimg.com/media/E8ys2M0XoAQPEi1?format=jpg&name=large', 'https://pbs.twimg.com/media/E8FabESWQAEVnvM?format=png&name=small', 'https://pbs.twimg.com/media/E8Df-aJXMAMv_58?format=png&name=small', 'https://pbs.twimg.com/media/E7K-8aXXEAo1Dgo?format=jpg&name=4096x4096', 'https://pbs.twimg.com/media/E3oqwXCXEAAm9Lf?format=jpg&name=4096x4096', 'https://pbs.twimg.com/media/ExMbrZqUYAwnVt_?format=jpg&name=large', 'https://pbs.twimg.com/media/EwD6HivXEAQL9hE?format=jpg&name=4096x4096', 'https://pbs.twimg.com/media/EvaNlsIXEAAUKz2?format=jpg&name=medium']
  
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
 
