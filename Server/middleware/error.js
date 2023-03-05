
export const error = function(err, req, res, next) {
    // Log the exception and return a friendly error to the client. 
    res.status(500).send("Something failed");
   }