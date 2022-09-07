import * as bcrypt from 'bcrypt';
import { db } from '.';
import User from './user.schema';



export const checkUserEmailPassword = async( email: string, password: string ) => {

    await db.connect();
    const user = await User.findOne({ email });
    await db.disconnect();

    if ( !user ) {
        return null;
    }

    if ( !bcrypt.compare( password, user.password! ) ) {
        return null;
    }

    const { role, name, _id, image } = user;

    return {
        _id,
        email: email.toLocaleLowerCase(),
        role,
        name,
        image
    }
}


// // Esta función crea o verifica el usuario de OAuth
export const oAUthToDbUser = async( oAuthEmail: string, oAuthUserName: string, oAuthPicture: string ) => {

    await db.connect();
    const user = await User.findOne({ email: oAuthEmail });

    if ( user ) {
        await db.disconnect();
        const { _id, name, email, role, image } = user;
        return { _id, name, email, role, image };
    }

    const newUser = new User({ email: oAuthEmail.toLowerCase(), name: oAuthUserName.toLowerCase(), password: '@', role: 'USER_ROL', image: oAuthPicture });
    await newUser.save();
    await db.disconnect();

    const { _id, name, email, role, image } = newUser;
    return { _id, name, email, role, image };    
}
