package com.prueba.grupodellano.dao;

import com.prueba.grupodellano.models.Persona;
import com.prueba.grupodellano.models.Usuario;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
@Transactional
public class PersonaDaoImp implements PersonaDao{

    @PersistenceContext
    EntityManager entityManager;

    @Override
    @Transactional
    public List<Persona> getPersonas() {
        String query = "FROM Persona";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public void eliminar(Long id) {
        Persona persona = entityManager.find(Persona.class, id);
        entityManager.remove(persona);
    }

    @Override
    public void crear(Persona persona) {
        entityManager.merge(persona);
    }

    @Override
    public Persona getPersona(Long id) {
        Persona persona = entityManager.find(Persona.class, id);
        return  persona;
    }

    @Override
    public void editar(Persona persona) {
        entityManager.merge(persona);
    }

}
