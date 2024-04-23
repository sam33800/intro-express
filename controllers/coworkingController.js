const { UniqueConstraintError } = require('sequelize')
const { Coworking } = require('../db/sequelizeSetup')



// route ('/')

const getCoworking = async (req, res) => {

    try{
        const result = await Coworking.findAll()
        res.json({ message: `Il y a ${result.length} coworkings`, data: result })
    }catch(error) {
        res.status(500).json({message : `Une erreur est surenue`, data : error})
    }

}


const postCoworking = async (req, res) => {
    try {
        const newCoworking = await Coworking.create(req.body)
        res.status(201).json({ message: `Un coworking a bien été ajouté`, data: newCoworking })
    } catch (error) {

        if(error instanceof UniqueConstraintError)
        return res.status(400).json({message : `Le cowork ne peut pas etre crée`, data : error.message})

        res.status(500).json({message : `Une erreur est surenue`, data : error})

    }
}


// route ('/id')


const getCoworkingId = async (req, res) => {

    try {
        // const result = await Coworking.findAll({
        //     where:{
        //         id : req.params.id
        //     }
        // })

        const result = await Coworking.findByPk(req.params.id)

        if(!result){
            return res.status(404).json({message : "le coworking n'existe pas", data : result})

        }

        res.json({message : "coworking trouvé", data : result})

        
    } catch (error) {
        
        res.status(500).json({message : "le  coworking n'existe pas"})

    }
}


const putCoworkingId = async (req, res) => {
       
    try {
        const result = await Coworking.findByPk(req.params.id)

       

        if(!result){

            return res.status(404).json({message : `le coworking n'exite pas`})
        }

        result.update(req.body)

        res.json({ message: 'Le coworking a bien été modifié', data: result })


        
    } catch (error) {
       
        res.status(500).json({ message: `Erreur` })


    }
}

const deleteCoworkingId = async (req, res) => {
    // on identifie la bonne ligne du tableau et on supprime l'élément s'il existe
    // let filteredArray = coworkingsData.filter(el => {
    //     return el.id !== parseInt(req.params.id)
    // })

    // coworkingsData = filteredArray
try {
    const result = await Coworking.findByPk(req.params.id)

    if(!result){
        return res.status(404).json({message : `le coworking n'existe pas`})

    }

    res.json({message : `le coworking a bien été supprimé`, data : result})
    result.destroy()

} catch (error) {
    res.status(500).json({message : `Erreur`})

}

}

module.exports = {getCoworking, postCoworking, getCoworkingId, putCoworkingId, deleteCoworkingId}