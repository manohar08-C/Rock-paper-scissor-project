const score={
    lose:0,
    win:0,
    tie:0
   };
   //const score=JSON.parse(localStorage.getItem('score'));
  
   repeaat();

   function playgamer(playerselect)
{
    const randomm= myFunction();
    let Result='';
    if(playerselect === 'scissor')
{
  
   if(randomm === 'Rock') 
   {
    Result='you lose';
   }
   else if(randomm === 'paper')
   {
    Result='you win';
   } 
    
   else if(randomm === 'scissor') 
   {
    Result='tie';
   }  


}
    

else if(playerselect==='paper')
{
    
  if(randomm === 'Rock') 
    {
     Result='you win';
    }
    else if(randomm === 'paper')
    {
     Result='tie';
    } 
     
    else if(randomm === 'scissor') 
    {
     Result='you lose';
    }

}

else if(playerselect==='rock')
{
    
     
    if(randomm === 'Rock') 
   {
    Result='tie';
   }
   else if(randomm === 'paper') 
   {
    Result='you lose';
   } 
    
   else if(randomm === 'scissor') 
   {
    Result='you win';
   }
    
}

  if(Result === 'you win'){
    score.win +=1;
  }
  else if(Result === 'you lose'){
    score.lose +=1;
  }
  else if(Result === 'tie'){
    score.tie +=1;
  }

  //localStorage.setItem('score', JSON.stringify(score));
  repeaat();

  document.querySelector('.display-result')
    .innerHTML=Result;

   document.querySelector('.display-selects')
    .innerHTML=`you 
    <img src="images/${playerselect}.png" class="icon-result">
    <img src="images/${randomm}.png" class="icon-result" > computer`;


 alert(`'you select ${playerselect}. computer select ${randomm}...${Result}
      wins: ${score.win}, lose: ${score.lose}, tie: ${score.tie} '`);
}

function repeaat(){
    document.querySelector('.js-display-score')
     .innerHTML=`wins: ${score.win}, lose: ${score.lose}, tie: ${score.tie}`;
   
}
   function myFunction()
{
    const computerMove=Math.random();
    let randomm='';

     if(computerMove >= 0 && computerMove < 1/3) 
    {
     randomm='Rock';
    }
    else if(computerMove >= 1/3 && computerMove < 2/3) 
    {
     randomm='paper';
    }    
  else if (computerMove >= 2/3 && computerMove < 1) 
    {
     randomm='scissor';
    } 
    return randomm;   
}