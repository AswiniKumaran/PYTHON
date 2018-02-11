prompt("Player one: Enter your name, you will be Blue")
prompt("Player two: Enter your name you will be Red")
$('h3').text("Player1's turn")
var var1=$('td')
var color=""
var1.click(function(){
  var col=$(this).index()
  var duprow=$(this).closest('tr')
  var row=duprow.index()
  var actRow=findCol(var1,col)
  var dim=((actRow-1)*7)+col
  if(color===""){
    var1.eq(dim).addClass("turnBlue")
    color="blue"

    $('h3').text("Player2's turn")
  }
  else{
    var1.eq(dim).addClass("turnRed")
    color=""
    $('h3').text("Player1's turn")
  }
  horCheck(var1,dim)
  verCheck(var1,dim)
  diagCheck(var1,dim)
  function horCheck(var1,dim){
    var dim1=dim-(dim%7)
    var count=0
      for(i=dim1+1;i<=dim1+6;i++){
      if((var1.eq(i).css("background-color")===var1.eq(i-1).css("background-color")) && (var1.eq(i-1).css("background-color")!=="rgb(128, 128, 128)")){
        count+=1
      }
      else{
        count=0
      }
      if(count===3){
        if(var1.eq(i).css("background-color")==="rgb(0, 0, 255)"){
          $('.connect').text("Player1 Won!!! Refresh your browser to play again").css("font-size","40px")
        }
        if(var1.eq(i).css("background-color")==="rgb(255, 0, 0)"){
          $('.connect').text("Player2 Won!!! Refresh your browser to play again").css("font-size","40px")
        }
      }
    }
  }
  function verCheck(var1,dim){
    var dim1=dim%7
    var count=0
    for(i=dim1+7;i<=48;i+=7){
      if((var1.eq(i).css("background-color")===var1.eq(i-7).css("background-color")) && (var1.eq(i).css("background-color")!=="rgb(128, 128, 128)")){
        count+=1
      }
      else{
        count=0
      }
      if(count===3){
        if(var1.eq(i).css("background-color")==="rgb(0, 0, 255)"){
          $('.connect').text("Player1 Won!!! Refresh your browser to play again").css("font-size","40px")
        }
        if(var1.eq(i).css("background-color")==="rgb(255, 0, 0)"){
          $('.connect').text("Player2 Won!!! Refresh your browser to play again").css("font-size","40px")
        }
      }
    }
  }
  function diagCheck(var1,dim){
    var count=0
    if(var1.eq(dim).css("background-color")!="rgb(128, 128, 128)"){
      if(dim-24>=0){
        var local=8
        while(local<=24){
          if(var1.eq(dim).css("background-color")===var1.eq(dim-local).css("background-color")){
            count+=1
          }
          else{
            count=0
            break;
          }
          local+=8
        }
        //alert(dim+" "+count)
        if(count===3){
          if(var1.eq(dim).css("background-color")==="rgb(0, 0, 255)"){
            $('.connect').text("Player1 Won!!! Refresh your browser to play again").css("font-size","40px")
          }
          if(var1.eq(dim).css("background-color")==="rgb(255, 0, 0)"){
            $('.connect').text("Player2 Won!!! Refresh your browser to play again").css("font-size","40px")
          }
        }
      }
      if(dim+24>=0){
        var local=8
        while(local<=24){
          if(var1.eq(dim).css("background-color")===var1.eq(dim+local).css("background-color")){
            count+=1
          }
          else{
            count=0
            break;
          }
          local+=8
        }
        //alert(dim+" "+count)
        if(count===3){
          if(var1.eq(dim).css("background-color")==="rgb(0, 0, 255)"){
            $('.connect').text("Player1 Won!!! Refresh your browser to play again").css("font-size","40px")
          }
          if(var1.eq(dim).css("background-color")==="rgb(255, 0, 0)"){
            $('.connect').text("Player2 Won!!! Refresh your browser to play again").css("font-size","40px")
          }
        }
      }
      if(dim-18>=0){
        var local=6
        while(local<=18){
          if(var1.eq(dim).css("background-color")===var1.eq(dim-local).css("background-color")){
            count+=1
          }
          else{
            count=0
            break;
          }
          local+=6
        }
        //alert(dim+" "+count)
        if(count===3){
          if(var1.eq(dim).css("background-color")==="rgb(0, 0, 255)"){
            $('.connect').text("Player1 Won!!! Refresh your browser to play again").css("font-size","40px")
          }
          if(var1.eq(dim).css("background-color")==="rgb(255, 0, 0)"){
            $('.connect').text("Player2 Won!!! Refresh your browser to play again").css("font-size","40px")
          }
        }
      }
      if(dim+18>=0){
        var local=6
        while(local<=18){
          if(var1.eq(dim).css("background-color")===var1.eq(dim+local).css("background-color")){
            count+=1
          }
          else{
            count=0
            break;
          }
          local+=6
        }
        //alert(dim+" "+count)
        if(count===3){
          if(var1.eq(dim).css("background-color")==="rgb(0, 0, 255)"){
            $('.connect').text("Player1 Won!!! Refresh your browser to play again").css("font-size","40px")
          }
          if(var1.eq(dim).css("background-color")==="rgb(255, 0, 0)"){
            $('.connect').text("Player2 Won!!! Refresh your browser to play again").css("font-size","40px")
          }
        }
      }
    }
    return count
  }

})
function findCol(var1,col){
  var row=0
  for(i=col;i<=48;i+=7){
    if((var1.eq(i).css("background-color")!=="rgb(0, 0, 255)") && (var1.eq(i).css("background-color")!=="rgb(255, 0, 0)")){
      row+=1
    }
  }
  return row
}
