package com.dio.crud.salaDeReuniao.model;

import jakarta.validation.constraints.NotEmpty;
import lombok.*;

import javax.persistence.*;

@Data
@Entity
@Builder
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "salaDeReunioes")
public class Sala {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @NotEmpty
    @Column(name = "nome", nullable = false)
    private String nome;
    @NotEmpty
    @Column(name = "data", nullable = false)
    private String data;
    @NotEmpty
    @Column(name = "horaInicio", nullable = false)
    private String horaInicio;
    @NotEmpty
    @Column(name = "horaFim", nullable = false)
    private String horaFim;

    @Override
    public String toString(){
        return "Sala [id="+id+" nome"+nome+" data"+data+" horaInicio"+horaInicio+" horaFim"+horaFim+"]";
    }

}
