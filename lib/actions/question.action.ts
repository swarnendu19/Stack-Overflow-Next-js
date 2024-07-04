"use server"

import { connectDatabase } from "../mongoose"

export async function createQuestion(params: any) {
    try {
        connectDatabase();
    } catch (error) {
        
    }
}