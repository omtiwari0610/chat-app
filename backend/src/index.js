import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import cors from "cors";
import { app,server } from "./lib/socket.js";
import path from "path";


app.use(
    cors({
    origin : "http://localhost:3000",
    credentials : true,
})
);
app.use(express.json({limit : "100mb"}));
app.use(cookieParser());


app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,"../frontend/chat-app/build")));

    app.get("*",(req,res) => {
        res.sendFile(path.join(__dirname,"../frontend","build","index.html"));
    })
}

dotenv.config();
const PORT = process.env.PORT;
const __dirname = path.resolve();


server.listen(PORT,()=>{
    console.log(`Server running on port:${PORT}`);
    connectDB();
})
