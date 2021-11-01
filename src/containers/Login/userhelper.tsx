interface User {
    name: string,
    password: string
}

const myStorage = window.localStorage;
myStorage.clear();

function init() : void {
    const users: User[] = [{
        name: "Andy",
        password: "Andy123"
    },{
        name: "Jenny",
        password: "Jenny123"
    }]

    users.forEach((u) => {
        myStorage.setItem(u.name, u.password);
    })
}

init();

export default function(user: User): boolean {
    const pwd = myStorage.getItem(user.name)
    return (pwd === user.password)    
}
