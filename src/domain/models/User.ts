export class User {
    constructor(
        public id: string,
        public name: string,
        public email: string
    ) {}

    public changeEmail(newEmail: string): void {
        if (!this.isValidEmail(newEmail)) {
            throw new Error('Invalid email');
        }
        this.email = newEmail
    }

    private isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}