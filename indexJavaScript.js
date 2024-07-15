  //-------------------------------------------------------------------------------------------------------------
            //VARIÁVEIS
            //-------------------------------------------------------------------------------------------------------------
            var js_sb; //salário bruto
            var js_vht;//valor de horas trabalhadas
            var js_qht;//quantidade de horas trabalhadas
            var js_inss;//percentual de desconto INSS
            var js_tdes;//total de desconto
            var js_sl;//salário líquido
            //-------------------------------------------------------------------------------------------------------------
            //CAIXINHAS PROMPT
            //-------------------------------------------------------------------------------------------------------------
            js_qht = parseInt(window.prompt('Informe a quantidade de horas trabalhadas: (135 a 180)'));
            js_vht = parseInt(window.prompt('Informe o valor da hora trabalhada: (25 a 50)'));
            js_inss = parseFloat(window.prompt('Informe o percentual de desconto INSS: (5 a 15)'));
            //-------------------------------------------------------------------------------------------------------------
            //MOTORES
            //-------------------------------------------------------------------------------------------------------------
            js_sb = js_vht * js_qht
            js_tdes = (js_inss / 100) * js_sb
            js_sl = js_sb - js_tdes
            //-------------------------------------------------------------------------------------------------------------
            //QUANTIDADE DE HORAS / DEMONSTRATIVO
            //-------------------------------------------------------------------------------------------------------------
            document.write('<p><b>DEMONSTRATIVO PARA CÁLCULO DO SALÁRIO LÍQUIDO')

            document.write('<p>Quantidade de horas trabalhadas (135 a 180) => ')
            if (js_qht >= 135 && js_qht <= 180) {
                document.write(js_qht + 'h')
            }
            else {
                document.write('O valor informado não está correto!!!')
            }

            //-------------------------------------------------------------------------------------------------------------
            //VALORES
            //-------------------------------------------------------------------------------------------------------------
            document.write('<p>Valor da hora trabalhada (25 a 50) => ')
            if (js_qht >= 25 && js_vht <= 50) {
                document.write('R$' + js_vht)
            }
            else {
                document.write('O valor informado não está correto!!!')
            }
            //-------------------------------------------------------------------------------------------------------------
            //PERCENTUAIS
            //-------------------------------------------------------------------------------------------------------------
            document.write('<p>Percentual de desconto INSS (5 a 15) => ')
            if (js_inss >= 5 && js_inss <= 15) {
                document.write(js_inss + '%')
            }
            else {
                document.write('O valor informado não está correto!!!')
            }
            //-------------------------------------------------------------------------------------------------------------
            //SALÁRIO BRUTO / SALÁRIO LÍQUIDO -- MOTORES
            //-------------------------------------------------------------------------------------------------------------
            document.write('<p><b>===============================================')
            document.write('<p><b>Salário BRUTO = R$' + js_sb)
            document.write('<p><b>Total de descontos = R$' + js_tdes)
            document.write('<p><b>Salário líquido = R$' + js_sl)
            if (js_sl > 10500) {
                document.write('<P><B><font color="yellow">Salário Elevado!</font></B> maior que R$10.500')
            }
            else {
                if (js_sl > 6000) {
                    document.write('<p><b><font color="yellow">Salário Satisfatório!</font></B> maior que R$6.000')
                }
                else {
                    if (js_sl >= 3000) {
                        document.write('<p><b><font color="yellow">Salário Moderado!</font></B> maior que R$3.000')
                    }
                    else {
                        document.write('<p><b><font color="yellow">Salário Insatisfatório!</font></B> menor ou igual a R$3.000')

                    }
                }
            }
            //-------------------------------------------------------------------------------------------------------------
            //FIM DO CÓDIGO
            //-------------------------------------------------------------------------------------------------------------