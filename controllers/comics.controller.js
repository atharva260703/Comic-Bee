const pool = require("../../db");
exports.getAllComics = async(req, res) =>{
    try {
        const result = await pool.query("SELECT * FROM comics ORDER BY id ASC");
        res.status(200).json(result.rows);
    }
    catch(err)
    {
        res.status(404).json({"File not Found !!": err.message });
    }
};