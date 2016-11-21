export function create(width, height, value = 0){

  const cells = []

  for (let y = 0; y < height; y++){
    cells[y] = [];
    for (let x = 0; x < width; x++){
      cells[y][x] = value;
    }
  }

  return cells;

}
