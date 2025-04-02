import {User} from "../../domain/models/User";

export class UserService {
    getUser(userId: string): User {
        return new User(userId, "Fer Marín", "fer.marin@example.com");
    }
}