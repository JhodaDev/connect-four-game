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
                    return board[col][row]
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
                    return board[col][row]
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
                    return board[col][row]
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
                    return board[col][row]
                }
            }
        }
    }

    const checkWinner = () => {
        return checkRows() || checkCols() || checkDiagonals() || checkDiagonals2()
    }

    return { checkWinner }

}