$(function(){
//variables
const sizePicker,pixelCanvas,colorPicker,inputHeight,inputWidth;
 sizePicker=$('#sizePicker');
 pixelCanvas=$('#pixelCanvas');
 colorPicker=$('#colorPicker');
 inputHeight =$("#inputHeight");
 inputWidth =$("#inputWidth");

// event listener to call makegrid function
sizePicker.on('submit',function(evt){
	
	evt.preventDefault();
	makeGrid();
});

function makeGrid(){
	//remove existing row when submitted twice
	let pixelRow=pixelCanvas.find('tr');

	pixelRow.remove();
 //get sizeinput values varibles
 let tableRows=inputHeight.val();
let tableCols=inputWidth.val();

//nested loops for creating the table
for (let row = 1; row <= tableRows; row++) {
pixelCanvas.append("<tr></tr>");
for (let col = 1; col <= tableCols; col++) {
	let lastRow=pixelCanvas.children('tr:last-child');
lastRow.append("<td></td>");

}
}
//loops end

//color  each clicked cell function
let pixelCell=pixelCanvas.find('td');
pixelCell.on('click',function  paint(color){
let canvasColor = colorPicker.val();
$(color.target).css('background-color', canvasColor);
});//color function end
//double click to clear cells
pixelCell.dblclick(function(){
$(this).css('background-color',"");
});
}

//end 
});