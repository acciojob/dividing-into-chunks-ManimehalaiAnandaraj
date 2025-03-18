const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let res=[];
	let currentchunk=[];
	let currentsum=0;
	for(let i=0;i<arr.length;i++)
		{
			if(currentsum + arr[i] <=n)
			{
				currentchunk.push(arr[i]);
				currentsum += arr[i];
				
			}
			else
			{
				res.push(currentchunk);
				currentchunk =[arr[i]];
				currentsum =arr[i];
			}
		}
	if(currentchunk.length>0)
	{
		res.push(currentchunk)
	}
	return res;
}
const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
