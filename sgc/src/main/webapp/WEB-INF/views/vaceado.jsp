<%-- 
    Document   : poliza
    Created on : 23/07/2018, 05:42:54 PM
    Author     : HASANI
--%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="index.jsp" %>
<script src="<c:url value='/assets/js/pages/ordenVaceado.js'/>" type="text/javascript"></script>
<br />
<br />
<br />
<div class="container">   
    <div class="panel-group">
        <div class="panel panel-primary">
            <div class="panel-heading">Listado de Orden Vaceado</div>
            <div id="contenidoPantalla" class="panel-body">        
                <div class="row">
                    <div class="form-group">
                        <div class="btn btn-group">
                            <button id="agregarV" class="btn btn-info" onclick="btnOrdenVaceado();"> 
                                <span class="glyphicon glyphicon-plus"></span>Agregar Orden</button>
                        </div>
                        <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
                        <input type="text" class="form-control pull-right" style="width:20%" 
                               id="search" onkeyup="busquedaTbl('tableOrdenVaceado');" placeholder="Busqueda">
                    </div>
                    <!-- Listado de orden vaceado -->
                    <div  class="col-md-12">
                        <div class="table-responsive">
                            <table id="tableOrdenVaceado" class="table table-striped">
                                <thead>
                                    <tr>                            
                                        <th>No</th>
                                        <th>Serie</th>
                                        <th>Molde</th>
                                        <th>No. De Piezas</th>
                                        <th>Fecha</th>
                                        <th>Descripción</th>
                                    </tr>
                                </thead>
                                <tbody id="bodytabla">
                                    <c:forEach items="${lVaceado}" var="vaceado" varStatus="count"> 

                                        <tr> 
                                            <td id="idOrdenVa" style="display:none">${vaceado.ordenid}</td>
                                            <td id="noOrdenVaceado">${count.count}</td>
                                            <td>${vaceado.codigoBarras}</td>
                                            <td>${vaceado.idmolde.modelo}</td>
                                            <td>${vaceado.cantidad}</td>
                                            <td>${vaceado.descripcion}</td>
                                        </tr>
                                    </c:forEach>
                                </tbody>
                            </table>
                        </div>           
                    </div>
                </div><!-- row-->
            </div><!--class body -->
        </div><!-- panel-primary-->
    </div>  <!-- panel-group-->  
</div><!--class container -->


<div class="container">
    <!-- Modal -->
    <div class="modal fade" id="myModal" role="dialog" data-backdrop="static" 
         data-keyboard="false">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Fomulario Para Agregar Una Orden</h3>
                </div>
                <div class="modal-body">
                    <!--Formilario para agregar ordenes -->
                    <form class="form-horizontal"  modelAttribute="vaceado" id="frmVaceado">
                        <div class="form-group">
                            <label  class="control-label col-sm-2">Empleado:<b style="color: red" title="Campo Requerido">*</b></label>
                            <div class="col-sm-4">
                                <select id="empleado" class="form-control">
                                    <option value="0">Seleccione...</option>
                                    <option value="1">Empleado 1</option>
                                    <option value="2">Empleado 2</option>
                                </select>                                            
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-2" for="serie">Serie:<b style="color: red" title="Campo Requerido">*</b></label>
                            <div class="col-sm-4">
                                <input type="text" class="form-control" id="serie"  placeholder="Serie" >
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-2" for="fecha">Fecha:<b style="color: red" title="Campo Requerido">*</b></label>
                            <div class="col-sm-4">
                                <input type="date" class="form-control" id="fecha" >
                            </div>
                        </div>
                        <div class="form-group">
                            <label  class="control-label col-sm-2">Descripción:<b style="color: red" title="Campo Requerido">*</b></label>
                            <textarea rows="4" cols="101" id="descripcion" style="resize: none;"></textarea> 
                        </div>
                    </form> 
                </div><!--modal body-->
                <div class="modal-footer">
                    <div class="btn btn-group">

                    </div>
                    <div class="form-group">
                        <div class="btn btn-group">
                            <button id="agregarOM" class="btn btn-info" onclick="btnAgregarMoldes();"> 
                                <span class="glyphicon glyphicon-plus"></span>Agregar Moldes</button>
                        </div>
                        <button id="guardarV" type="button" class="btn btn-success" onclick="agregarEmpleado();">Guardar</button>
                        <a id="ordenVaceado" href="<c:url value='/vaceado'/>"><button type="button" class="btn btn-default">Cerrar</button></a>
                    </div>
                </div><!--modal footer-->
            </div><!--modal6-container-->
        </div><!--modal dialog-->
    </div><!--modalfade-->
