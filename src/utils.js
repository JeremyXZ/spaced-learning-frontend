// export const showQuestionAnswer = (response) => {
//   const qaStrings = response.data.choices[0].text
//   const qaArr = qaStrings.split('\n').map(q => q.replace('.','').trim()).filter(q => q.length > 0);
// console.log("data", response.data)
// console.log("qaStrings", qaStrings)
// console.log("qaArr", qaArr)
//   const qaObjArr = []
//   for (let i = 0; i < qaArr.length; i += 2) {
//     qaObjArr.push({ question: qaArr[i], answer: qaArr[i+1] })
//   }

//   console.log("qaObjArr", qaObjArr)
//   return qaObjArr
// }

export const showQuestionAnswer = (response) => {
  const questions = []
  const answers = []

  const qaStrings = response.data.choices[0].text
  //  console.log(qsString)
    const qaArr = qaStrings.split('\n').map(q => q.replace('.','').trim()).filter(q => q.length > 0);
    
    console.log("qaArr", qaArr)
          
    const qaObjArr = []
      for (let i = 0; i < qaArr.length; i += 2) {
        qaObjArr.push({ question: qaArr[i], answer: qaArr[i+1] })
      }  

      console.log("qaObjArr", qaObjArr)
      return qaObjArr
}