console.log('extension ok');

const interval = setInterval(() => {
    const select = document.getElementsByClassName("bmpui-ui-selectbox bmpui-ui-playbackspeedselectbox")[0];
    
      if(select){
         
         const option3x = document.createElement('option');
         option3x.innerHTML = '3x';
         option3x.value = 3;

         select.add(option3x);

         const option3_5x = document.createElement('option');
         option3_5x.innerHTML = '3.5x';
         option3_5x.value = 3.5;

         select.add(option3_5x);

         const option4x = document.createElement('option');
         option4x.innerHTML = '4x';
         option4x.value = 4;

         select.add(option4x);

         clearInterval(interval);
         

      }

   
}, 1000);
