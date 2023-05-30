// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getRedeems } from "../controllers/redeemsController";

export default async function handler(req, res) {
    //TODO PROTEGER RUTAS
  try {

    const redeems = await getRedeems();
    res.status(200).json(redeems);
  } catch (error) {
    res.status(404).json(error.message);
  }
}
