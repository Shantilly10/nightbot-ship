export default function handler(req,res){
  const q=req.query;
  const a=q.a||"A";
  const b=q.b||"B";
  const p=Math.floor(Math.random()*101);
  let c;
  if(p==100) c=["Super match.","Amor puro y real.","Mejor shippeo no hay."];
  else if(p<20) c=["No funciona para nada.","Solamente amigos.","odiense mejor."];
  else if(p<40) c=["Lo veo difícil","mmm... Aquí no hay mucho futuro."];
  else if(p<60) c=["Podría ser?","Algo hay por el aire entre los dos."];
  else if(p<80) c=["Buen match, mejor match que los de tinder.","Hay química entre estos dos pololos.","Podrían intentarlo nunca se sabe."];
  else c=["Simplemente perfectos!","Relación segura, estable, sana y hermosa."];

  let name="";
  if(p>=90){
    const x=a.toLowerCase(), y=b.toLowerCase();
    name=" | Nombre: "+(x.slice(0,Math.ceil(x.length/2))+y.slice(Math.floor(y.length/2)));
    name=name.charAt(0).toUpperCase()+name.slice(1);
  }
  const msg=`Compatibilidad entre ${a} y ${b}: ${p}%. ${c[Math.floor(Math.random()*c.length)]}${name}`;
  res.status(200).send(msg);
}
