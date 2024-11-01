export class User {
    private id: string
    private name: string
    private email: string
    private password: string

    constructor(name: string, email: string, password: string) {
        this.name = name
        this.email = email
        this.password = password
    }

    get userPayload(): { name: string; email: string; password: string } {
        return {
            name: this.name,
            email: this.email,
            password: this.password,
        }
    }
}
