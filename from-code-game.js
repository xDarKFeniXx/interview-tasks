f=_=>readline().split` `.map(n=>+n)
a=f(b=f())
console.log(a.length^b.length?'Invalid':a.map((n,i)=>n+b[i]).join` `)
