const express = require('express');
const dbConnect = require('./config/dbConnect');
const app = express()
const mongoose = require("mongoose")
const denv = require('dotenv').config
const  PORT = process.env.PORT || 4000;
const jwt = require("jsonwebtoken")
const multer = require("multer")
const path = require("path")
const cors = require("cors");
const { type } = require("os");
const { clearScreenDown } = require("readline");
const { error } = require('console');
dbConnect()
// Creation de l'API
app.get("/", (req, res) =>{
    res.send('Hello Word!')
})
app.use(express.json())
app.use(cors())




const storage = multer.diskStorage({
    destination : './telechargement/images',
    filename: (req,file,cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const telechargement =  multer({storage:storage})

// Creation du point finale de téléchargement pour les images
app.use('/images',express.static('telechargement/images'))

app.post("/telechargement",telechargement.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${PORT}/images/${req.file.filename}`
    })
    // On pars dans thunder c , on met la méthode post pour envoyer des données avec url: http://localhost:4000/telechargement
    // puis on va dans body on sélectionne Form , on coche Form Fiels puis on pourra importé les images
    // Puisque plus haut on a mit product donc on pourra selectionner que des images qui commence par product
    // On clique sur send on verra l'image et son url
})

// Schema de creation des produits
const Product = mongoose.model("Product",{
    id:{
        type: Number,
        required:true,

    },
    name:{
            type:String,
            required:true,

        },
    image:{
            type: String,
            required:true,
        },
    category:{
            type: String,
            required:true,
        },
    new_price:{
            type: Number,
            required:true
        },
    old_price:{
            type: Number,
            required:true
        },
    date:{
            type: Date,
            default:Date.now
        },
    available:{
            type:Boolean,
            default:true,
        }
    
})

app.post('/addproduct',async (req, res) =>{
    //  ce code permet a ce que mongoose génère automatiquement les id
    let products = await Product.find({});
    let id;
    if(products.length>0)
        {
            let last_product_array = products.slice(-1)
            let last_product = last_product_array[0]
            id = last_product.id+1
        }
        else{
          id=1  
        }
    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    })
    console.log(product)
    await product.save()
    console.log("Saved")
    res.json({
        success:true,
        name:req.body.name,
        
    })


    // Thunder c: -||- Url devient http://localhost:4000/addproduct
    /*bode -> Json  
             {
                "name": ksgdkjs,
                "id": 4432?
                "old_price":1414
                "new_price":1222,
                "category": kid,
                "image": url de l'image precent
             }
                on pars dans mongodb verify
    */ 
    
})
// Creation de l'api pour supprimer les products

app.post('/removeproduct', async (req, res) =>{
    await Product.findOneAndDelete({id:req.body.id})
    console.log("Remove")
    res.json({
        success:true,
        name:req.body.name

    })
    // Thunder c: -||- Url devient http://localhost:4000/removeproduct avec la methode post
    /*bode -> Json  
             {
                "name": nom du product,
                "id": id du product
    
             }
                on pars dans mongodb verify
    */ 
})

//    Creation de l'api pour recuperer tout les products
app.get('/allproducts', async (req, res) =>{
    let products = await Product.find({})
    console.log("All Products Fetched")
    res.send(products)

})
// Thunder c: -||- Url devient http://localhost:4000/allproduct avec la methode get


// Schema de creation du model utilisateur
const Users = mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type: String
    }, 
    cartData:{
        type:Object
    },
    date:{
        type:Date,
        default:Date.now,
    }
    
})
// //  Creation du poin de fin pour enregistrer les utlisateurs
app.post('/inscription',async (req,res) => {
//     /* vous entrez vos coordonnées on check puis on verifie si l'email existe dans la bd si c'est le cas on vous rnvois un message d'erreur 
//     Si vous n'etes pas utilisateurs vous devez creer un compte
//     utilisateur,
//     Puis votre code sera sauvegarder
//     Puis on creer un token qui utilise l'objet des que l'on enregistrer on génère directement un token
//     */

    let check = await Users.findOne({email:req.body.email})
    if(check) {
        return res.status(400).json({success:false,errors:"existing user found with same email address"})
    }
    let cart = {}
    for (let i = 0; i < 300; i++) {
        const element = Array[i]
        cart[i]= 0;

    }
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart, 
    })

    await user.save()

    const data = {
        user:{
            id:user.id
        }
    }
    const token = jwt.sign(data,'secret_ecom');
    res.json({success:true,token})
})

// Creation du point final pour se connecté
app.post('/connexion', async (req,res) =>{
    let user = await Users.findOne({email:req.body.email})
    if(user){
        const passCompare = req.body.password === user.password;
        if(passCompare) {
            const data ={
                user:{
                    id:user.id
                }
            } 
            const token = jwt.sign(data,'secret_ecom')
            res.json({success:true,token})
        }
        else{
            res.json({success:false,errors:"wrong Password"})
        }
    }
    else{
        res.json({success:false,error: "wrong Email Id"})
    }
})



app.listen(PORT, () => {
    console.log(`Serveur a été lancé sur le port ${PORT}`)

})