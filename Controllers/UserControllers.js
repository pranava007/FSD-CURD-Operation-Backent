import User from "../Models/UserModels.js";

export const CreateUser = async (req,res)=>{
    try {
        const newuser = new User(req.body)
        await newuser.save()
        res.status(200).json({message:"User Create Successfully",result:newuser})

        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Sever Error in Create User"})
    }
}

export const GetUser = async(req,res)=>{
    try {
        const user = await User.find()
        res.status(200).json({message:"User Retrieved Successfully",result:user})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error in Get User"})
        
    }
}

export const UpdateUser = async(req,res)=>{
    try {

        const UseID = req.params.id;
        const {name,email,age} = req.body;
        const newUserFData = await User.updateOne({_id:UseID},{name,email,age})
        res.status(200).json({message:"User Update Successfully",result:newUserFData})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error in Update User"})
    }
}

export const DeleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const del = await User.findByIdAndDelete({_id:id});

        res.status(200).json({ message: "User deleted successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error in Delete User" });
    }
};



