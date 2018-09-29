// class Employ {
//     fullName: string;
// }

// let employ = new Employ();
// employ.fullName = 'bob';
// if (employ.fullName) {
//     console.log(employ.fullName);
// }
let password = 'secret password';
class Employ {
    private _fullName: string;
    get fullName(): string {
        return this._fullName;
    }
    set fullName(newName: string) {
        if (password && password === 'secret password') {
            this._fullName = newName;
        } else {
            console.log('Error: Unauthorized update of employ');
        }
        
    }
}
let employ = new Employ();
employ.fullName = 'bob';
if (employ.fullName) {
    alert(employ.fullName);
}