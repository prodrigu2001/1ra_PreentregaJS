function convertir() {
    var moneda = parseInt(document.getElementById("valor").value);
    var resultado = 0;
    var dolar = 296 * 1.75;
    var euro = 320 * 1.75;
    var real = 57.8 * 1.75;
    var libraesterlina = 361.84 * 1.75


        if (document.getElementById("dol").checked) {
            resultado = moneda / dolar;
            alert("Valor a Transferir en USD: " + resultado.toFixed(2))
            alert("incluye impuesto PAIS 30% y Percepción de Ganancias 45%")
        }
        else if (document.getElementById("eur").checked){
            resultado = moneda / euro;
            alert("Valor a Transferir en EUR: " + resultado.toFixed(2))
            alert("incluye impuesto PAIS 30% y Percepción de Ganancias 45%")          
            }
        else if (document.getElementById("rea").checked){
            resultado = moneda / real;
            alert("Valor a Transferir en RS$: " + resultado.toFixed(2))
            alert("incluye impuesto PAIS 30% y Percepción de Ganancias 45%")       
            }
        else if (document.getElementById("lbr").checked){
            resultado = moneda / libraesterlina;
            alert("Valor a Transferir en LBR: " + resultado.toFixed(2))
            alert("incluye impuesto PAIS 30% y Percepción de Ganancias 45%")      
            }
        else{
            alert("Debe Completar Todos los Campos")
            } 
        }
    
    



