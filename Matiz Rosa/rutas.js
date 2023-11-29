const express = require('express')
const rutas = express.Router()

rutas.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('SELECT * FROM compras', (err, rows)=>{
        if(err) return res.send(err)
        res.json(rows)
        })
    })
})

rutas.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO compras SET ?', [req.body], (err, rows)=>{
        if(err) return res.send(err)
        res.send('Compra Realizada')
        })
    })
})

rutas.delete('/:idCompras', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM compras WHERE idCompras = ?', [req.params.idCompras], (err, rows)=>{
        if(err) return res.send(err)
        res.send('Compra Elimininada')
        })
    })
})

rutas.put('/:idCompras', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE compras SET ? WHERE idCompras = ?', [req.body, req.params.idCompras], (err, rows)=>{
        if(err) return res.send(err)
        res.send('Compra Actualizada')
        })
    })
})

module.exports = rutas

