package com.prueba.grupodellano.dao;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import com.prueba.grupodellano.models.Empresa;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Repository
@Transactional
public class EmpresaDaoImp implements EmpresaDao {

    @PersistenceContext
    EntityManager entityManager;

    @Override
    @Transactional
    public List<Empresa> getEmpresas() {
        String query = "FROM Empresa";
        return entityManager.createQuery(query).getResultList();
    }

}
