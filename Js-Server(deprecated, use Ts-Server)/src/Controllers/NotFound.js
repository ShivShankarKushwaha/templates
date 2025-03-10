
/**
 * @type {import('../Types').NotFound}
 */
module.exports.NotFoundController = (req,res)=>
{
    return res.status(404).json({message:'route not found'})
}