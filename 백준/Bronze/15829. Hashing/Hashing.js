const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

function calHash(str) {
  const M = 1234567891
  const r = 31
  let hash = 0
  let pow = 1

  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i) - 'a'.charCodeAt(0) + 1
		hash = (hash + charCode * pow) % M
		pow = (pow * r) % M
  }
	return hash
}

console.log(calHash(input[1]))
