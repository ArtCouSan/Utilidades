function ServicesCorreios() {

    var nCdEmpresa = "nCdEmpresa=&";
    var sDsSenha = "sDsSenha=&";
    var nCdServiço;
    var sCepOrigem;
    var sCepDestino;
    var VIPeso;
    var nCdFormato = "nCdFormato=1&";
    var nVlComprimento;
    var nVlAltura;
    var nVlLargura;
    var nVlDiametro;
    var sCdMaoPropria;
    var nVlValorDeclarado = "nVlValorDeclarado=0&";
    var sCdAvisoRecebimento;
    var StrRetorno = "StrRetorno=<URL>&";
    var nIndicaCalculo = "nIndicaCalculo=3";
    var url = "http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx?";

    function setnCdServiço(_nCdServiço) {
        var x = "nCdServiço=";
        var y = "&";
        x.concat(_nCdServiço);
        x.concat(y);
        nCdServiço = x;
    }

    function setsCepOrigem(_sCepOrigem) {
        var x = "sCepOrigem=";
        var y = "&";
        x.concat(_sCepOrigem);
        x.concat(y);
        sCepOrigem = x;
    }

    function setsCepDestino(_sCepDestino) {
        var x = "sCepDestino=";
        var y = "&";
        x.concat(_sCepDestino);
        x.concat(y);
        sCepDestino = x;
    }

    function setVIPeso(_VIPeso) {
        var x = "VIPeso=";
        var y = "&";
        x.concat(_VIPeso);
        x.concat(y);
        VIPeso = x;
    }

    function setnVlComprimento(_nVlComprimento) {
        var x = "nVlComprimento=";
        var y = "&";
        x.concat(_nVlComprimento);
        x.concat(y);
        nVlComprimento = x;
    }

    function setnVlAltura(_nVlAltura) {
        var x = "nVlAltura=";
        var y = "&";
        x.concat(_nVlAltura);
        x.concat(y);
        nVlAltura = x;
    }

    function setnVlLargura(_nVlLargura) {
        var x = "nVlLargura=";
        var y = "&";
        x.concat(_nVlLargura);
        x.concat(y);
        nVlLargura = x;
    }

    function setnVlDiametro(_nVlDiametro) {
        var x = "nVlDiametro=";
        var y = "&";
        x.concat(_nVlDiametro);
        x.concat(y);
        nVlDiametro = x;
    }

    function setsCdMaoPropria(_sCdMaoPropria) {
        var x = "sCdMaoPropria=";
        var y = "&";
        x.concat(_sCdMaoPropria);
        x.concat(y);
        sCdMaoPropria = x;
    }

    function setsCdAvisoRecebimento(_sCdAvisoRecebimento) {
        var x = "sCdAvisoRecebimento=";
        var y = "&";
        x.concat(_sCdAvisoRecebimento);
        x.concat(y);
        sCdAvisoRecebimento = x;
    }

    function getUrl() {
        this.url = url.concat(nCdEmpresa);
        this.url = url.concat(sDsSenha);
        this.url = url.concat(nCdServiço);
        this.url = url.concat(sCepOrigem);
        this.url = url.concat(sCepDestino);
        this.url = url.concat(VIPeso);
        this.url = url.concat(nCdFormato);
        this.url = url.concat(nVlComprimento);
        this.url = url.concat(nVlAltura);
        this.url = url.concat(nVlLargura);
        this.url = url.concat(nVlDiametro);
        this.url = url.concat(sCdMaoPropria);
        this.url = url.concat(nVlValorDeclarado);
        this.url = url.concat(sCdAvisoRecebimento);
        this.url = url.concat(StrRetorno);
        this.url = url.concat(nIndicaCalculo);
        return url;
    }

}

$.ajax({
    method: "GET",
    contentType: "application/json; charset=utf-8",
    url: "http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx/CalcPrecoPrazo",
})
        .done(function (msg) {
            alert("Data Saved: " + msg);
        });
