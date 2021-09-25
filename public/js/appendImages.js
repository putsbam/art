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
// updating to get url(s) array but still thinking abt using this script later

  const linkArray = ['https://pbs.twimg.com/media/FAJQO4ZUUAQLBvO?format=png', 'https://pbs.twimg.com/media/E_KxUm9WEAM_9VT?format=png']

linkArray.forEach(url => {
console.log(url)
$.ajax({
  method: "GET",
  url: url,
  success: function(data) {
    
    $(data)
      .find("a")
      .attr("href", async function(i, val) {
        if (val.match(/\.(jpe?g|png|gif)$/)) {
          
          var valueToAppend = '<img src="'+val+'"/>';
          
          if (i <= 12) {
            
            await $("#column1").append(valueToAppend);
            
          } else {
            
            await $("#column2").append(valueToAppend);         
          }
        }
      });
    
  },
fail: function(xhr, textStatus, errorThrown){
  alert(`There was an Error, I'm sorry! :(\nPlease report this: ${errorThrown}`)
  throw new Error(errorThrown)
    }
})
  })
