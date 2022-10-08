const Airtable=require('airtable')
const db=new Airtable({apiKey:process.env.AIRTABLE_TOKEN,}).base(process.env.AIRTABLE_ID)
const headers={'Access-Control-Allow-Origin':'*','Access-Control-Allow-Credentials':true,}
exports.handler=async function(){try{const articles=(await db('articles').select().all()).map((e)=>({_id:e.id,...e.fields,})).filter((e)=>e.publish)
return{statusCode:200,headers,body:JSON.stringify({articles,}),}}catch(e){console.error(e)
return{statusCode:400,headers,}}}