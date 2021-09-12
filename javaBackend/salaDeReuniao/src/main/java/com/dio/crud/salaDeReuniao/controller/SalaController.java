package com.dio.crud.salaDeReuniao.controller;

import com.dio.crud.salaDeReuniao.exception.ExcecaoRecursoNaoEncontrado;
import com.dio.crud.salaDeReuniao.model.Sala;
import com.dio.crud.salaDeReuniao.repository.SalaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/v1/")
@CrossOrigin(origins = "http://localhost:4200")
public class SalaController {

    @Autowired
    private SalaRepository salaRepository;

    @GetMapping("sala")
    public List<Sala> retornaTodasSalas() {
        return salaRepository.findAll();
    }

    @GetMapping("sala/{id}")
    public ResponseEntity<Sala> retornaSalaById(@PathVariable(value = "id") Long salaId)
        throws ExcecaoRecursoNaoEncontrado {
        Sala sala = salaRepository.findById(salaId).orElseThrow
                (() -> new ExcecaoRecursoNaoEncontrado("Sala com o id "+salaId+" não encontrada."));
        return ResponseEntity.ok().body(sala);
    }

    @PostMapping("sala")
    public Sala criaSala(@Valid @RequestBody Sala sala) {
        return salaRepository.save(sala);
    }

    @PutMapping("sala/{id}")
    public ResponseEntity<Sala> atualizaSala
            (@PathVariable(value = "id") Long salaId, @Valid @RequestBody Sala detalheDaSala)
        throws ExcecaoRecursoNaoEncontrado {
        Sala sala = salaRepository.findById(salaId).orElseThrow
                (() -> new ExcecaoRecursoNaoEncontrado("Sala com o id "+salaId+" não encontrada."));
        sala.setNome(detalheDaSala.getNome());
        sala.setData(detalheDaSala.getData());
        sala.setHoraInicio(detalheDaSala.getHoraInicio());
        sala.setHoraFim(detalheDaSala.getHoraFim());
        final Sala atualizaSala = salaRepository.save(sala);
        return ResponseEntity.ok(atualizaSala);
    }

    @DeleteMapping("sala/{id}")
    public Map<String, Boolean> removeSala(@PathVariable(value = "id") Long salaId)
        throws ExcecaoRecursoNaoEncontrado {
        Sala sala = salaRepository.findById(salaId).orElseThrow
                (() -> new ExcecaoRecursoNaoEncontrado("Sala com o id "+salaId+" não encontrada."));
        salaRepository.delete(sala);
        Map<String, Boolean> resposta = new HashMap<>();
        resposta.put("Sala removida",Boolean.TRUE);
        return resposta;
    }

}
