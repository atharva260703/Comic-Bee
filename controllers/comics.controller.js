const pool = require("../db");


exports.getAllComics = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM comics");
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({
            message: "Failed to fetch comics",
            error: err.message
        });
    }
};

exports.createComic = async (req, res) => {
    const { title, author } = req.body;

    try {
        const result = await pool.query(
            "INSERT INTO comics (title, author) VALUES ($1, $2) RETURNING *",
            [title, author]
        );

        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({
            message: "Failed to create comic",
            error: err.message
        });
    }
};
