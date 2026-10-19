 const asynsHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, req, next)).catch((err) => next(err))
    }
 }


export {asynsHandler}

// const asynsHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             sucess: false,
//             massage:error.message
//         })
//     }
// }