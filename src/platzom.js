export default function platzom(str) {
    let translation = str

    //si la palabra termina en "ar",  se le quitan esos caracteres....
    if (str.toLowerCase().endsWith('ar')) {
        translation = str.slice(0, -2)
    }
    //si la paabra inicia con z se le añade "pe" al final

    if (str.toLowerCase().startsWith('z')) {
        translation += 'pe'
    }

    //si la palabra traducida riene mas de 10 letras se debe partir a l mitad con un guion
    const length = translation.length
    if ( length >= 10) {
        const firstHlaf = translation.slice(0, Math.round(length / 2))
        const secondHlaf = translation.slice(Math.round(length / 2))
        translation = `${firstHlaf}-${secondHlaf}`
    }
    //si la palabra oroginal es un palindromo, ninguna regla anteror cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas
    
    const reverse = (str) => str.split('').reverse().join('')

    function minMay(str) {
        const length = str.length
        let translation = ''
        let capitalize = true
        for (let i = 0; i < length; i++) {
            const char = str.charAt(i)
            translation += capitalize ? char.toUpperCase() : char.toLowerCase()
            capitalize = !capitalize
        }
        return translation
    }

    if (str == reverse(str)) {
        return minMay(str)
    }

    return translation
}
