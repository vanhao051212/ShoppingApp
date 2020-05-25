var mysql = require('mysql'); // Khởi tạo câu lệnh DB
var pool = mysql.createPool({
	connectionLimit: 20,
	host: "localhost", // Host mặc định
	user: "root", // User mặc định
	password: "", // Password mặc định
	dateStrings: true,
	database: "db_app" // Tên database
});

exports.queryProductDetails = function () {
	let cmd = "SELECT p.id,p.name as name ,p.id_type as idType, t.name as nameType, \
	p.price, p.color, p.material, p.description, GROUP_CONCAT(i.link) \
	AS images FROM product p LEFT JOIN images i ON p.id = i.id_product \
	inner join product_type t ON t.id = p.id_type where p.new = 1 group by p.id LIMIT 0,6";
	return new Promise(function (resolve, reject) {
		pool.query(cmd, function (err, rows, fields) { // Truy vấn
			if (err) reject(err);
			if (rows.length > 0) {
				resolve(rows);
			}
			else resolve("queryProductDetails-ERROR");
		});
	});
}
exports.queryTypeProduct = function () {
	let cmd = "Select * from product_type";
	return new Promise(function (resolve, reject) {
		pool.query(cmd, function (err, rows, fields) { // Truy vấn
			if (err) reject(err);
			if (rows.length > 0) {
				resolve(rows);
			}
			else resolve("queryTypeProduct-ERROR");
		});
	});
}
exports.queryListProduct = function (id_type, page) {
	let limit = 3;
	let offset = (page - 1) * limit;
	let cmd = `SELECT p.*, t.name as nameType, GROUP_CONCAT(i.link) AS images FROM product p \
	inner join product_type t ON t.id = p.id_type INNER JOIN images i \
	ON i.id_product = p.id WHERE id_type = ${id_type} group by p.id LIMIT ${offset},${limit} `;
	return new Promise(function (resolve, reject) {
		pool.query(cmd, function (err, rows, fields) { // Truy vấn
			if (err) reject(err);
			if (rows.length > 0) {
				resolve(rows);
			}
			else resolve("queryListProduct-ERROR");
		});
	});
}


// for auth
exports.usersRegister = (email, password, name) => {
		// let sql = `INSERT INTO users(email,password,name) VALUES('${email}','${password}','${name}')\
		// where not exists (select * from users where email = '${email}')`;
		let sql = `INSERT INTO users(email,password,name) VALUES('${email}','${password}','${name}')`;
		return new Promise(function (resolve, reject) {
			if (name != '' && email != '' && password != ''){
				pool.query(sql, function (err, result) { // Truy vấn
					if (err) resolve('usersRegister-ERROR');
					else resolve("usersRegister-SUCCESS");
				});
			}
			else {
				resolve("usersRegister-ERROR");
			}
		});
}

exports.queryUser = (email)=>{
	let sql = `SELECT u.email, u.name, u.address, u.phone, u.password FROM users u \
	where email = '${email}'`;
	return new Promise ((resolve, reject)=>{
		pool.query(sql, (err, rows, fields)=>{
			if (err) reject(err);
			if (rows.length>=1){
				resolve(rows[0]);
			}
			else{
				resolve('queryUser-ERROR');
			}
		})
	})
}

exports.updateUserInfo=(name, phone, address, email)=>{
	let sql = `UPDATE users SET name='${name}', phone='${phone}', address='${address}' WHERE email ='${email}'`;
	return new Promise ((resolve, reject)=>{
		pool.query(sql, (err, rows, fields)=>{
			if (err) resolve('updateUserInfo-ERROR');

			else{
				resolve(rows);
			}
		})
	})
}