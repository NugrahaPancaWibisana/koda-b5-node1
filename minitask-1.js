import moment from 'moment';
import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Masukan tanggal (DD-MM-YYYY): ', (a) => {
  moment(a, 'DD-MM-YYYY', true).isValid()
    ? console.log(moment(a, 'DD/MM/YYYY').format())
    : console.log('Format tanggal salah');

  rl.close();
});