</div><!--container-->

<br />
<br />
<br />
<div class="container" id="encabezadopoliza">   
    <div class="panel-group">
        <div class="panel panel-primary">
            <div class="panel-heading">Encabezado de Vaceado</div>
            <div id="contenidoPantalla" class="panel-body">        
                <div class="row">
                    <form class="form-horizontal" id="formPoliza">
                        <input type="hidden" name="${_csrf.parameterName}"value="${_csrf.token}" />
                        <div class="form-group">
                            <label  class="control-label col-sm-1">Empleado:<b style="color: red" title="Campo Requerido">*</b></label>
                            <div class="col-sm-2">
                                <!-- consulta catalogo -->
                                <select id="tipoPolizaa" class="form-control">
                                    <option value="0">Seleccione tipo</option>
                                    <c:forEach items="${lTipoPoliza}" var="tipopoliza">
                                        <option  value="${tipopoliza.tipoid}">${tipopoliza.tipopoliza} </option>
                                    </c:forEach>
                                </select>                                            
                            </div> 
                            <label  class="control-label col-sm-1">Fecha:<b style="color: red" title="Campo Requerido">*</b></label>
                            <div class="col-sm-2">
                                <input type="date" class="form-control" id="fechPoli" onchange="fechaPeriodo();" >
                            </div>
                            <label class="control-label col-sm-1" for="ser">Serie:<b style="color: red" title="Campo Requerido">*</b></label>
                            <div class="col-sm-2">
                                <input disabled type="text" class="form-control" id="serie" style="display: none" placeholder="Serie" value="${lusuarioS.usuarioid}" >
                                <input disabled type="text" class="form-control" id="SeriePoli" onkeyup="mayuscula(this);" placeholder="Serie" value="${lusuarioS.serie}" >
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-1" for="conce">Concepto: <b style="color: red" title="Campo Requerido">*</b></label>
                            <div class="col-sm-6">
                                <input type="text" class="form-control" id="concept" onkeyup="mayuscula(this);" size="35" maxlength="35" >
                            </div>
                        </div>
                        <div class="modal-footer">
                            <div class="form-group">
                                <a id="user" href="<c:url value='/poliza'/>"><button type="button" class="btn btn-default" onclick="limpiarForm('formPoliza');">Limpiar</button></a>
                            </div>
                        </div>
                    </form>
                </div><!-- ROW-->
            </div>
            <div id="contenidoPantalla" class="panel-body">        
                <div class="row">
                    <div class="form-group">
                        <div class="btn btn-group">
                            <input type="button" id ="btnMobPoliza" value="Agregar" class="estilobtn gris" onclick="btnMovimientoPoliza();">
                        </div>
                    </div>
                    <!-- Listado de bancos -->
                    <div  class="col-md-12">
                        <div  class="scroll-table" id="divTable">
                            <div class="table-responsive">
                                <table id="tableDetalle1" class="table table-striped">
                                    <thead>
                                        <tr>                            
                                            <th>Molde</th>
                                            <th>serie</th>
                                            <th>modelo</th>
                                            <th>Piezas</th>
                                            <th>descripcion</th>
                                        </tr>
                                    </thead>
                                    <tbody id="polizaDetalle1">
                                        <tr>
                                        </tr>      
                                    </tbody>
                                </table>
                                <div class="form-group">
                                    <div class="col-sm-10">
                                        <input type="int" class="form-control pull-right" style="width:20%" id="total" >
                                        <input type="int" class="form-control pull-right" style="width:20%" id="total2" >
                                        <div class="form-group">
                                            <button id="btbguardarPoliza" type="button" class="btn btn-success" onclick="agregarPoliza();">Guardar</button>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div><!-- row-->
            </div><!--class body -->   
        </div>
    </div>
