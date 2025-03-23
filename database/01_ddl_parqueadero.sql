/*==============================================================*/
/* Table: accesos                                               */
/*==============================================================*/
create table accesos (
   cod_usuario          int4                 not null,
   correo_acceso        varchar(200)         not null,
   clave_acceso         varchar(200)         not null,
   uuid_acceso          varchar(100)         not null,
   constraint pk_accesos primary key (cod_usuario)
);

-- set table ownership
alter table accesos owner to user_ingsoftparking
;
/*==============================================================*/
/* Index: indice_correo                                         */
/*==============================================================*/
create unique index indice_correo on accesos (
correo_acceso
);

/*==============================================================*/
/* Table: funcionalidades                                       */
/*==============================================================*/
create table funcionalidades (
   cod_funcionalidad    serial               not null,
   cod_padre_funcionalidad int4                 null,
   nombre_funcionalidad varchar(150)         not null,
   url_funcionalidad    varchar(250)         not null,
   constraint pk_funcionalidades primary key (cod_funcionalidad)
);

-- set table ownership
alter table funcionalidades owner to user_ingsoftparking
;
/*==============================================================*/
/* Table: ingresos                                              */
/*==============================================================*/
create table ingresos (
   cod_ingreso          serial               not null,
   cod_usuario          int4                 not null,
   fecha_ingreso        date                 not null,
   hora_ingreso         time                 not null,
   constraint pk_ingresos primary key (cod_ingreso)
);

-- set table ownership
alter table ingresos owner to user_ingsoftparking
;
/*==============================================================*/
/* Table: ingresos_servicios_otros                              */
/*==============================================================*/
create table ingresos_servicios_otros (
   cod_ingreso_servicio_otro serial               not null,
   cod_servicio_otro    int4                 not null,
   cod_puesto           int4                 not null,
   fecha_ingreso_servicio_otro date                 not null,
   fecha_salida_servicio_otro date                 null,
   constraint pk_ingresos_servicios_otros primary key (cod_ingreso_servicio_otro)
);

-- set table ownership
alter table ingresos_servicios_otros owner to user_ingsoftparking
;
/*==============================================================*/
/* Table: parqueaderos                                          */
/*==============================================================*/
create table parqueaderos (
   cod_parqueadero      serial               not null,
   cod_ubicacion        int4                 not null,
   nombre_parqueadero   varchar(250)         not null,
   direccion_parqueadero varchar(250)         not null,
   telefono_parqueadero varchar(50)          not null,
   constraint pk_parqueaderos primary key (cod_parqueadero)
);

-- set table ownership
alter table parqueaderos owner to user_ingsoftparking
;
/*==============================================================*/
/* Table: puestos                                               */
/*==============================================================*/
create table puestos (
   cod_puesto           serial               not null,
   cod_parqueadero      int4                 not null,
   cod_tipo_vehiculo    int4                 not null,
   detalle_puesto       varchar(100)         not null,
   constraint pk_puestos primary key (cod_puesto)
);

-- set table ownership
alter table puestos owner to user_ingsoftparking
;
/*==============================================================*/
/* Table: rel_rol_funcionalidad                                 */
/*==============================================================*/
create table rel_rol_funcionalidad (
   cod_rol              int4                 not null,
   cod_funcionalidad    int4                 not null,
   constraint pk_rel_rol_funcionalidad primary key (cod_rol, cod_funcionalidad)
);

-- set table ownership
alter table rel_rol_funcionalidad owner to user_ingsoftparking
;
/*==============================================================*/
/* Table: rel_turno_usuario                                     */
/*==============================================================*/
create table rel_turno_usuario (
   cod_turnousuario     serial               not null,
   cod_turno            int4                 not null,
   cod_usuario          int4                 not null,
   constraint pk_rel_turno_usuario primary key (cod_turnousuario)
);

-- set table ownership
alter table rel_turno_usuario owner to user_ingsoftparking
;
/*==============================================================*/
/* Table: rel_usuario_funcionalidad                             */
/*==============================================================*/
create table rel_usuario_funcionalidad (
   cod_usuario          int4                 not null,
   cod_funcionalidad    int4                 not null,
   favorito_rel_usuario_funcionali int2                 not null default 2
      constraint ckc_favorito_rel_usua_rel_usua check (favorito_rel_usuario_funcionali in (1,2)),
   constraint pk_rel_usuario_funcionalidad primary key (cod_usuario, cod_funcionalidad)
);

-- set table ownership
alter table rel_usuario_funcionalidad owner to user_ingsoftparking
;
/*==============================================================*/
/* Table: roles                                                 */
/*==============================================================*/
create table roles (
   cod_rol              serial               not null,
   nombre_rol           varchar(100)         not null,
   constraint pk_roles primary key (cod_rol)
);

