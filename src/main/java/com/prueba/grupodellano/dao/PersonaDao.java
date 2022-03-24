package com.prueba.grupodellano.dao;

import com.prueba.grupodellano.models.Persona;
import com.prueba.grupodellano.models.Usuario;

import java.util.List;

public interface PersonaDao {

    List<Persona> getPersonas();

    void eliminar(Long id);

    void crear(Persona persona);

    Persona getPersona(Long id);

    void editar(Persona persona);

}
