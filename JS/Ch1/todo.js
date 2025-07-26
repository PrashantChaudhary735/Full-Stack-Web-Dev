let todo = [];

let req = prompt("Please enter your rqeuest")

while(true)
{
  if(req == 'quit')
  {
    console.log('Quitting app');
    break;
  }
}

if (req == 'list')
{
  console.log('-------------');
  for (task of todo)
  {
    console.log(task);
  }
  console.log('-------------');
}