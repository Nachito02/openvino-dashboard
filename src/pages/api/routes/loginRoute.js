// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
    //TODO PROTEGER RUTAS
  try {

    console.log(req.body)
  
    res.status(200).json('login');
  } catch (error) {
    res.status(404).json(error.message);
  }
}
