let documents = [
    "Hello Everyone",
    "Hello, World!",
    "The sky is blue",
    "The sky is dark"
];
let stopWords = ["the", "is"];
let invertedIndex = documents
    .map(document => {
        return document.split(" ")
        .map(word => word.replace(/[^a-zA-Z ]/g, "").toLowerCase())
        .filter(word => !stopWords.includes(word))
    })
    .flatMap((document,index) => {
        return document.map(word => [word,index])
    })
    .reduce((index,entry) => {
        if(!index.hasOwnProperty(entry[0])){
            index[entry[0]] = []
        }
        index[entry[0]].push(entry[1]);
        return index;
    }, {});

console.log(invertedIndex);

/*
PS C:\Users\Stefan Teofanovic\Desktop\LABOS\TWEB\TWEB_ArrayEx> node .\array.js
[
  [ 'hello', 'everyone' ],
  [ 'hello', 'world' ],
  [ 'sky', 'blue' ],
  [ 'sky', 'dark' ]
]
PS C:\Users\Stefan Teofanovic\Desktop\LABOS\TWEB\TWEB_ArrayEx> node .\array.js
[
  [ 'hello', 'world' ],
  [ 'sky', 'blue' ],
  [ 'sky', 'dark' ]
]
PS C:\Users\Stefan Teofanovic\Desktop\LABOS\TWEB\TWEB_ArrayEx> node .\array.js
[
  [ 'hello', 0 ],
  [ 'everyone', 0 ],
  [ 'hello', 1 ],
  [ 'world', 1 ],
  [ 'sky', 2 ],
  [ 'blue', 2 ],
  [ 'sky', 3 ],
  [ 'dark', 3 ]
]
PS C:\Users\Stefan Teofanovic\Desktop\LABOS\TWEB\TWEB_ArrayEx> node .\array.js
{
  hello: [ 0, 1 ],
  everyone: [ 0 ],
  world: [ 1 ],
  sky: [ 2, 3 ],
  blue: [ 2 ],
  dark: [ 3 ]
}
*/ 
    