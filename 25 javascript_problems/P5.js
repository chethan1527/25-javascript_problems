function countSheeps(sheep) {
  count=0
  sheep.forEach(shp => {if(shp) count+=1})
  return count
}