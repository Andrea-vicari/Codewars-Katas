function goodVsEvil(good, evil){
    //Variables
    let arrayGoodsWorth = [1, 2, 3, 3, 4, 10];
    let  arrayEvilWorth = [1, 2, 2, 2, 3, 5, 10];
    var arrayGoodsResult = [];
    var arrayEvilResult = [];
    var finalEvilTotal = 0;
    var finalGoodTotal = 0;

    // populate goodBattle array with number of good for the battle
    let goodBattle = good.split(' ');
    
    // populate evilBattle array with number of good for the battle
    let evilBattle = evil.split(' ');
    
    // Multiply each GOOD fighter * each fighter's worth
    // and push the result into an array
    for(let i=0;i<goodBattle.length;i++){
        
        let worthPerNumberFighterGood = goodBattle[i] * arrayGoodsWorth[i];
        arrayGoodsResult.push(worthPerNumberFighterGood);
    }
    // Multiply each Evil fighter * each fighter's worth
    // and push the result into an array
    for(let i=0;i<evilBattle.length;i++){
        
        let worthPerNumberFighterEvil = evilBattle[i] * arrayEvilWorth[i];
        arrayEvilResult.push(worthPerNumberFighterEvil);
    }
    // Sum each arrayGoodresult element
    for (let i=0;i<arrayGoodsResult.length;i++){
        let a = arrayGoodsResult[i];
        let b = finalGoodTotal;
        finalGoodTotal = a+b;
    }
    
    // Sum each arrayEvilresult element
    for (let i=0;i<arrayEvilResult.length;i++){
        let a = arrayEvilResult[i];
        let b = finalEvilTotal;
        finalEvilTotal = a+b;
    }
    if(finalGoodTotal<finalEvilTotal){
        //return alert ("Battle Result: Evil eradicates all trace of Good");
        return 'Battle Result: Evil eradicates all trace of Good';
        
    }
    else if(finalGoodTotal>finalEvilTotal){
        //return alert("Battle Result: Good triumphs over Evil");
       return 'Battle Result: Good triumphs over Evil';
        
    }
    else{
        //return alert ("Battle Result: No victor on this battle field"); 
      return 'Battle Result: No victor on this battle field';
           
    }
}
goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1')

/*Codewar TEST

goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'), 'Battle Result: Evil eradicates all trace of Good';
goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'), 'Battle Result: Good triumphs over Evil';
goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'), 'Battle Result: No victor on this battle field';
*/