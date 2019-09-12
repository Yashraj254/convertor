const kg = document.querySelector('#in_kg');
const g = document.querySelector('#in_g');
const mg = document.querySelector('#in_mg');
const p = document.querySelector('#in_p');
const t = document.querySelector('#in_t');

kg.addEventListener("input",function() {
   let kgtemp = kg.value;
   let gtemp = kgtemp * 1000;
   let mgtemp = kgtemp * 1000000;
   let ptemp = kgtemp * 2.205;
   let ttemp = kgtemp * 0.001;
   g.value = gtemp;
   p.value = ptemp;
   mg.value = mgtemp;
   t.value = ttemp;
});

g.addEventListener("input",function() {
    let gtemp = g.value;
    let kgtemp = gtemp / 1000;
    let mgtemp = gtemp * 1000;
    let ptemp = gtemp * 0.0022;
    let ttemp = gtemp / 1000000;
    kg.value = kgtemp;
    p.value = ptemp;
    mg.value = mgtemp;
    t.value = ttemp;
 });
 
mg.addEventListener("input",function() {
    let mgtemp = mg.value;
    let gtemp = mgtemp / 1000;
    let kgtemp = mgtemp / 1000000;
    let ptemp = mgtemp / 453592.37;
    let ttemp = mgtemp / 1000000000;
    g.value = gtemp;
    p.value = ptemp;
    kg.value = kgtemp;
    t.value = ttemp;
 });
 
t.addEventListener("input",function() {
    let ttemp = t.value;
    let gtemp = ttemp * 1000000;
    let mgtemp = ttemp * 1000000000;
    let ptemp = ttemp * 2204.62;
    let kgtemp = ttemp * 1000;
    g.value = gtemp;
    p.value = ptemp;
    mg.value = mgtemp;
    kg.value = kgtemp;
 });
 
p.addEventListener("input",function() {
    let ptemp = p.value;
    let gtemp = ptemp * 453.59237;
    let mgtemp = ptemp * 453592.37;
    let kgtemp = ptemp * 0.45359237;
    let ttemp = ptemp * 0.00045359237;
    g.value = gtemp;
    kg.value = kgtemp;
    mg.value = mgtemp;
    t.value = ttemp;
 });