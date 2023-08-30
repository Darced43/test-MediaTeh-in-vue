export default function createPrice(price){
    const newPrice = []
    const spPrice = String(price).split('')
    if( spPrice.length == 4){
        for(let i = 0; i <= spPrice.length; i++){
          if(i === 1){
            newPrice.push(' ')
          }
          newPrice.push(spPrice[i])
        }
        return newPrice.join('')
      }
      else if( spPrice.length === 5){
        for(let i = 0; i <= spPrice.length; i++){
          if(i === 2){
            newPrice.push(' ')
          }
          newPrice.push(spPrice[i])
        }
        return newPrice.join('')
      }
      else if( spPrice.length === 6){
        for(let i = 0; i <= spPrice.length; i++){
          if(i === 3){
            newPrice.push(' ')
          }
          newPrice.push(spPrice[i])
        }
        return newPrice.join('')
      }
      else{
        for(let i = 0; i <= spPrice.length; i++){
          newPrice.push(spPrice[i])
        }
        return newPrice.join('')
      }
    
}

