package com.prueba.grupodellano.controllers;

import com.prueba.grupodellano.dao.PersonaDao;
import com.prueba.grupodellano.models.Persona;
import com.prueba.grupodellano.models.Usuario;
import com.prueba.grupodellano.utils.JWTUtil;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class PersonaController {

    @Autowired
    private PersonaDao personaDao;

    @Autowired
    private JWTUtil jwtUtil;

    @RequestMapping(value = "api/personas", method = RequestMethod.GET)
    public List<Persona> getPersonas(@RequestHeader(value="Authorization") String token) {
        return personaDao.getPersonas();
    }


    @RequestMapping(value = "api/personas/{id}", method = RequestMethod.DELETE)
    public void eliminar(@RequestHeader(value="Authorization") String token,
                         @PathVariable Long id) {
        personaDao.eliminar(id);
    }

    @RequestMapping(value = "api/personas", method = RequestMethod.POST)
    public void crearPersona(@RequestBody Persona persona) {
        personaDao.crear(persona);
    }

    @RequestMapping(value = "api/personas/{id}", method = RequestMethod.GET)
    public Persona getPersona(@RequestHeader(value="Authorization") String token,
                                    @PathVariable Long id) {
        return personaDao.getPersona(id);
    }

    @RequestMapping(value = "api/personas/{id}", method = RequestMethod.PUT)
    public void editarPersona(@RequestBody Persona persona) {
        personaDao.editar(persona);
    }

}
