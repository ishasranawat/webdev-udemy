import express from 'express';
const app= express();

// app.get('/', (req, res)=>{
//   res.send("Server is ready");
// })

app.get('/', (req, res)=>{
  const jokes =[
    {
      id: one,
      title:'joke1',
      joke:'haha'
    }

    {
      id: two,
      title:'joke1',
      joke:'haha'
    }

    {
      id: three,
      title:'joke1',
      joke:'haha'
    },

    {
      id: four,
      title:'joke1',
      joke:'haha'
    }

    {
      id: five,
      title:'joke1',
      joke:'haha'
    }
  ]
})











const port=process.env.PORT ||3000;

app.listen(port, ()=>{
  console.log(`Serve at ${port}`);
})
