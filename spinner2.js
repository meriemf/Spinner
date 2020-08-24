const string =['|','/','-','\\'];
let time = 100;
for (let i =0 ; i < 2; i++) {
  for (const caracter of string) {
    setTimeout(() => { process.stdout.write('\r' + caracter);}, time);
    time += 200; 
  };
}
 setTimeout(()=>(console.log('\n')),time);