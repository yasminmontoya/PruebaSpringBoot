package com.prueba.grupodellano.controllers;

import com.prueba.grupodellano.dao.EmpresaDao;
import com.prueba.grupodellano.models.Empresa;
import com.prueba.grupodellano.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

public class EmpresaController {
    @Autowired
    private EmpresaDao empresaDao;

    @Autowired
    private JWTUtil jwtUtil;

    @RequestMapping(value = "api/empresas", method = RequestMethod.GET)
    public List<Empresa> getEmpresas(@RequestHeader(value="Authorization") String token) {
        return empresaDao.getEmpresas();
    }

}
