import express from "express";
const router = express.Router();
router.get("/profile", (req,res)=>
    {
        res.send("User Profile is ready.");
    }
);
export default router;