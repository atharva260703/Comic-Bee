import {process_views} from "../wasm/rust-core/pkg/rust_core.js";
import pool from "../db.js";
const getChapters = async (req, res) => {
    try {
        const { classId } = req.query;

        if (!classId) {
            return res.status(400).json({ message: "classId is required" });
        }

        const result = await pool.query(
            `SELECT 
                id,
                chapter_number AS number,
                title,
                description
             FROM chapters
             WHERE class_id = $1
             ORDER BY chapter_number`,
            [classId]
        );

        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch chapters",
            error: error.message
        });
    }
};

module.exports = { getChapters };
