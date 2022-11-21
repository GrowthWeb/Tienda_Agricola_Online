import dotenv from 'dotenv';

dotenv.config({path: '../.env'})

export const MONGODB_URI=process.env.MONGODB_URI || "mongodb+srv://jhon-meza:temporal2022@cluster1.z7nxyn8.mongodb.net/tienda_db";
export const PORT=process.env.PORT || 4000

export const CLOUDINARY_NAME =process.env.CLOUDINARY_NAME || "estebanm96"
export const CLOUDINARY_API_KEY =process.env.CLOUDINARY_API_KEY || 278824437644668
export const CLOUDINARY_API_SECRET =process.env.CLOUDINARY_API_SECRET || "sPUv7VKw2HwiZFIOx58N2a2tgs8"
 