import {autoInjectable} from "tsyringe";
import {User} from "../../entities/User";
import {UserDtoIn} from "../../dtos/UserDTO";
import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET || 'super-safe-secret';

@autoInjectable()
export class LoginUserUseCase {
    public static async run(userDto: UserDtoIn) {
        // Already exists user?
        const userFromDB = await User.findOneBy({email: userDto.email});

        if (!userFromDB) {
            throw new Error("User with this email doesn't exists");
        }

        if (userDto.pass !== userFromDB.pass) {
            throw new Error("Password incorrect");
        }

        const payload = { email: userDto.email };

        // Firmamos el token con el secreto y con expiración (por ejemplo, 1h)
        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

        return {
            message: 'Login successful',
            user: userFromDB,
            token: token // devolvemos el JWT
        };
    }
}
