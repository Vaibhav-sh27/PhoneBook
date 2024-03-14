const express = require("express");
const app = express();
const mysql = require('mysql');
const db = require("./db");
const cors = require("cors");


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);


app.get("/all", (req, res) => {
    db.query('SELECT * from data', (err, rows) => {
        if (err) throw err;
        res.status(200).send(JSON.stringify(rows));
        
    });
});

app.post("/add", (req, res) => {
    console.log(req.body);
    let {first_name, middle_name, last_name, email, ph_no1, ph_no2, address, id} = req.body;
    let sql = `INSERT INTO data (first_name, middle_name, last_name, email, ph_no1, ph_no2, address, id) VALUES ('${first_name}', '${middle_name}', '${last_name}', '${email}', '${ph_no1}', '${ph_no2}', '${address}',  '${id}')`;
    db.query(sql, (err, data) => {
        if (err) throw err;
        res.send(JSON.stringify({msg: 'operation successfull'}));
        
    }); 
});

app.delete("/delete/:id", (req, res)=>{
  console.log(req.params.id);
    const q = `DELETE FROM data WHERE id = '${req.params.id}';`
    db.query(q, (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Deleted");
    });
})

app.patch("/update/:id", (req, res)=>{
  console.log(req.body);
    let { first_name, middle_name, last_name, email, ph_no1, ph_no2, address} = req.body;
    const q =
    `UPDATE data SET first_name = '${first_name}', middle_name ='${middle_name}', last_name='${last_name}', email='${email}', ph_no1='${ph_no1}', ph_no2='${ph_no2}', address='${address}' WHERE id = '${req.params.id}'`;

  db.query(q, (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Updated");
  });
})

app.listen(8089, () => {
    console.log('Server is running at port 8089');
});