const Pool = require("pg").Pool;
const pool = new Pool({
	user: "user",
	host: "localhost",
	password: "pass",
	port: 5432,
	database: "db"
});

const addNewVisitor  = async(vName,vAge,dateOfVisit,timeOfVisit,assistantName,comments) =>{
	return new Promise(async(resolve, reject)=>{
		await pool.query(`INSERT INTO VISITORS(vname, vage, dateofvisit, timeofvisit, assistantname, comments) VALUES($1,$2,$3,$4,$5,$6) RETURNING *` , 
		[vName,vAge,dateOfVisit,timeOfVisit,assistantName,comments],
		(err,results)=> {
			if (err) {
				reject(err);
			}
		resolve(results.rows[0]);
		});
	})
	  
}

const listAllVisitors = async() => {
	return new Promise(async(resolve,reject)=>{
	  await pool.query(
		`SELECT * FROM VISITORS`,
		(err, results) => {
		if (err) {
			reject(err);
		}
		resolve(results.rows);	
	   	}
	);
	})
};

const viewVisitor = async (id) => {
	return new Promise(async(resolve,reject)=>{
		await pool.query(
			`SELECT * FROM visitors WHERE id = $1`,
			[id],
			(err, results) => {
			  if (err) {
				reject(err);
			  }
			  resolve(results.rows[0]);
			}
		);
		}
)};

const deleteVisitors = async () => {
	return new Promise(async(resolve,reject)=>{
		await pool.query(
			`DELETE FROM visitors `,(err, results) => {
			  if (err) {
				reject(err);
			  }
			  console.log('All rows deleted!')
			  resolve(results.rows);
			}
		  );
	}
)};

const deleteVisitor = async (id) => {
	return new Promise(async(resolve,reject)=>{
		await pool.query(
			`DELETE FROM visitors WHERE id = $1`,
			[id],
			(err, results) => {
			  if (err) {
				reject(err);
			  }
			  console.log('deleted!!!')
			  resolve(results);
			}
		  );
	}
)};

const updateVisitor = async (vid,vName,vAge,dateOfVisit,timeOfVisit,assistantName,comments) => {
	return new Promise(async(resolve,reject)=>{
		await pool.query(
			`UPDATE visitors SET vname = $2, vage = $3,dateofvisit = $4,timeofvisit=$5,assistantname = $6,comments =$7 WHERE id = $1 RETURNING *`,
			[vid,vName,vAge,dateOfVisit,timeOfVisit,assistantName,comments],
			(err, results) => {
			  if (err) {
				reject(err);
			  }
			  resolve(results.rows[0]);
			}
		  );
	}
)};


module.exports = {addNewVisitor,listAllVisitors,viewVisitor,deleteVisitors,deleteVisitor,updateVisitor}