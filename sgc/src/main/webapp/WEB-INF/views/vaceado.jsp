<%-- 
    Document   : Vaceado
    Created on : 23/07/2018, 05:42:54 PM
    Author     : HASANI
--%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@include file="index.jsp" %>
<script src="<c:url value='/assets/js/pages/ordenVaceado.js'/>" type="text/javascript"></script>
<br />
<br />
<br />
<div class="container" id="encabezadoVaceado" >   
    <div class="panel-group">
        <div class="panel panel-primary">
            <div class="panel-heading">Listado De Orden Vaceado</div>
            <div id="contenidoPantalla" class="panel-body">        
                <div class="row">
                    <form class="form-horizontal" id="formVaceado">
                        <input type="hidden" name="${_csrf.parameterName}"value="${_csrf.token}" />
                        <div class="form-group">
                            <label  class="control-label col-sm-2">Empleado:<b style="color: red" title="Campo Requerido">*</b></label>
                            <div class="col-sm-2">
                                <!-- consulta catalogo -->
                                <select id="tipoVaceado" class="form-control">
                                    <option value="0">Seleccione tipo</option>
                                    <c:forEach items="${lTipoVaceado}" var="tipoVaceado">
                                        <option  value="${tipoVaceado.tipoid}">${tipoVaceado.tipoVaceado} </option>
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
                            <label class="control-label col-sm-2" for="conce">Concepto: <b style="color: red" title="Campo Requerido">*</b></label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" id="concept" size="35" maxlength="35" >
                            </div>
                        </div>
                    </form>
                    <div class="btn btn-group">  
                        <button id="agregarV" class="btn btn-info" onclick="btnAgregarMoldes();"> 
                            <span class="glyphicon glyphicon-plus"></span>Agregar Moldes
                        </button>
                    </div>
                </div><!-- ROW-->
            </div>
            <hr  size="8px" color="black"/>      
            <div id="contenidoPantalla" class="panel-body">        
                <div class="row">
                    <!-- Listado de bancos -->
                    <div  class="col-md-12">
                        <div class="scroll-table" id="divTable">
                            <div  class="table-responsive">
                                <table id="tableOrdenVaceado" class="table table-striped">
                                    <thead style="background-color: rgb(251, 251, 251);">
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
                        <div class="btn btn-group">  
                            <button id="agregarOrden" class="btn btn-success" onclick="btnAgregarOrden();"> 
                                <span class="glyphicon glyphicon-plus"></span>Agregar Orden
                            </button>
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
                    <h3>Vaceados </h3>
                </div>
                <div class="modal-body">
                    <!--Formilario para editar Vaceado-->
                    <form class="form-horizontal"  modelAttribute="Vaceado" id="frmVaceado">
                        <div class="form-group">
                            <div class="col-sm-10">
                                <input type="text"  style="display:none" class="form-control" id="idVaceado" >
                            </div>
                        </div>
                        <div class="form-group">
                            <label  class="control-label col-sm-2">Empleado<b style="color: red" title="Campo Requerido">*</b></label>
                            <div class="col-sm-10">
                                <!-- consulta catalogo -->
                                <select id="tipoid" class="form-control">
                                    <option value="0">Seleccione tipo</option>
                                    <c:forEach items="${lTipoVaceado}" var="Vaceado">
                                        <option value="${Vaceado.tipoid}">${Vaceado.tipoVaceado} </option>
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
                                <input type="text"  style="display:none" class="form-control" id="idMovVaceado">
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
                            <tbody id="VaceadoDetalle">
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
                        <a id="user" href="<c:url value='/Vaceado'/>"><button type="button" class="btn btn-default" onclick="limpiarForm('frmVaceado');">Cerrar</button></a>
                        <button id="btnactualizarVaceado" onclick="actualizarVaceado();" class="btn btn-primary" >Actualizar</button>
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
                    <h3>Agregar Moldes Al Empleado</h3>
                </div>
                <div class="modal-body">
                    <!--Formilario para editar Vaceado-->
                    <form class="form-horizontal"  modelAttribute="Vaceado" id="frmMoviVaceado">
                        <div class="form-group">
                            <div class="col-sm-10">
                                <input type="text"  style="display:none" class="form-control" id="idVaceado">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-4" for="serie">Serie:<b style="color: red" title="Campo Requerido">*</b></label>
                            <div class="col-sm-4">
                                <input type="text" class="form-control" id="serie" value="" >
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-4" for="molde">Molde:</label>
                            <div class="col-sm-4">
                                <input type="text" class="form-control" id="molde" >
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-4" for="cantidad">Cantidad:<b style="color: red" title="Campo Requerido">*</b></label>
                            <div class="col-sm-4">
                                <input type="num" class="form-control" id="cantidad" value="0" >
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-4" for="des">Descripcion:<b style="color: red" title="Campo Requerido">*</b></label>
                            <div class="col-sm-4">
                                <input type="text" class="form-control" id="descrip" >
                            </div>
                        </div>
                    </form> 
                </div><!--modal body-->
                <div class="modal-footer">
                    <div class="form-group">
                        <input type="button" id ="btnAgregarVaceado" value="Agregar" class="btn btn-success" onclick="mostrarDetalleTBL();"> 
                        <button type="button" class="btn btn-default"  onclick="cerrarModal();">Cerrar</button>
                    </div>
                </div><!--modal footer-->
            </div><!--modal6-container-->
        </div><!--modal dialog-->
    </div><!--modalfade-->
</div><!--container-->
</body>
</html> 
