const getUser = (tab,serchedName) => { 
    const user=tab.find(el=>el.name==serchedName)
    if (user) {
        return user
    }
    return "no user"
}
const moyAge = (tab) => { 
    return tab.reduce((somme,cur)=>somme+cur.age,0)/tab.length
 }
 module.exports={moyAge,getUser}