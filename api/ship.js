export default function handler(req,res){
  const a=(req.query.a||"").trim();
  const b=(req.query.b||"").trim();
  if(!a||!b)return res.status(200).send("Usa: !ship Nombre1 Nombre2");
  const p=Math.floor(Math.random()*101);
  const frases={
    100:["Mejor shippeo no puede haber.","Esto es amor verdadero.","Fueron hecho el uno para el otro."],
    90:["Match perfecto. Se sienten el uno al otro.","Casi lo máximo. Amor puro y bello."],
    80:["Huele a amor cuando están juntos.","Sí, hay potencial.","buen match, mejor que los de tinder"],
    60:["Podría funcionar con esfuerzo.","Hay química, pero falta algo.","Casi, pero no.","Sus amores verdaderos todavía estan esperandolos..."],
    40:["Puede que funcione... si el universo se alinea.","Hay una muy mínima chance.","mmm... Aquí no hay mucho futuro."],
    20:["No hay futuro aquí.","Eso es un NO rotundo.","hay más match entre el aceite y el agua, que en ustedes.","Peor match no puede haber","mejor amigos nada más, que disgusting..."]
  };
  let c;
  if(p==100)c=frases[100];
  else if(p>=90)c=frases[90];
  else if(p>=80)c=frases[80];
  else if(p>=60)c=frases[60];
  else if(p>=40)c=frases[40];
  else c=frases[20];

  let name="";
  if(p>90){
    const x=a.toLowerCase(), y=b.toLowerCase();
    name=" | Nombre: "+(x.slice(0,Math.ceil(x.length/2))+y.slice(Math.floor(y.length/2)));
    name=name.charAt(0).toUpperCase()+name.slice(1);
  }
  const msg=`Compatibilidad entre ${a} y ${b}: ${p}%. ${c[Math.floor(Math.random()*c.length)]}${name}`;
  res.status(200).send(msg);
}
