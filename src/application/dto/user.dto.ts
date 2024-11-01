export class UserDto {
    id: string
    name: string
    email: string
    password: string
}

export class UserOutputDto {
    constructor(
        public id: string,
        public name: string,
        public email: string,
    ) {}
}
