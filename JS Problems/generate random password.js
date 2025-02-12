/* 
 Generate Random Password for provided length
*/

const generatePwd = (len) => {
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const symbol = "!@#$%^&*";
  let randomPwd = "";
  let allcharData = albhabets + number + symbol;

  randomPwd += alphabets[Math.floor(Math.random() * alphabets.length)];
  randomPwd += number[Math.floor(Math.random() * number.length)];
  randomPwd += symbol[Math.floor(Math.random() * symbol.length)];

  for (let i = randomPwd.length; i < len; i++) {
    randomPwd += allcharData[Math.floor(Math.random() * allcharData.length)];
  }
  return randomPwd;
};

console.log(generatePwd(8));
