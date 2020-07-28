let clientMessage: string = 'Hello World from the client';
console.log(clientMessage);

let element = document.getElementById("HelloWorldId");
if (element != null)
{
	element.innerHTML = clientMessage
}
