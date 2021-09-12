package com.dio.crud.salaDeReuniao.repository;

import com.dio.crud.salaDeReuniao.model.Sala;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SalaRepository extends JpaRepository<Sala, Long> {
}
