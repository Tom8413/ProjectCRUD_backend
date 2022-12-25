import mongoose, {Schema} from 'mongoose';


export interface User {
    name:string;
    password: string;
    email: string;
}

const UserSchema: Schema = new Schema<User> ({
    name: {
        type:String,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true
    }
});

export default mongoose.model<User>("UserData", UserSchema);
