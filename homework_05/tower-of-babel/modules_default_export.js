var arg1 = process.argv[2];
var arg2 = process.argv[3];

import Message from './modules_default_export_math';
console.log(Message.PI);
console.log(Message.sqrt(+arg1));
console.log(Message.square(+arg2));