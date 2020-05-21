export class Asistente {
    usuario: string;
    nombreOrg: string;
    solicitarCons: boolean;

    Asistente( usuario?: string, nombreOrg?: string, solicitarCons?: boolean){
        this.usuario = usuario;
        this.nombreOrg = nombreOrg;
        this.solicitarCons = solicitarCons;
    }
}
