/** Modelo Cliente */

export class ClientSearchResult {
    id_persona!: number;
    nombre_completo!: String
}

export class ClientEmail {
    dir_email!: string;
    ver_email: boolean = false
}

export class ClientDom {
    tipo_domicilio!: string;
    id_ref_cp!: number;
    nom_direccion!: string;
    no_ext!: string;
    no_int!: string;
    vigencia!: boolean;
}

export class ClientTel {
    tipo_tel!: string;
    no_tel!: number
}

export class Client {
    nom_1!: string;
    nom_2!: string;
    apellido_pat!: string;
    apellido_mat!: string;
    edad!: number;
    correos!: ClientEmail[]
    domicilios!: ClientDom[]
    telefonos!: ClientTel[]
}