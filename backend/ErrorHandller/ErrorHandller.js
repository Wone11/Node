/*Here to controller error Handller */

const ErrorHandllers = (err, req,res)=>{
    const statusCode = req.statusCode ? req.statusCode: 500;
    res.json({
        message:err.message,
        status:statusCode,
        stackTrace:err.stack
    });
}

module.exports = ErrorHandllers;