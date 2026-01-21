// arrow function do not have their own this

let userInfo = {
    name: 'Code Improve',
    fullName1() {
        console.log(this.name + ' Normal functions')
    },
    fullName() {
        const test = () => {
            console.log(this.name + '===');
        }
        test();
        console.log(this.name+' Normal Function');
    }
}
userInfo.fullName1()



function show() {
  console.log(arguments);
}

show(1, 2, 3);