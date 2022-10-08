/* Lê o XML */  
xmlhttp = new XMLHttpRequest();//Instanciação do objeto 
xmlhttp.open("GET", "xml/caca_palavras.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;//Informa que o tipo de arquivo é XML
let tech = xmlDoc.getElementsByTagName("tec");//let - variavel para conjunto de dados
var cont = tech.length;//Armazena a quantidade de indices dentro do vetor animes

matriz = new Array;
x = 0;
    
//criando a matriz 12x12
matriz=[["N" ,"L" ,"A" ,"I" ,"I" ,"L" ,"C" ,"T" ,"E" ,"L" ,"D" ,"B" ],
["O" , "O" , "R" ,"L", "T" ,"G" ,"I", "T" ,"H" ,"U" ,"B" ,"E" ],
["S" , "O" , "T" ,"O", "C" ,"H" ,"R", "O" ,"M" ,"E" ,"R" ,"G" ],
["T" , "E" , "C" ,"L", "A" ,"D" ,"O", "H" ,"O" ,"W" ,"N" ,"I" ],
["G" , "A" , "T" ,"S", "T" ,"I" ,"D", "F" ,"N" ,"E" ,"S" ,"M" ],
["A" , "K" , "E" ,"I", "O" ,"F" ,"S", "I" ,"I" ,"B" ,"I" ,"P" ],
["K" , "E" , "V" ,"I", "S" ,"I" ,"O", "G" ,"T" ,"N" ,"S" ,"T" ],
["E" , "J" , "A" ,"V", "A" ,"E" ,"U", "M" ,"O" ,"U" ,"S" ,"E" ],
["O" , "E" , "U" ,"I", "P" ,"L" ,"E", "A" ,"R" ,"G" ,"T" ,"O" ],
["N" , "O" , "W" ,"T", "H" ,"K" ,"O", "T" ,"S" ,"A" ,"B" ,"F" ],
["E" , "E" , "Y" ,"H", "A" ,"M" ,"K", "C" ,"I" ,"R" ,"N" ,"S" ],
["E" , "T" , "E" ,"T", "O" ,"T" ,"A", "T" ,"G" ,"G" ,"N" ,"L" ]];

//lendo a matriz
document.write("<table border='3'>");
for(linha=0; linha<12; linha++){
    document.write("<tr>");
    for(coluna=0; coluna<12; coluna++){
        x++;
        document.write("<td id='" + x + "' align='center' >" + matriz[linha][coluna] + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");


colorirPalavra();
     
   

function colorirPalavra(){
    for(i=0; i<=cont-1; i++){
        inicial = parseInt(tech[i].getElementsByTagName('inicial')[0].childNodes[0].nodeValue);
        final = parseInt(tech[i].getElementsByTagName('final')[0].childNodes[0].nodeValue);
        incremento = parseInt(tech[i].getElementsByTagName('incremento')[0].childNodes[0].nodeValue);
        cor = tech[i].getElementsByTagName('cor')[0].childNodes[0].nodeValue;

        for(z=inicial; z<=final; z=z+incremento){
            document.getElementById(z).style.background = cor;
        }
    }
}