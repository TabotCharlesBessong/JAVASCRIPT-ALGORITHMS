


const inPalindrom = (word)=>{
  return isPalindromeHelper(word , 0 , word.length - 1)
}

function isPalindromeHelper  (word , pos1 , pos2){
  if(pos1 >= pos2) console.log("This word is a palindrom")
  if(word.charAt(pos1) != word.charAt(pos2)) console.log("Not a palindrome")
  else console.log(isPalindromeHelper(word , pos1+1 , pos2-1))
}
//  a palindrome is a word whose reverse === the original world

inPalindrom('ollo')
inPalindrom('Hello')

