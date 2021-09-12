package com.dio.crud.salaDeReuniao.exception;

import java.util.Date;

public class DetalhesDoErro {

    private final Date timestamp;
    private final String mensagem;
    private final String detalhes;

    public DetalhesDoErro(Date timestamp, String mensagem, String detalhes) {
        super();
        this.timestamp = timestamp;
        this.mensagem = mensagem;
        this.detalhes = detalhes;
    }

    public Date getTimestamp() {
        return timestamp;
    }

    public String getMensagem() {
        return mensagem;
    }

    public String getDetalhes() {
        return detalhes;
    }


}
