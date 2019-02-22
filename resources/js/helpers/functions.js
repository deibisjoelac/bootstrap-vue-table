function isEmptyObject(obj) {
	if(obj==null) return true;
    return Object.keys(obj).length === 0;
}

function isNotNull(obj)
{
 return obj && obj !== 'null' && obj !== 'undefined';
}
export  {isEmptyObject,isNotNull};