// pages/api/productos/index.js
import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { codigo } = req.query;
    try {
      const productos = codigo
        ? await prisma.producto.findMany({ where: { codigo } })
        : await prisma.producto.findMany();
      res.status(200).json(productos);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los productos' });
    }
  }
}