</div>
<!--Container -->
<div class="container">
    <!-- Modal -->
    <div class="modal fade" id="myModal" role="dialog" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Polizas </h3>
                </div>
                <div class="modal-body">
                    <!--Formilario para editar poliza-->
                    <form class="form-horizontal"  modelAttribute="poliza" id="frmPoliza">
                        <div class="form-group">
                            <div class="col-sm-10">
                                <input type="text"  style="display:none" class="form-control" id="idPoliza" >
                            </div>
                        </div>
                        <div class="form-group">
                            <label  class="control-label col-sm-2">Empleado<b style="color: red" title="Campo Requerido">*</b></label>
                            <div class="col-sm-10">
                                <!-- consulta catalogo -->
                                <select id="tipoid" class="form-control">
                                    <option value="0">Seleccione tipo</option>
                                    <c:forEach items="${lTipoPoliza}" var="poliza">
                                        <option value="${poliza.tipoid}">${poliza.tipopoliza} </option>
                                    </c:forEach>
                                </select>                                            
                            </div> 
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-2" for="fecha">Fecha:<b style="color: red" title="Campo Requerido">*</b></label>
                            <div class="col-sm-10">
                                <input type="date" class="form-control" id="fechaDetalle" >
                            </div>
                        </div>
                        <div class="col-sm-2">
                            <c:forEach items="${lRol}" var="rol">
                                <input disabled type="text" class="form-control" id="rolidDetalle" style="display: none" placeholder="Serie" value="${rol.rolid}" >
                            </c:forEach>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-10">
                                <input type="num" class="form-control" style="display:none" id="numero2" >
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-2" for="consept">Descripcion:<b style="color: red" title="Campo Requerido">*</b></label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" onkeyup="mayuscula(this);" size="35" maxlength="35" id="conceptoDetalle" >
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-10">
                                <input type="text"  style="display:none" class="form-control" id="idMovPoliza">
                            </div>
                        </div>
                        <table id="tableDetalle" class="table table-striped">
                            <thead>
                                <tr>                            
                                    <th>Molde</th>
                                    <th>serie</th>
                                    <th>modelo</th>
                                    <th>Piezas</th>
                                    <th>descripcion</th>
                                </tr>
                            </thead>
                            <tbody id="polizaDetalle">
                                <tr>
                                </tr>      
                            </tbody>
                        </table>
                        <div class="form-group">
                            <div class="col-sm-10">
                                <input type="int" class="form-control pull-right" style="width:20%" id="tota_l" >
                                <input type="int" class="form-control pull-right" style="width:20%" id="total_2" >
                            </div>
                        </div>
                    </form> 
                </div><!--modal body-->
                <div class="modal-footer">
                    <div class="form-group">
                        <a id="user" href="<c:url value='/poliza'/>"><button type="button" class="btn btn-default" onclick="limpiarForm('frmPoliza');">Cerrar</button></a>
                        <button id="btnactualizarPoliza" onclick="actualizarPoliza();" class="btn btn-primary" >Actualizar</button>
                    </div>
                </div><!--modal footer-->
            </div><!--modal6-container-->
        </div><!--modal dialog-->
    </div><!--modalfade-->
