export class Contact {
    constructor(
        public first_name : string,
        public last_name : string,
        public email : string,
        public gender : string,
        //?: optional
        public company?: string,
    ){}
}

export const compagnies=["LinkedIn", "FaceBook", "Amazon", "Apple", "Google"];
export const contacts: Contact[] = [
    {
        "first_name":"Rania",
        "last_name":"Mehri",
        "email":"rania1mehri1@gmail.com",
        "gender":"Female",
        "company":"FaceBook"
    },
    {
        "first_name":"Rania",
        "last_name":"Mehri",
        "email":"rania1mehri1@gmail.com",
        "gender":"Female",
        "company":"Amazon"
    }
]
