const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('./crud-37598-firebase-adminsdk-i1lz3-76fd4a9cb9.json');

initializeApp({
credential: cert(serviceAccount)
});

const db = getFirestore();

const data = {
name:'Gramado',

state: 'RS',

coutry:'Brazil'

}
const cityRef = db.collection('crud').doc('database').set(data);



const res =  db.collection('crud').doc('database').update({
    name: 'hello',
    'capital': 'amarelo'
  });


  const resi = db.collection('crud').doc('database').update({
    name: FieldValue.delete('Gramado')
  }); 
  

 

  