export interface LoginUsersI { //cambiar nombre a uno mas intuitivo
    email:string;
    id:number;
    role:string;
    // user tipo interface user; crear una interfaz para las propiedades de user
}
export interface LoginResponseI { //cambiar nombre a uno mas intuitivo
    accessToken:string;
    user:LoginUsersI; // user tipo interface user; crear una interfaz para las propiedades de user
}
