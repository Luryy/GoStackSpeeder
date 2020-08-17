console.log('extension ok');

const interval = setInterval(() => {
    const select = document.getElementsByClassName("bmpui-ui-selectbox bmpui-ui-playbackspeedselectbox")[0];
    
      if(select){
         
         const option3x = document.createElement('option');
         option3x.innerHTML = '3x';
         option3x.value = 3;

         select.add(option3x);

         clearInterval(interval);
         

      }

   
}, 1000);
