const coors = [8, 52, 97, 141, 186, 230, 275]
const coorsLarge = [6, 60, 113, 167, 220, 273, 326]
const coorsLarge2 = [8, 70, 132, 195, 257, 319, 382]

export const getCoors = (width, row, lastIndex) => {
    if (width < 640) {
        return {
            x: coors[row],
            y: lastIndex * 44 + 12 - 295,
            top: -301
        }
    }

    if (width >= 640 && width < 768) {
        return {
            x: coorsLarge[row],
            y: lastIndex * 53 + 2 - 345,
            top: -360
        }
    }

    if (width >= 768) {
        return {
            x: coorsLarge2[row],
            y: lastIndex * 62 + 4 - 408,
            top: -420
        }
    }
}
