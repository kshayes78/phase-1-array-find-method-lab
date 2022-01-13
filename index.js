function superbowlWin(records){
    // records = [{},{},{},{}]
  
    const winRecord = records.find((record) => record.result === "W")
    
    // => {result: "W", year: "1995"}
    // return winRecord?.year
    
    if (winRecord === undefined){
        return undefined
    }else{
        return winRecord.year
    }
    

}



