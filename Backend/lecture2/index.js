import express from 'express';
const app= express();

// app.get('/', (req, res)=>{
//   res.send("Server is ready");
// })

app.get('/jokes', (req, res)=>{
  const jokes =[
    {
      id: 1,
      title:'joke1',
      joke:'haha'
    },

    {
      id: 2,
      title:'joke2',
      joke:'hahaa'
    },

    {
      id: 3,
      title:'joke3',
      joke:'hahaaa'
    },

    {
      id: 4,
      title:'joke4',
      joke:'hahaaaa'
    },

    {
      id: 5,
      title:'joke5',
      joke:'hahaaaaa'
    }
  ]
  res.send(jokes);
})

const port=process.env.PORT ||3000;

app.listen(port, ()=>{
  console.log(`Server is running at port ${port}`);
})
