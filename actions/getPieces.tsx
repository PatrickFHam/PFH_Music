'use server'

import { connectToDatabase } from "@/db";

export async function getPieces() {
  const { db } = await connectToDatabase();
  const data = await db.collection('pieces').find({}).toArray();
  const pieces = JSON.parse(JSON.stringify(data));

  return {
    pieces
  }
};