/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soma.transmisor.dao.impl;

import com.soma.transmisor.dao.BitaAccionesUsuarioDao;
import com.soma.transmisor.dao.HibernateDao;
import com.soma.transmisor.model.BitaAccionesUsuario;
import java.util.List;
import org.hibernate.Criteria;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 * @fecha 27/10/2017
 * @hora 12:06:18 PM
 * @empresa SOMA
 * @version 1.0
 * @correo sant.mar.1997@gmail.com
 * @author Jasmin Santana
 */
@Repository("bitaAccionesUsuarioDao")
public class BitaAccionesUsuarioDaoImpl  extends HibernateDao<Integer, BitaAccionesUsuario> implements BitaAccionesUsuarioDao{

    /*private final SessionFactory sessionFactory;
    @Autowired
    public BitaAccionesUsuarioDaoImpl(SessionFactory sessionFactory) {
       this.sessionFactory = sessionFactory;
    }*/
    
    @Override
    public void save(BitaAccionesUsuario bitaAccionesUsuario) {
        guardar(bitaAccionesUsuario);
   System.out.print(BitaAccionesUsuarioDaoImpl.class+"Se ha guardado correctamente la en bitacora"+ bitaAccionesUsuario.toString());
    }

    @Override
    public BitaAccionesUsuario buscaId(int bitacoraid) {
  System.out.println(BitaAccionesUsuarioDaoImpl.class + "\nBuscando acciones por  bitacoraid: " + bitacoraid);
        BitaAccionesUsuario bitaAccionesUsuario= getPorId(bitacoraid);
        
        return bitaAccionesUsuario; }

    @Override
    public List<BitaAccionesUsuario> showBitacora() {
     //criterias consultas a la base de datso
        Criteria criteria = creaCriteria();
        //indicar que no traiga datos repetidos
        criteria.setResultTransformer(Criteria.DISTINCT_ROOT_ENTITY);
        //lista los bitacora de acciones sin repetir algun dato
        List<BitaAccionesUsuario> lBitaAcc = criteria.list();
        return lBitaAcc;}
    
}
