import { create as createMatrix } from '../matrix/Matrix'

import {
  TYPE_BLACK,
  TYPE_EMPTY,
  TYPE_WHITE,
  create as createCell,
  reverseCellType
} from '../cell/Cell'

import { addGenerator, create as createVector, getDirectionnalVectors } from '../vector/Vector'

export function create(width = 8, height = 8){
  const board = {
    width,
    height,
    cells: createMatrix(width, height, TYPE_EMPTY)
  }
  validateSize(board)
  return drawCells(getDepartureCells(board), board)
}

export function getDepartureCells(board){

  const xMiddle = board.width / 2
  const yMiddle = board.height / 2

  return [
    createCell(xMiddle, yMiddle, TYPE_BLACK),
    createCell(xMiddle - 1, yMiddle - 1, TYPE_BLACK),
    createCell(xMiddle - 1, yMiddle, TYPE_WHITE),
    createCell(xMiddle, yMiddle - 1, TYPE_WHITE)
  ]

}

export function drawCells(cells, board){
  const newBoard = Object.assign(board)
  for (const cell of cells) {
    newBoard.cells[cell.y][cell.x] = cell.type;
  }
  return newBoard
}

export function getCellTypeDistribution(board){

  const distribution = {[TYPE_WHITE]: 0, [TYPE_BLACK]: 0, [TYPE_EMPTY]: 0}

  for (const row of board.cells){
    for (const cellType of row){
      distribution[cellType]++;
    }
  }

  return distribution

}

export function validateSize(board){
  if(board.width%2 !== 0 || board.height%2 !== 0){
    throw new Error("Board size must be even.")
  }
  if(board.width < 4 || board.height < 4){
    throw new Error("Board size must greater than 4.")
  }
}

export function getFlippedCellsFromCellChange(cellChange, board){

  if(!(cellChange.y in board.cells) || board.cells[cellChange.y][cellChange.x] !== TYPE_EMPTY){
    return []
  }

  let flippedCells = []

  for (const directionVector of getDirectionnalVectors()){
    const directionFlippedCells = getFlippedCellFromCellChangeInDirection(cellChange, board, directionVector)
    flippedCells = [...flippedCells, ...directionFlippedCells]
  }

  return flippedCells

}

export function getFlippedCellFromCellChangeInDirection(cellChange, board, directionVector){

  const flippedCells = []
  const reverseType = reverseCellType(cellChange.type)
  let position = createVector(cellChange.x, cellChange.y)
  const directionPositions = addGenerator(position, directionVector)

  for (position of directionPositions) {
    if(!(position.y in board.cells) || board.cells[position.y][position.x] !== reverseType){
      break
    }
    flippedCells.push(createCell(position.x, position.y, cellChange.type))
  }

  if (!(position.y in board.cells) || board.cells[position.y][position.x] !== cellChange.type){
    return []
  }

  return flippedCells

}

export function isLegalCellChange(cellChange, board){

  if(!(cellChange.y in board.cells) || board.cells[cellChange.y][cellChange.x] !== TYPE_EMPTY){
    return false
  }

  for (const directionVector of getDirectionnalVectors()){
    if(getFlippedCellFromCellChangeInDirection(cellChange, board, directionVector).length > 0){
      return true
    }
  }

  return false

}

export function getLegalCellChangesForCellType(cellType, board){

  const cellChanges = []

  board.cells.forEach((row, rowKey) => {
    row.forEach((cell, cellKey) => {
      const cellChange = createCell(cellKey, rowKey, cellType)
      if(isLegalCellChange(cellChange, board)){
        cellChanges.push(cellChange)
      }
    })
  })

  return cellChanges

}
