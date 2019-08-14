/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soma.transmisor.service.impl;

import com.soma.transmisor.dao.BitaAccionesUsuarioDao;
import com.soma.transmisor.model.BitaAccionesUsuario;
import com.soma.transmisor.service.BitaAccionesUsuarioService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * @fecha 27/10/2017
 * @hora 12:18:48 PM
 * @empresa SOMA
 * @version 1.0
 * @correo sant.mar.1997@gmail.com
 * @author Jasmin Santana
 */
@Service("bitaAccionesUsuarioService")
@Transactional
public class BitaAccionesUsuarioServiceImpl implements BitaAccionesUsuarioService{
    @Autowired
    BitaAccionesUsuarioDao bitaAccionesUsuarioDao;
    private boolean estadoMetodo = false;
    @Override
    public boolean save(BitaAccionesUsuario bitaAccionesUsuario) {
        bitaAccionesUsuarioDao.save(bitaAccionesUsuario);
        return estadoMetodo = true;
    }

    @Override
    public BitaAccionesUsuario buscaId(int bitacoraid) {
    return bitaAccionesUsuarioDao.buscaId(bitacoraid);
    }

    @Override
    public List<BitaAccionesUsuario> showBitacora() {
    return bitaAccionesUsuarioDao.showBitacora();
    }
    
}
