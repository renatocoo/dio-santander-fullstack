
const getAdmins = (map) => {
	let admins = [];

	for ([key, value] of map) {
		if (value === 'ADMIN') {
			admins.push(key);
		}
	}

	return admins;
};

const userRoles = new Map();

userRoles.set('João', 'SUDO');
userRoles.set('Renato', 'ADMIN');
userRoles.set('Ana', 'ADMIN');
userRoles.set('Carolina', 'USER');
userRoles.set('Lucas', 'USER');

console.log(getAdmins(userRoles));