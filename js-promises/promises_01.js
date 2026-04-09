//For asynchronuos
const myPromise = new Promise((resolve, reject) => {   //promise is already class in JS, resolve is for fullfilled, reject is for rejected
    const status =false;

    if(status){
        resolve("Operation ran successfully!")
    }
    else{
        reject("Something wnt wrong");
    }

}); //output an object

console.log(myPromise);

//if myPromise run successfull --> run .then
//if still error (error in system) --> run catch for catch error
//in the end, either error or nor, run .finally

myPromise.then((data) => {
    console.log(data);
})

.catch((error) => {
    console.log(error);
})

.finally(()=>{
    console.log("Process finished.");
}) 