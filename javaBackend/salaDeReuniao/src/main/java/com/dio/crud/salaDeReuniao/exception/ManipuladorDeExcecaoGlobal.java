package com.dio.crud.salaDeReuniao.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import java.util.Date;

@ControllerAdvice
public class ManipuladorDeExcecaoGlobal {

    public ResponseEntity<?> excecaoRecursoNaoEncontrado(ExcecaoRecursoNaoEncontrado ex, WebRequest request) {
        DetalhesDoErro detalhesDoErro = new DetalhesDoErro(
                new Date(), ex.getMessage(), request.getDescription(false));
        return new ResponseEntity<>(detalhesDoErro, HttpStatus.NOT_FOUND);
    }

    public ResponseEntity<?> manipuladorDeExcecaoGlobal(Exception ex, WebRequest request) {
        DetalhesDoErro detalhesDoErro = new DetalhesDoErro(
                new Date(), ex.getMessage(), request.getDescription(false));
        return new ResponseEntity<>(detalhesDoErro, HttpStatus.INTERNAL_SERVER_ERROR);
    }

}
