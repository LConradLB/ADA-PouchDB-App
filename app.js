console.log("hey")
var db = new PouchDB('new_database');

var doc = {
"_id": "posts",
"name": "posts",
"posts": [
    "0x1 Message",
    "0x2 Longer Message",
    "0x3 Slightly longer Message"
]
};

//db.put(doc);

db.get('posts').then(function (doc) {
console.log(doc);
});

const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault()
    console.log(event)
    const newPost = document.querySelector('textarea').value
    console.log(newPost)
    db.get('posts').then(function (doc) {
        doc.posts.push(newPost)
        return db.put(doc);
    }).then(doc => {db.get('posts').then(function (doc) {
        document.querySelectorAll('.test').forEach(function(a){
            a.remove()
            })
            doc.posts.forEach(element => {
                var div = document.createElement('div');
                div.className = 'test';
                div.textContent = element;
                document.body.appendChild(div)
            });
        });
    })
})
  
