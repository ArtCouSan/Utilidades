$(document).ready(function () {

    $('#btnCalcularCep').click(function () {

        var cep = $('#cepEscolhido').val();
        var servico = $('#cepServico').val();

        // Alterar valores
        var nCdEmpresa = "";
        var sDsSenha = "";
        var nCdServico = servico;
        var sCepOrigem = "04696000";
        var sCepDestino = cep;
        var nVlPeso = "0.066";
        var nCdFormato = "1";
        var nVlComprimento = "16";
        var nVlAltura = "6";
        var nVlLargura = "11";
        var nVlDiametro = "0";
        var sCdMaoPropria = "n";
        var nVlValorDeclarado = "0";
        var sCdAvisoRecebimento = "n";

        var url = "http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx?" +
                "nCdEmpresa=" + nCdEmpresa + "&" +
                "sDsSenha=" + sDsSenha.toString() + "&" +
                "sCepOrigem=" + sCepOrigem.toString() + "&" +
                "sCepDestino=" + cep.toString() + "&" +
                "nVlPeso=" + nVlPeso.toString() + "&" +
                "nCdFormato=" + nCdFormato.toString() + "&" +
                "nVlComprimento=" + nVlComprimento.toString() + "&" +
                "nVlAltura=" + nVlAltura.toString() + "&" +
                "nVlLargura=" + nVlLargura.toString() + "&" +
                "sCdMaoPropria=" + sCdMaoPropria.toString() + "&" +
                "nVlValorDeclarado=" + nVlValorDeclarado.toString() + "&" +
                "sCdAvisoRecebimento=" + sCepOrigem.toString() + "&" +
                "nCdServico=" + nCdServico.toString() + "&" +
                "nVlDiametro=" + nVlDiametro.toString() + "&" +
                "StrRetorno=xml&" +
                "nIndicaCalculo=3";

        $.ajax({
            url: url,
            crossDomain: true,
            dataType: 'xml',
            success: function (xml) {
                $(xml).find('cServico').each(function () {
                    // Escolher retorno
                    var valor = $(this).find('Valor').text();
                    $("#totalCep").text("R$" + valor);
                });
            },
            type: 'GET'
        });


    });

});
