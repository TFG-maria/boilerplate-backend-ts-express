import {injectable} from "tsyringe";
import {User} from "../../entities/User";
import {UserDtoOut} from "../../dtos/UserDTO";

@injectable()
export class GetUserUseCase {
    public static async run(userId: number) {
        // Wait for the database query response
        const userFromDB = await User.findOneBy({id: userId});

        // Validate that the user has been found
        if (!userFromDB) {
            throw new Error("User not found");
        }

        // Build the DTO
        const userDto: UserDtoOut = {
            id: userFromDB.id,
            name: userFromDB.name,
            email: userFromDB.email
        };

        // Alternatively, if the properties are identical, you could do:
        // Object.assign(userDto, userFromDB);

        return userDto;
    }
}