-- set table ownership
alter table roles owner to user_ingsoftparking
;
/*==============================================================*/
/* Index: indice_nomrol                                         */
/*==============================================================*/
create unique index indice_nomrol on roles (
nombre_rol
);

/*==============================================================*/
/* Table: servicios_diarios                                     */
/*==============================================================*/
create table servicios_diarios (
   cod_servicio_diario  serial               not null,
   cod_parqueadero      int4                 not null,
   cod_vehiculo         int4                 not null,
   cod_puesto           int4                 not null,
   fecha_inicio_servicio_diario date                 not null,
   fecha_fin_servicio_diario date                 null,
   valor_servicio_diario decimal(10,2)        not null,
   constraint pk_servicios_diarios primary key (cod_servicio_diario)
);

-- set table ownership
alter table servicios_diarios owner to user_ingsoftparking
;
/*==============================================================*/
/* Table: servicios_otros                                       */
/*==============================================================*/
create table servicios_otros (
   cod_servicio_otro    serial               not null,
   cod_parqueadero      int4                 not null,
   cod_vehiculo         int4                 not null,
   fecha_pago_servicio_otro date                 not null,
   fecha_inicio_servicio_otro date                 not null,
   fecha_fin_servicio_otro date                 not null,
   valor_servicio_otro  decimal(10,2)        not null,
   constraint pk_servicios_otros primary key (cod_servicio_otro)
);

-- set table ownership
alter table servicios_otros owner to user_ingsoftparking
;
/*==============================================================*/
/* Table: tarifa_diaria                                         */
/*==============================================================*/
create table tarifa_diaria (
   cod_parqueadero      int4                 not null,
   cod_tipo_vehiculo    int4                 not null,
   valor_tarifa_diaria  decimal(10,2)        not null,
   constraint pk_tarifa_diaria primary key (cod_parqueadero, cod_tipo_vehiculo)
);

-- set table ownership
alter table tarifa_diaria owner to user_ingsoftparking
;
/*==============================================================*/
/* Table: tipos_vehiculos                                       */
/*==============================================================*/
create table tipos_vehiculos (
   cod_tipo_vehiculo    serial               not null,
   clase_tipo_vehiculo  varchar(150)         not null,
   constraint pk_tipos_vehiculos primary key (cod_tipo_vehiculo)
);

-- set table ownership
alter table tipos_vehiculos owner to user_ingsoftparking
;
/*==============================================================*/
/* Table: turnos                                                */
/*==============================================================*/
create table turnos (
   cod_turno            serial               not null,
   cod_parqueadero      int4                 null,
   descripcion_turno    varchar(200)         not null,
   fecha_turno          date                 not null,
   hora_inicio_turno    time                 not null,
   hora_fin_turno       time                 not null,
   constraint pk_turnos primary key (cod_turno)
);

-- set table ownership
alter table turnos owner to user_ingsoftparking
;
/*==============================================================*/
/* Table: ubicaciones                                           */
/*==============================================================*/
create table ubicaciones (
   cod_ubicacion        serial               not null,
   cod_padre_ubicacion  int4                 null,
   cod_externo_ubicacion varchar(10)          not null,
   nombre_ubicacion     varchar(150)         not null,
   constraint pk_ubicaciones primary key (cod_ubicacion)
);

-- set table ownership
alter table ubicaciones owner to user_ingsoftparking
;
/*==============================================================*/
/* Table: usuarios                                              */
/*==============================================================*/
create table usuarios (
   cod_usuario          serial               not null,
   cod_rol              int4                 not null,
   documento_usuario    varchar(150)         not null,
   nombres_usuario      varchar(150)         not null,
   apellidos_usuario    varchar(150)         not null,
   genero_usuario       int2                 not null
      constraint ckc_genero_usuario_usuarios check (genero_usuario in (1,2,3,4,5)),
   fecha_nacimiento_usuario date                 not null,
   telefono_usuario     varchar(50)          not null,
   constraint pk_usuarios primary key (cod_usuario)
);

-- set table ownership
alter table usuarios owner to user_ingsoftparking
;
/*==============================================================*/
/* Index: indice_documento                                      */
/*==============================================================*/
create unique index indice_documento on usuarios (
documento_usuario
);

/*==============================================================*/
/* Table: vehiculos                                             */
/*==============================================================*/
create table vehiculos (
   cod_vehiculo         serial               not null,
   cod_tipo_vehiculo    int4                 not null,
   cod_usuario          int4                 not null,
   placa_vehiculo       varchar(20)          not null,
   constraint pk_vehiculos primary key (cod_vehiculo)
);

-- set table ownership
alter table vehiculos owner to user_ingsoftparking
;
alter table accesos
   add constraint fk_accesos_ref_usuarios foreign key (cod_usuario)
      references usuarios (cod_usuario)
      on delete restrict on update cascade;

