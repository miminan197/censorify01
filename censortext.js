var censoredWorlds=["sad","bad","mad"];
var custormCensoredWords=[];
function censor(inStr)
{
    for(idx in censoredWorlds)
    {
        inStr=inStr.replace(censoredWorlds[idx],"****");
    }
    for(idx in custormCensoredWords)
    {
        inStr=inStr.replace(custormCensoredWords[idx],"****");
    }
    return inStr;
}
 
function addCensoreWorld(world)
{
    custormCensoredWords.push(world);
}
 
function getCensoreWorlds()
{
    return censoredWorlds.concat(custormCensoredWords);
}
exports.censor=censor;
exports.addCensoreWorld=addCensoreWorld;
exports.getCensoreWorlds=getCensoreWorlds;
