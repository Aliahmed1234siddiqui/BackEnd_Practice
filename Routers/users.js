import  express  from 'express'

const router = express.Router()

let users=
    [
        {
            "id": "1",
            "Name": "Ali",
            "Email": "ali1@gmail.com",
            "Address": "C-1 10/4 Malir",
            "PhoneNumber": "03316037964"
        },
        {
            "id": "2",
            "Name": "Ahmed",
            "Email": "ahmed2@gmail.com",
            "Address": "C-2 10/4 Malir",
            "PhoneNumber": "03316037965"
        },
        {
            "id": "3",
            "Name": "Bilal",
            "Email": "bilal3@gmail.com",
            "Address": "C-3 10/4 Malir",
            "PhoneNumber": "03316037966"
        },
        {
            "id": "4",
            "Name": "Zain",
            "Email": "zain4@gmail.com",
            "Address": "C-4 10/4 Malir",
            "PhoneNumber": "03316037967"
        },
        {
            "id": "5",
            "Name": "Osman",
            "Email": "osman5@gmail.com",
            "Address": "C-5 10/4 Malir",
            "PhoneNumber": "03316037968"
        },
        {
            "id": "6",
            "Name": "Danish",
            "Email": "danish6@gmail.com",
            "Address": "C-6 10/4 Malir",
            "PhoneNumber": "03316037969"
        },
        {
            "id": "7",
            "Name": "Hassan",
            "Email": "hassan7@gmail.com",
            "Address": "C-7 10/4 Malir",
            "PhoneNumber": "03316037970"
        },
        {
            "id": "8",
            "Name": "Sohail",
            "Email": "sohail8@gmail.com",
            "Address": "C-8 10/4 Malir",
            "PhoneNumber": "03316037971"
        },
        {
            "id": "9",
            "Name": "Tariq",
            "Email": "tariq9@gmail.com",
            "Address": "C-9 10/4 Malir",
            "PhoneNumber": "03316037972"
        },
        {
            "id": "10",
            "Name": "Imran",
            "Email": "imran10@gmail.com",
            "Address": "C-10 10/4 Malir",
            "PhoneNumber": "03316037973"
        },
        {
            "id": "11",
            "Name": "Yasir",
            "Email": "yasir11@gmail.com",
            "Address": "C-11 10/4 Malir",
            "PhoneNumber": "03316037974"
        },
        {
            "id": "12",
            "Name": "Zeeshan",
            "Email": "zeeshan12@gmail.com",
            "Address": "C-12 10/4 Malir",
            "PhoneNumber": "03316037975"
        },
        {
            "id": "13",
            "Name": "Faizan",
            "Email": "faizan13@gmail.com",
            "Address": "C-13 10/4 Malir",
            "PhoneNumber": "03316037976"
        },
        {
            "id": "14",
            "Name": "Junaid",
            "Email": "junaid14@gmail.com",
            "Address": "C-14 10/4 Malir",
            "PhoneNumber": "03316037977"
        },
        {
            "id": "15",
            "Name": "Irfan",
            "Email": "irfan15@gmail.com",
            "Address": "C-15 10/4 Malir",
            "PhoneNumber": "03316037978"
        },
        {
            "id": "16",
            "Name": "Salman",
            "Email": "salman16@gmail.com",
            "Address": "C-16 10/4 Malir",
            "PhoneNumber": "03316037979"
        },
        {
            "id": "17",
            "Name": "Kashif",
            "Email": "kashif17@gmail.com",
            "Address": "C-17 10/4 Malir",
            "PhoneNumber": "03316037980"
        },
        {
            "id": "18",
            "Name": "Noman",
            "Email": "noman18@gmail.com",
            "Address": "C-18 10/4 Malir",
            "PhoneNumber": "03316037981"
        },
        {
            "id": "19",
            "Name": "Rizwan",
            "Email": "rizwan19@gmail.com",
            "Address": "C-19 10/4 Malir",
            "PhoneNumber": "03316037982"
        },
        {
            "id": "20",
            "Name": "Umar",
            "Email": "umar20@gmail.com",
            "Address": "C-20 10/4 Malir",
            "PhoneNumber": "03316037983"
        }
    ]

router.get('/',(req, res)=>{
    return  res.status(200).send(users)  
  })

router.post('/user',(req, res)=>{
  try{
      const{Name , Email, Address , PhoneNumber} = req.body
      if (Name && Email){
          users.push({ id :users.length+1,...req.body})
         return res.status(200).send( {message:"user successfully add", StatusCode:200})  
      }else{
         return res.status(403).send( {message:"Fill  all the fields", StatusCode:403})  
          
      }
  }
 catch(err){
  return res.status(500).send( {message:err.message, StatusCode:500})  

 }
})
  
router.delete('/user/:id',(req,res)=>{
  var index =users.findIndex(v=>v.id ===Number(req.params.id))
  console.log(index)
  users.splice(index ,1)
return res.send("user successfully Deleted")  

})
router.put('/user/:id',(req,res)=>{
  var index =users.findIndex(v=>v.id ===req.params.id)
  users.splice(index ,1,{id:index+1 ,...req.body})
return res.status(200),send({message:"user successfully edited",Status:200})

  

})


export default router