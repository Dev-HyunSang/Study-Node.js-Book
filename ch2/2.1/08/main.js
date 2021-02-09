function findAndSaveUser(Users) {
    Users.findOne({})
        .then((user) => {
            user.name = 'zero';
            return user.save();
        })
        .then((user) => {
            return user.findOne({ gender: 'm'});
        })
        .catch(err => {
            console.error(err);
        });


}

const findAndSaveUser = async (Users) => {
    try {
        let user = await Users.findOne({});
        user.name = 'zero';
        user = await User.save();
        user = await Users.findOne({ gender: 'm'});
        // 생략
    } catch (err) {
        console.error(err);
    }
}

const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
(async () => {
    for await (promise of [promise1, promise2]) {
        console.log(promise);
    }
})();

async function findAndSaveUser(Users) {
    // 생략
}

findAndSaveUser().then(() => {});

async function other() {
    const result = await findAndSaveUser();
}
