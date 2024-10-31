const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const list = []

for (let i = 1; i < input.length; i++) {
  const [age, name] = input[i].split(' ')
  list.push([Number(age), name])
}

function sortMember(memberList) {
  memberList.sort((a, b) => {
    return a[0] - b[0]
  })
  return memberList
}

const answer = sortMember(list)

answer.forEach((member) => {
  console.log(member.join(' '))
})
