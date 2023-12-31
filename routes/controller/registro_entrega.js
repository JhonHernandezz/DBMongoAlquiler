var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from 'class-transformer';
export class Registro_Entrega {
    constructor(data) {
        Object.assign(this, data);
        this.ID_Registro = 0;
        this.ID_Alquiler_ID_Alquiler = 0;
        this.ID_Empleado_ID_Empleado = 0;
        this.Fecha_Entrega = "";
        this.Combustible_Entregado = "";
        this.Kilometraje_Entregado = 0;
    }
}
__decorate([
    Expose({ name: 'ID' }),
    Transform(({ value }) => {
        if (value === undefined || value === null) {
            throw { status: 422, message: `ID is required` };
        }
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: `Error en los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Registro_Entrega.prototype, "ID_Registro", void 0);
__decorate([
    Expose({ name: 'ID_Hire' }),
    Transform(({ value }) => {
        if (value === undefined || value === null) {
            throw { status: 422, message: `ID_Hire is required` };
        }
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: `Error en los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Registro_Entrega.prototype, "ID_Alquiler_ID_Alquiler", void 0);
__decorate([
    Expose({ name: 'ID_Employee' }),
    Transform(({ value }) => {
        if (value === undefined || value === null) {
            throw { status: 422, message: `ID_Employee is required` };
        }
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: `Error en los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Registro_Entrega.prototype, "ID_Empleado_ID_Empleado", void 0);
__decorate([
    Expose({ name: 'Date_Delivery' }),
    Transform(({ value }) => {
        if (value === undefined || value === null) {
            throw { status: 422, message: `Date_Delivery is required` };
        }
        if (/^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|1\d|2\d|3[01])$/.test(value))
            return value;
        else
            throw { status: 400, message: `Error en los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], Registro_Entrega.prototype, "Fecha_Entrega", void 0);
__decorate([
    Expose({ name: 'Fuel_Delivery' }),
    Transform(({ value }) => {
        if (value === undefined || value === null) {
            throw { status: 422, message: `Fuel_Delivery is required` };
        }
        if (/^[a-zA-Z0-9\s\W]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `Error en los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], Registro_Entrega.prototype, "Combustible_Entregado", void 0);
__decorate([
    Expose({ name: 'Mileage_Delivery' }),
    Transform(({ value }) => {
        if (value === undefined || value === null) {
            throw { status: 422, message: `Mileage_Delivery is required` };
        }
        if (Math.floor(value) && typeof value == "number")
            return Math.floor(value);
        else
            throw { status: 400, message: `Error en los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], Registro_Entrega.prototype, "Kilometraje_Entregado", void 0);