alter table funcionalidades
   add constraint fk_func_ref_func foreign key (cod_padre_funcionalidad)
      references funcionalidades (cod_funcionalidad)
      on delete restrict on update cascade;

alter table ingresos
   add constraint fk_ingresos_ref_accesos foreign key (cod_usuario)
      references accesos (cod_usuario)
      on delete restrict on update cascade;

alter table ingresos_servicios_otros
   add constraint fk_ingresos_ref_serviciotro foreign key (cod_servicio_otro)
      references servicios_otros (cod_servicio_otro)
      on delete restrict on update cascade;

alter table ingresos_servicios_otros
   add constraint fk_ingresosotros_ref_puestos foreign key (cod_puesto)
      references puestos (cod_puesto)
      on delete restrict on update cascade;

alter table parqueaderos
   add constraint fk_parquea_ref_ubica foreign key (cod_ubicacion)
      references ubicaciones (cod_ubicacion)
      on delete restrict on update cascade;

alter table puestos
   add constraint fk_puestos_ref_parquea foreign key (cod_parqueadero)
      references parqueaderos (cod_parqueadero)
      on delete restrict on update cascade;

alter table puestos
   add constraint fk_puestos_ref_tiposvehi foreign key (cod_tipo_vehiculo)
      references tipos_vehiculos (cod_tipo_vehiculo)
      on delete restrict on update cascade;

alter table rel_rol_funcionalidad
   add constraint fk_rel_rol_ref_roles foreign key (cod_rol)
      references roles (cod_rol)
      on delete restrict on update cascade;

alter table rel_rol_funcionalidad
   add constraint fk_rel_rol__ref_func foreign key (cod_funcionalidad)
      references funcionalidades (cod_funcionalidad)
      on delete restrict on update cascade;

alter table rel_turno_usuario
   add constraint fk_rel_turnos_ref_turnos foreign key (cod_turno)
      references turnos (cod_turno)
      on delete restrict on update cascade;

alter table rel_turno_usuario
   add constraint fk_rel_turnos_ref_usuarios foreign key (cod_usuario)
      references usuarios (cod_usuario)
      on delete restrict on update cascade;

alter table rel_usuario_funcionalidad
   add constraint fk_rel_usuario_ref_func foreign key (cod_funcionalidad)
      references funcionalidades (cod_funcionalidad)
      on delete restrict on update cascade;

alter table rel_usuario_funcionalidad
   add constraint fk_rel_usua_ref_usuarios foreign key (cod_usuario)
      references usuarios (cod_usuario)
      on delete restrict on update cascade;

alter table servicios_diarios
   add constraint fk_serviciosdia_ref_parquea foreign key (cod_parqueadero)
      references parqueaderos (cod_parqueadero)
      on delete restrict on update cascade;

alter table servicios_diarios
   add constraint fk_serviciodia_ref_vehiculo foreign key (cod_vehiculo)
      references vehiculos (cod_vehiculo)
      on delete restrict on update cascade;

alter table servicios_diarios
   add constraint fk_serviciosdia_ref_puestos foreign key (cod_puesto)
      references puestos (cod_puesto)
      on delete restrict on update cascade;

alter table servicios_otros
   add constraint fk_serviciosotros_ref_par foreign key (cod_parqueadero)
      references parqueaderos (cod_parqueadero)
      on delete restrict on update cascade;

alter table servicios_otros
   add constraint fk_serviciotro_ref_vehiculos foreign key (cod_vehiculo)
      references vehiculos (cod_vehiculo)
      on delete restrict on update cascade;

alter table tarifa_diaria
   add constraint fk_tarifa_diaria_ref_parq foreign key (cod_parqueadero)
      references parqueaderos (cod_parqueadero)
      on delete restrict on update cascade;

alter table tarifa_diaria
   add constraint fk_tarifadia_ref_tiposvehi foreign key (cod_tipo_vehiculo)
      references tipos_vehiculos (cod_tipo_vehiculo)
      on delete restrict on update cascade;

alter table turnos
   add constraint fk_turnos_ref_parqueadero foreign key (cod_parqueadero)
      references parqueaderos (cod_parqueadero)
      on delete restrict on update cascade;

alter table ubicaciones
   add constraint fk_ubicacion_ref_ubicacion foreign key (cod_padre_ubicacion)
      references ubicaciones (cod_ubicacion)
      on delete restrict on update cascade;

alter table usuarios
   add constraint fk_usuarios_ref_roles foreign key (cod_rol)
      references roles (cod_rol)
      on delete restrict on update cascade;

alter table vehiculos
   add constraint fk_vehiculo_ref_tiposvehi foreign key (cod_tipo_vehiculo)
      references tipos_vehiculos (cod_tipo_vehiculo)
      on delete restrict on update cascade;

alter table vehiculos
   add constraint fk_vehiculos_ref_usuarios foreign key (cod_usuario)
      references usuarios (cod_usuario)
      on delete restrict on update cascade;

