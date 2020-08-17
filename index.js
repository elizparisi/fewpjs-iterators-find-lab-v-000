const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(records){
  const win = records.find(record => record === "W");
  return win ? win.year : undefined;
}