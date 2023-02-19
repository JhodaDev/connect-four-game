import { useSelector } from 'react-redux'

export const useWinner = () => {

    const board = useSelector((state) => state.board.board)

    const checkRows = () => {
        for (let row = 0; row < board[0].length; row++) {
            for (let col = 0; col < board.length - 3; col++) {
                if (
                    board[col][row] !== 0 &&
                    board[col][row] === board[col + 1][row] &&
                    board[col][row] === board[col + 2][row] &&
                    board[col][row] === board[col + 3][row]
                ) {
                    return {
                        winner: board[col][row],
                        positions: [
                            { col, row },
                            { col: col + 1, row },
                            { col: col + 2, row },
                            { col: col + 3, row },
                        ],
                    }
                }
            }
        }
    }

    const checkCols = () => {
        for (let col = 0; col < board.length; col++) {
            for (let row = 0; row < board[col].length - 3; row++) {
                if (
                    board[col][row] !== 0 &&
                    board[col][row] === board[col][row + 1] &&
                    board[col][row] === board[col][row + 2] &&
                    board[col][row] === board[col][row + 3]
                ) {
                    return {
                        winner: board[col][row],
                        positions: [
                            { col, row },
                            { col, row: row + 1 },
                            { col, row: row + 2 },
                            { col, row: row + 3 },
                        ],
                    }
                }
            }
        }
    }

    const checkDiagonals = () => {
        for (let row = 3; row < board[0].length; row++) {
            for (let col = 0; col < board.length - 3; col++) {
                if (
                    board[col][row] !== 0 &&
                    board[col][row] === board[col + 1][row - 1] &&
                    board[col][row] === board[col + 2][row - 2] &&
                    board[col][row] === board[col + 3][row - 3]
                ) {
                    return {
                        winner: board[col][row],
                        positions: [
                            { col, row },
                            { col: col + 1, row: row - 1 },
                            { col: col + 2, row: row - 2 },
                            { col: col + 3, row: row - 3 },
                        ],
                    }
                }
            }
        }
    }

    const checkDiagonals2 = () => {
        for (let row = 3; row < board[0].length; row++) {
            for (let col = 3; col < board.length; col++) {
                if (
                    board[col][row] !== 0 &&
                    board[col][row] === board[col - 1][row - 1] &&
                    board[col][row] === board[col - 2][row - 2] &&
                    board[col][row] === board[col - 3][row - 3]
                ) {
                    return {
                        winner: board[col][row],
                        positions: [
                            { col, row },
                            { col: col - 1, row: row - 1 },
                            { col: col - 2, row: row - 2 },
                            { col: col - 3, row: row - 3 },
                        ],
                    }
                }
            }
        }
    }

    const checkWinner = () => {
        return checkRows() || checkCols() || checkDiagonals() || checkDiagonals2()
    }

    return { checkWinner }

}