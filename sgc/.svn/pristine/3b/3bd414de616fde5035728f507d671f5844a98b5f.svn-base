/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.soma.transmisor.controller;

import com.soma.transmisor.model.Accion;
import com.soma.transmisor.model.BitaAccionesUsuario;
import com.soma.transmisor.model.Delito;
import com.soma.transmisor.model.Giro;
import com.soma.transmisor.model.Usuario;
import com.soma.transmisor.service.AccionService;
import com.soma.transmisor.service.BitaAccionesUsuarioService;
import com.soma.transmisor.service.DelitoService;
import com.soma.transmisor.service.GiroService;
import com.soma.transmisor.service.UsuarioService;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationTrustResolver;
import org.springframework.security.authentication.AuthenticationTrustResolverImpl;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @fecha 31/10/2017
 * @hora 12:05:12 PM
 * @empresa SOMA
 * @version 1.0
 * @correo sant.mar.1997@gmail.com
 * @author Jasmin Santana
 */
@Controller
@RequestMapping("/")
public class ControllerCatalogo {

    @Autowired
    UsuarioService usuarioService;
    @Autowired
    DelitoService delitoService;
    @Autowired
    GiroService giroService;
    @Autowired
    AccionService accionService;

    @Autowired
    BitaAccionesUsuarioService bitaAccionesUsuarioService;

    //instancea de La clase Bitacora 
    // Bitacora bita = new Bitacora();
    @RequestMapping(value = {"/delito"}, method = RequestMethod.GET)
    public String delito(ModelMap model) {
        if (!estaUsuarioAnonimo()) {
            //trae los datos de la tabla delito
            List<Delito> lDelito = delitoService.showDelito();
            // enviar los datos JSP
            model.addAttribute("lDelito", lDelito);

            return "delito";
        }
        return "login";
    }
    //metodo para administrar catalogos

    @RequestMapping(value = "/delito/agregarDelito", method = RequestMethod.POST)
    public @ResponseBody
    String agregarDelito(@RequestParam(value = "datos[]") String datos[]) {
        if (!estaUsuarioAnonimo()) {
            for (String dato : datos) {
                if (dato.equals("")) {
                    // si hay datos vacios
                    return "errorDato";
                }
            }
            // creacion de objeto
            Delito delito = new Delito();
            delito.setNombre(datos[0]);
//guarda en arreglo datos
            if (delitoService.save(delito)) {
                //uso del metodo bitacoraAcciones de la clase Bitacora
                Usuario usuarioid = usuarioService.busquedaNinckname(usuarioEnSesion());
                usuarioid.getUsuarioid();
                bitacoraAcciones("agregarDelito", usuarioid);
                return "exito";

            } else {
                return "error";
            }
        }
        return "errorAcceso";
    }

    //Metodo para actualizar Delito
    @RequestMapping(value = "/delito/actualizarDelito", method = RequestMethod.POST)
    public @ResponseBody
    String actualizarDelito(@RequestParam(value = "datos[]") String datos[]) {
        if (!estaUsuarioAnonimo()) {
            for (String dato : datos) {
                if (dato.equals("")) {
                    // si hay datos vacios
                    return "errorDato";
                }
            }//termina de recorrer el arreglo

            List<Delito> lDelito = delitoService.showDelito();
            if (!lDelito.isEmpty()) {
                for (Delito delito : lDelito) {
                    //obtiene el nombre del delito
                    if (delito.getDelitoid() == Integer.parseInt(datos[0])) {
                        delito.setNombre(datos[1]);
                        if (delitoService.update(delito)) {
                            Usuario usuarioid = usuarioService.busquedaNinckname(usuarioEnSesion());
                            usuarioid.getUsuarioid();
                            bitacoraAcciones("actualizarDelito", usuarioid);
                            return "exito";
                        } else {
                            return "error";
                        }
                    }
                }//end for
            }//si no esta vacia la lista de delitos
        }//el usuario es anonimo

        return "errorAcceso";

    }

    //Metodo para eliminar un  Delito
    @RequestMapping(value = "/delito/eliminarDelito", method = RequestMethod.POST)
    public @ResponseBody
    String eliminarDelito(@RequestParam(value = "datos[]") String datos[]) {
        if (!estaUsuarioAnonimo()) {
            for (String dato : datos) {
                if (dato.equals("")) {
                    // si hay datos vacios
                    return "errorDato";
                }
            }//termina de recorrer el arreglo

            List<Delito> lDelito = delitoService.showDelito();
            if (!lDelito.isEmpty()) {
                for (Delito delito : lDelito) {
                    //obtiene el id del delitoa a eliminar
                    int delitoid = Integer.parseInt(datos[0]);
                    if (delito.getDelitoid() == delitoid) {
                        delito.setDelitoid(Integer.parseInt(datos[0]));
                        if (delitoService.delete(delitoid)) {
                            Usuario usuarioid = usuarioService.busquedaNinckname(usuarioEnSesion());
                            usuarioid.getUsuarioid();
                            bitacoraAcciones("eliminarDelito", usuarioid);
                            return "exito";
                        } else {
                            return "error";
                        }
                    }
                }//end for
            }//si no esta vacia la lista de delitos
        }//el usuario es anonimo

        return "errorAcceso";

    }

