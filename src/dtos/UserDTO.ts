export interface UserDtoIn {
    name: string;
    email: string;
    pass: string;
}

export interface UserDtoOut {
    id: number;
    name: string;
    email: string;
}