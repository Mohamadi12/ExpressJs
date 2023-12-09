const date=(req,res,next)=>{

    let D=new Date()
    let h=D.getHours()
    
    if(!(h>=18 && h<=21)){
        res.send(`You arn't welcome,please be back we work from 9am to 5pm ${h} hours`)
    }
    
    next()
    }
    module.exports=date