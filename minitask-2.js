import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Masukan tanggal (DD-MM-YYYY): ', (a) => {
  const regex = /(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[1,2])-\d{4}/;

  regex.test(a)
    ? console.log(a.split('-').join('/'))
    : console.log('Format tanggal salah');

  rl.close();
});