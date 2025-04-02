import {autoInjectable} from "tsyringe";
import {User} from "../../entities/User";
import {UserDtoIn} from "../../dtos/UserDTO";

@autoInjectable()
export class CreateUserUseCase {
    public static async run(userDto: UserDtoIn) {
        // Already exists user?
        const userFromDB = await User.findOneBy({email: userDto.email});

        if (userFromDB) {
            throw new Error("User with this email already exists");
        }

        const user = new User();

        // Map properties explicitly for better control and safety
        user.name = userDto.name;
        user.email = userDto.email;
        user.pass = userDto.pass;

        // If the DTO and the entity have the same properties, you can use Object.assign
        // Object.assign(user, userDto);

        await user.save();
    }
}
