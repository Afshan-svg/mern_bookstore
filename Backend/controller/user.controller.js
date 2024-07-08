import User from "../model/user.model.js";
import bcryptjs from "bcryptjs"
export const signup= async (req,res)=>{
    try{
        const {fullname, email, password} = req.body;
        // data is in json form and the data inside json form is known as body
        const user=await User.findOne({email})
        // we will find via email if user already exists
        if(user) {
            return res.status(400).json({message: "User already exists"})
        }

        const hashPassword = await bcryptjs.hash(password, 10)

        const createdUser=new User({
            fullname: fullname,
            email: email,
            password:hashPassword
        })
       await createdUser.save()
       res.status(201).json({message: "User created successfully", user:{
        _id: createdUser._id,
        fullname: createdUser.fullname,
        email:createdUser.email
       }})        // data will be stored in our database
    } catch(error) {
        console.log("Error: ", error.message);
        res.status(500).json({message: "Internal server error"})
    }
}

export const login = async (req, res) => {
    try {
        const {email,password} = req.body;
        // request email and password from body
        const user = await User.findOne({email})
        const isMatch = await bcryptjs.compare(password, user.password)
        if(!user || !isMatch) {
            return res.status(400).json({message: "Invalid username or password"})
        }
        else {
            return res.status(200).json({message: "Login successful", user:{
                _id:user._id,
                fullname:user.fullname, 
                email:user.email
            }})
        }
    } catch(error) {
       console.log("Error: "+ error.message);
       res.status(500).json({message: "Internal Server Error"})
    }
}