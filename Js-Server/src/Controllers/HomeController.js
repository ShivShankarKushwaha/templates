

/** 
 * @type {import('../Types').HomeController}
*/

module.exports.HomeController = (req,res)=>
{
    return res.status(200).json({message:'HomePage Route'})
}