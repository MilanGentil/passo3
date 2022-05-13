var n = prompt("Coloca um numero"); //definição da variável "n" que vai guardar o número colocado pela pessoa
while (n != null) //"n" não é igual a 0, por isso enquanto é igual a 1 ou outro número 
{
   i = 0 // i é igual a zero;
   while (i <= n) //enquanto i<n 
   {
      document.write("<br>" + i + " " + i * i); //faz o quadrado do número
      i = i + 1; // i+1
   }
   n = prompt("Coloca um numero"); //coloca o número
}
