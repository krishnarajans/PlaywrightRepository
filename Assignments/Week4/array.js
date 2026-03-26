function iteraintersection (arr1,arr2)
{
  const output = [];
  for (const temp of [...arr1,...arr2])
  {
    if(!output.includes(temp))
    {
        output.push(temp);
    }
  }
  return output;
}
console.log(iteraintersection([1,3,4,2,9,7],[5,4,7,6]));
