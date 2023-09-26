// funciones de orden superior => recibe como parametro una función y la mejora o le hace una modificación y me retorna esa función mejorada

module.exports = (fn) => {
    return function(req, res, next){
        fn(req, res).catch((err) => {next(err)})
    }
}