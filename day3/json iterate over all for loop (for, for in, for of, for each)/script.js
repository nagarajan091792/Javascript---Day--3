// JSON for loop

var person = {
    "name"          : "RAJAN",
    "age"           :  24,
    "location"      : "paramakudi",
    "my frd name"   : "GOPI",
    "qualification" : "DME"
}
for (i=0; i<Object.keys(person).length; i++){
    console.log(Object.values(person)[i]);
}


// JSON for in loop

var person = {
    "name"          : "RAJAN",
    "age"           :  24,
    "location"      : "paramakudi",
    "my frd name"   : "GOPI",
    "qualification" : "DME"
}
for (var i in person){
    console.log(person[i]);
}

// JSON for of loop

var person = {
    "name"          : "RAJAN",
    "age"           :  24,
    "location"      : "paramakudi",
    "my frd name"   : "GOPI",
    "qualification" : "DME"
}
for (var i of Object.keys(person)){
    console.log(person[i]);
}

// JSON forEach loop

var person = {
    "name"          : "RAJAN",
    "age"           :  24,
    "location"      : "paramakudi",
    "my frd name"   : "GOPI",
    "qualification" : "DME"
}
Object.keys(person).forEach(function(i){
    console.log(person[i])
});




    