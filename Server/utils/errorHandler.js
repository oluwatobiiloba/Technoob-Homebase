

module.exports = {
     filter(err){
       let status = 500
        let message = "An Error Occured"
        let trace = null

        if(err.code === 11000){
            status = 409
            message = `"${err.keyValue.name}" already exists`
        }

    return { status,message,trace}
    }
}