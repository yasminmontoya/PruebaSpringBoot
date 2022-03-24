package com.prueba.grupodellano.models;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "usuario")
@ToString @EqualsAndHashCode
public class Usuario {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Getter @Setter @Column(name = "id")
    private Long id;

    @Getter @Setter @Column(name = "email")
    private String email;

    @Getter @Setter @Column(name = "password")
    private String password;

    @Getter @Setter @Column(name = "fecha_creacion")
    private String fechaCreacion;

    @Getter @Setter @Column(name = "fecha_vigencia")
    private String fechaVigencia;

    @Getter @Setter @Column(name = "activo")
    private boolean activo;

}
