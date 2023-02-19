import counterYellowSmall from '../assets/counter-yellow-small.svg'
import counterRedSmall from '../assets/counter-red-small.svg'
import counterYellowLarge from '../assets/counter-yellow-large.svg'
import counterRedLarge from '../assets/counter-red-large.svg'

export const getImage = (width, defaultImage) => {
    if (width < 640) {
        return defaultImage === 'yellow' ? counterYellowSmall : counterRedSmall
    } else {
        return defaultImage === 'yellow' ? counterYellowLarge : counterRedLarge
    }
}
