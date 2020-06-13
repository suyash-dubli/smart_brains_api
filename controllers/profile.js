const handleProfile = (req,res,db) =>{
	const { id } = req.params;
	// let found = false;
	db.select('*').from('users').where({
		id:id
	})
	.then(user=>{
		if(user.length ===  0){
			res.status(400).json('user not found');
		}else{
			res.json(user[0]);
		}
	})
	.catch(err=>{
			res.status(400).json(err);
	});
}

module.exports = {
	handleProfile:handleProfile
}