</div><!--container-->
<div class="container">
    <!-- Modal -->
    <div class="modal fade" id="myModal9" role="dialog" data-backdrop="static" 
         data-keyboard="false">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Movimiento Polizas </h3>
                </div>
                <div class="modal-body">
                    <!--Formilario para editar poliza-->
                    <form class="form-horizontal"  modelAttribute="poliza" id="frmMoviPoliza">
                        <div class="form-group">
                            <div class="col-sm-10">
                                <input type="text"  style="display:none" class="form-control" id="idMovPoliza">
                            </div>
                        </div>
                        <div class="form-group">
                            <label  class="control-label col-sm-2">Molde:<b style="color: red" title="Campo Requerido">*</b></label>
                            <div class="col-sm-4">
                                <!-- consulta catalogo -->
                                <select id="idcuenta" class="form-control" onchange="verificarCuentaContable();">

                                </select>                                            
                            </div>   
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-2" for="refe">modelo:</label>
                            <div class="col-sm-4">
                                <input type="text" class="form-control" id="ref" >
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-2" for="debe">Serie:<b style="color: red" title="Campo Requerido">*</b></label>
                            <div class="col-sm-4">
                                <input type="num" class="form-control" id="deb" value="0" >
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-2" for="haber">cantidad:<b style="color: red" title="Campo Requerido">*</b></label>
                            <div class="col-sm-4">
                                <input type="num" class="form-control" id="hab" value="0" >
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-2" for="des">Descripcion:<b style="color: red" title="Campo Requerido">*</b></label>
                            <div class="col-sm-4">
                                <input type="text" class="form-control" onkeyup="mayuscula(this);" id="descrip" >
                            </div>
                        </div>
                    </form> 
                </div><!--modal body-->
                <div class="modal-footer">
                    <div class="form-group">
                        <input type="button" id ="btnAgregarMobPoliza" value="Agregar" class="btn btn-success" onclick="mostrarDetalleTBL();"> 
                        <button type="button" class="btn btn-default"  onclick="cerrarModal();">Cerrar</button>
                    </div>
                </div><!--modal footer-->
            </div><!--modal6-container-->
        </div><!--modal dialog-->
    </div><!--modalfade-->
</div><!--container-->
<div class="container">
    <!-- Modal -->
    <div class="modal fade" id="myModal10" role="dialog" data-backdrop="static" 
         data-keyboard="false">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Movimiento Polizas </h3>
                </div>
                <div class="modal-body">
                    <!--Formilario para editar poliza-->
                    <form class="form-horizontal"  modelAttribute="poliza" id="frmMoviPoliza">
                        <div class="form-group">
                            <div class="col-sm-10">
                                <input type="text"  style="display:none" class="form-control" id="idMovPoliza">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-2" for="refe">Ref:</label>
                            <div class="col-sm-4">
                                <input type="text" class="form-control" id="referencia" >
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-2" for="debe">Debe:<b style="color: red" title="Campo Requerido">*</b></label>
                            <div class="col-sm-4">
                                <input type="num" class="form-control" id="debe" value="0" >
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-2" for="haber">Haber:<b style="color: red" title="Campo Requerido">*</b></label>
                            <div class="col-sm-4">
                                <input type="num" class="form-control" id="haber" value="0" >
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-2" for="descripcion">Descripcion:<b style="color: red" title="Campo Requerido">*</b></label>
                            <div class="col-sm-4">
                                <input type="text" class="form-control" onkeyup="mayuscula(this);" id="descripcionM" >
                            </div>
                        </div>
                    </form> 
                </div><!--modal body-->
                <div class="modal-footer">
                    <div class="form-group">
                        <input type="button" id ="btnActualizarMobPoliza" value="Actualizar" class="estilobtn gris" onclick="actualizarMovimientoPoliza();"> 
                        <a id="user" href="<c:url value='/poliza'/>"><button type="button" class="btn btn-default" onclick="limpiarForm('frmPoliza');">Cerrar</button></a>
                    </div>
                </div><!--modal footer-->
            </div><!--modal6-container-->
        </div><!--modal dialog-->
    </div><!--modalfade-->
</div><!--container-->
</body>
</html> 