    //metodo para cargar los datos a la tabla giro 
    @RequestMapping(value = {"/giro"}, method = RequestMethod.GET)
    public String giro(ModelMap model) {
        if (!estaUsuarioAnonimo()) {
            //trae los datos de la tabla giro
            List<Giro> lGiro = giroService.showGiro();
            // enviar los datos JSP
            model.addAttribute("lGiro", lGiro);
            return "giro";
        }
        return "login";
    }

    @RequestMapping(value = "/giro/agregarGiro", method = RequestMethod.POST)
    public @ResponseBody
    String agregarGiro(@RequestParam(value = "datos[]") String datos[]) {
        if (!estaUsuarioAnonimo()) {
            for (String dato : datos) {
                if (dato.equals("")) {
                    // si hay datos vacios
                    return "errorDato";
                }
            }
            // creacion de objeto
            Giro giro = new Giro();
            giro.setNombre(datos[0]);
//guarda en arreglo datos
            if (giroService.save(giro)) {
                //bitacoraAcciones("agregarDelito");
                return "exito";

            } else {
                return "error";
            }
        }
        return "errorAcceso";
    }
    //Metodo para actualizar Giro

    @RequestMapping(value = "/giro/actualizarGiro", method = RequestMethod.POST)
    public @ResponseBody
    String actualizarGiro(@RequestParam(value = "datos[]") String datos[]) {
        if (!estaUsuarioAnonimo()) {
            for (String dato : datos) {
                if (dato.equals("")) {
                    // si hay datos vacios
                    return "errorDato";
                }
            }//termina de recorrer el arreglo

            List<Giro> lGiro = giroService.showGiro();
            if (!lGiro.isEmpty()) {
                for (Giro giro : lGiro) {
                    //obtiene el nombre del giro
                    if (giro.getGiroid() == Integer.parseInt(datos[0])) {
                        giro.setNombre(datos[1]);
                        if (giroService.update(giro)) {
                            //bitacoraAcciones("actualizarDelito");
                            return "exito";
                        } else {
                            return "error";
                        }
                    }
                }//end for
            }//si no esta vacia la lista de delitos
        }//el usuario es anonimo
        return "errorAcceso";
    }
    //Metodo para eliminar un  Giro

    @RequestMapping(value = "/giro/eliminarGiro", method = RequestMethod.POST)
    public @ResponseBody
    String eliminarGiro(@RequestParam(value = "datos[]") String datos[]) {
        if (!estaUsuarioAnonimo()) {
            for (String dato : datos) {
                if (dato.equals("")) {
                    // si hay datos vacios
                    return "errorDato";
                }
            }//termina de recorrer el arreglo

            List<Giro> lGiro = giroService.showGiro();
            if (!lGiro.isEmpty()) {
                for (Giro giro : lGiro) {
                    //obtiene el id del giro a eliminar
                    int giroid = Integer.parseInt(datos[0]);
                    if (giro.getGiroid() == giroid) {
                        giro.setGiroid(Integer.parseInt(datos[0]));
                        if (giroService.delete(giroid)) {
                            //bitacoraAcciones("eliminarDelito");
                            return "exito";
                        } else {
                            return "error";
                        }
                    }
                }//end for
            }//si no esta vacia la lista de giro
        }//el usuario es anonimo

        return "errorAcceso";

    }

    /**
     * Este metodo verificara que un usuario este autenticado correctamente
     */
    private boolean estaUsuarioAnonimo() {
        final Authentication autenticacion = SecurityContextHolder.getContext().getAuthentication();

        AuthenticationTrustResolver authenticationTrustResolver = new AuthenticationTrustResolverImpl();
        return authenticationTrustResolver.isAnonymous(autenticacion);
    }

    /**
     * Este metodo traera de la sesion iniciada.
     *
     * @return
     */
    public String usuarioEnSesion() {

        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        String nicknamePrincipal = null;

        if (principal instanceof UserDetails) {
            //Es igual al usuario que esta en sesion
            return nicknamePrincipal = ((UserDetails) principal).getUsername();
        } else {
            //Es igual a usuario anonimo
            return nicknamePrincipal = principal.toString();
        }
    }

    /*metodo para insertar a Bitacora Usuario Acciones */
    public String bitacoraAcciones(String metodo, Usuario usuarioid) {
        if (!estaUsuarioAnonimo()) {
            BitaAccionesUsuario bitaAcc = new BitaAccionesUsuario();
            Date fechaHora = new Date();
            //Trae el usuario que ha inciado sesion
            //Usuario usuarioid = usuarioService.busquedaNinckname(usuarioEnSesion());
            //del usuario se trae el id
            //  usuarioid.getUsuarioid();

            int accionid = 0;

            //dependiendo el metodo ejecutado se pasa el id de la accion realizada
            if (metodo == "login") {
                accionid = 1;
            } else if (metodo == "agregarDelito") {
                accionid = 2;
            } else if (metodo == "actualizarDelito") {
                accionid = 3;
            } else if (metodo == "eliminarDelito") {
                accionid = 4;
            }
            //se hace el insert a la tabla bitacoraAccionesUsuario
            Accion accion = accionService.buscaId(accionid);
            accion.getAccionid();
            bitaAcc.setUsuario(usuarioid);
            bitaAcc.setFechaHora(fechaHora);
            bitaAcc.setAccion(accion);
            if (bitaAccionesUsuarioService.save(bitaAcc)) {
                return "exito";
            } else {
                return "error";
            }
        }
        return "login";
    }
}
