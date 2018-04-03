myMain();

function myMain() {
    var myArray = createArray();
    printArray(myArray);
    var myArrayJson = convertToJson(myArray);
    printJson(myArrayJson);
    var myArrayParsed = convertToArray(myArrayJson);
    printArray(myArrayParsed);
}

function createArray() {
    var myObjectOne = new Object();
    myObjectOne.name = 'Name One';
    myObjectOne.age = 20;
    var myObjectTwo = new Object();
    myObjectTwo.name = 'Name Two';
    myObjectTwo.age = 25;

    var myArray = new Array();
    myArray.push(myObjectOne);
    myArray.push(myObjectTwo);

    return myArray;
}

function printArray(myArray) {
	for(var i=0; i<myArray.length; i++) {
		print("Name: " + myArray[i].name);
	}
}

function convertToJson(myArray) {
    return JSON.stringify(myArray);
}

function printJson(myArrayJson) {
    print("MyJson --> " + myArrayJson);
}

function convertToArray(myArrayJson) {
    return JSON.parse(myArrayJson);
}