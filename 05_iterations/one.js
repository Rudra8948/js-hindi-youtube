//++++++++++++FOR++++++++++
/*
definiton =A for loop is a control structure used to execute a block of code repeatedly for a specific number of times until a condition becomes false.
basic syntax ==  for (initialization; condition; update) {
                     // code to execute
                     }


    with kwyword       for (let i = 1; i <= 5; i++) {
                           console.log("Hello");
                    } 
    
*/    

  for(let i=0;  i<=10 ; i++){
    const element = i;
    console.log(element);
  }




   for(let j=0; j<=10;j++){
          const element = j;
          if(element==5){
            console.log("5 is the best number")
          }
          console.log(element);
   }

   




   
   for (let i = 0; i <=10; i++) {
    console.log(`Outer loop value: ${i}`);
     for (let j = 0; j <= 10; j++) {
        //console.log(`Inner loop value ${j} and inner loop ${i}`);
        console.log(i + `*` +j+ `=`+i*j);
        
     }
    
   }
     



   let MyArray =["falsh","batman","superman"]
   console.log(MyArray.length);
   for (let index = 0; index < MyArray.length; index++) {
    const element = MyArray[index];
    console.log(element);
    
   }

   //break and continue 