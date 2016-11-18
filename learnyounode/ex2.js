const args = process.argv;

// console.log(typeof args, args);

let sum = 0;

for (let i = 2; i < args.length; i++) {
  // console.log(Number(args[i]));
  sum += Number(args[i]);
}

console.log(sum);
