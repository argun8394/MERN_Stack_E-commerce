



//register
const register = async (req, res) => {
    const {userName, email, password} = req.body;

    try {
        
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: 'Some error occurred'
        })
        
    }
}



// login




// logout




//auth middleware