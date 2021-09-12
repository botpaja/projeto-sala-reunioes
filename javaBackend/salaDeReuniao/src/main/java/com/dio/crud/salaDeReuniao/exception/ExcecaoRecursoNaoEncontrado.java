package com.dio.crud.salaDeReuniao.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ExcecaoRecursoNaoEncontrado extends Exception{

    private static final Long serialVersionUID = 1L;

    public ExcecaoRecursoNaoEncontrado(String mensagem) {
        super(mensagem);
    }
}
