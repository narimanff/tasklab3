var array=[{
		"id": "0001",
		"type": "donut",
		"name": "Cake",
		"ppu":0.78,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" },
						{ "id": "1003", "type": "Blueberry" },
						{ "id": "1004", "type": "Devil's Food" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5007", "type": "Powdered Sugar" },
				{ "id": "5006", "type": "Chocolate with Sprinkles" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0002",
		"type": "donut",
		"name": "Raised",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0003",
		"type": "donut",
		"name": "Old Fashioned",
		"ppu":0.26,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	}];
// 1. All topping types

	function topping() 
{

	for (var i = 0; i< array.length; i++) 
	{
	 var array1 = array[i].topping;
   for (var j= 0; j< array1.length;j++ )
   {
  console.log(array1[j].type);
    
   }
	}
}

// 2. All batter types

function getbatter(){
var array2=[];
for(var i=0;i<array.length;i++){
	
	 	// for(var m=0;m<array[i].batters["batter"].length;m++){
	
	 array2 = array[i].batters.batter;


for(var j = 0 ; j< array2.length ; j++ )
   {
     console.log(array2[j].type);
   }}
}
// 3. Ppu average 
function ppuavg()
{
  array3 = []
  var  avr = 0;
  for( var i =0 ; i<array.length; i++) 
{ 
 var x  = array3.push(array[i].ppu)
 for (var p =0 ; p <array3.length ; p++)
 {
   
 avr= avr+(array3[p]/array3.length);
 }

  }
  console.log(avr);
}
// 4. Ppu sum

function ppusum()
{
  
 var sum = 0;
  for( var i =0 ; i<array.length; i++) 
{ 
 sum= sum+array[i].ppu; 
 
}
 
 console.log(sum)
}
// 5. List of all mentioned IDs regardless to the type

function allid(){
array.forEach(element =>console.log(element .id))
array.forEach(element => element.batters.batter.forEach(b => console.log(b.id)))
array.forEach(element => element.topping.forEach(t => console.log(t.id)))

}
	 
topping(); 
getbatter();
 ppusum();
 ppuavg(); 
allid();
