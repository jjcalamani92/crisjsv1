
import mongoose, { Schema, model, Model } from 'mongoose';
// import { UserS } from '../interfaces/User';
export interface UserS {
	_id      : string;
	name     : string;
	email    : string;
	password?: string;
	role     : string;
	image     : string;
	site		: string[];
	status: boolean;
	google: boolean;

	createdAt?: string;
	updatedAt?: string;
}

const userSchema = new Schema({
    name    : { type: String, required: true },
    email   : { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
        type: String,
        enum: {
            values: ['ADMIN_ROL','CLIENT_ROL', 'USER_ROL', 'SUPER_ROL'],
            message: '{VALUE} no es un role válido',
            default: 'USER_ROL',
            required: true
        }
    },
    sites: [{ type: String}],
    image: { type: String, default:'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1655762236/React-jj/blogs/sinfoto_l9xdm5.png'},
    status: { type: Boolean, default: true},
    google: { type: Boolean},
}, {
    timestamps: true,
})

const User:Model<UserS> = mongoose.models.User || model('User',userSchema);
userSchema.pre<UserS>('save', function (next) {
  this.name = this.name.toLowerCase();
  this.email = this.email.toLowerCase();
  next();
});
export default User;