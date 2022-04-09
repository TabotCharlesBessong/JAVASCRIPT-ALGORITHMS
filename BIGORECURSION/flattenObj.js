
const flattenDict = (dict)=>{
  let flatten = {}
  const flattenHeler = (dict, propName)=>{
    if(typeof dict != 'object'){
      flatten[propName] = dict
      return
    }
    for(let prop in dict){
      if(propName == ''){
        flattenHeler(dict[prop] , propName + prop)
      }else{
        flattenHeler(dict[prop],propName)
      }
    }
  }
  flattenHeler(dict, '')
  return flattenDict
}