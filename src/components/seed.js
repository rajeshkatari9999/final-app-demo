export function setDatabase(firebase){
    const user = [{
        userId:'1',
        userName: 'rajesh',
        description:'',
        dateCreated:Date.now()
    },
    {
    userId:'2',
    userName: 'katari',
    description:'',
    dateCreated:Date.now()
},
];
for(let k= 0; k<user.length; k++){
firebase.firestore().collection('users').add(user[k]);
}
for (let i =1; i<=5; ++i){
    firebase.firestore().collection('photos').add({
        photoId:i,
        userId:'2',
        imageSrc :'/',
        categories : '',
        tag  : '',
        location: "", 
        dateCreated:Date.now()
      })
}
}