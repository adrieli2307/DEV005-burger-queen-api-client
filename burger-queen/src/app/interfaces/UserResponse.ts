export interface usersI { //cambiar nombre a uno mas intuitivo
    email:string;
    id:number;
    role:string;
    // user tipo interface user; crear una interfaz para las propiedades de user
}
export interface UserResponseI { //cambiar nombre a uno mas intuitivo
    accessToken:string;
    user:usersI; // user tipo interface user; crear una interfaz para las propiedades de user
}
export interface UserResponseErrorI {
    error: string;
    ok:boolean;
}
